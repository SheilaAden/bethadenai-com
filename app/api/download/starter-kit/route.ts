/**
 * GET /api/download/starter-kit?token=xxx&sid=yyy
 *
 * Serves the AI Visibility Starter Kit™ PDF to verified purchasers.
 * The PDF lives in /private — outside /public — and is NEVER served statically.
 *
 * Verification:
 *   token = HMAC-SHA256(sid, DOWNLOAD_TOKEN_SECRET)
 *   If the token matches, serve the file. Otherwise, 403.
 *
 * ENV VARS REQUIRED:
 *   DOWNLOAD_TOKEN_SECRET — same secret used in /api/verify-purchase
 */

import { NextRequest, NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { readFile } from 'fs/promises'
import path from 'path'

function verifyToken(sessionId: string, token: string, secret: string): boolean {
  try {
    const expected = createHmac('sha256', secret).update(sessionId).digest('hex')
    // Use timing-safe comparison to prevent timing attacks
    const a = Buffer.from(expected, 'hex')
    const b = Buffer.from(token.length === expected.length ? token : expected, 'hex')
    return token.length === expected.length && timingSafeEqual(a, b)
  } catch {
    return false
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const token     = searchParams.get('token') ?? ''
  const sessionId = searchParams.get('sid')   ?? ''

  // ── Validate params ────────────────────────────────────────────────────
  if (!token || !sessionId || !sessionId.startsWith('cs_')) {
    return new NextResponse('Access denied.', { status: 403 })
  }

  const secret = process.env.DOWNLOAD_TOKEN_SECRET
  if (!secret) {
    console.error('[download/starter-kit] DOWNLOAD_TOKEN_SECRET not configured')
    return new NextResponse('Server configuration error.', { status: 500 })
  }

  // ── Verify HMAC token ──────────────────────────────────────────────────
  if (!verifyToken(sessionId, token, secret)) {
    console.warn('[download/starter-kit] Invalid token for session:', sessionId)
    return new NextResponse('Access denied.', { status: 403 })
  }

  // ── Serve the PDF ──────────────────────────────────────────────────────
  try {
    const pdfPath = path.join(process.cwd(), 'private', 'AI_Visibility_Starter_Kit_v2_Beth_Aden_AI.pdf')
    const fileBuffer = await readFile(pdfPath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="AI_Visibility_Starter_Kit_Beth_Aden_AI.pdf"',
        'Content-Length': String(fileBuffer.length),
        // Prevent caching of the download URL
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (err) {
    console.error('[download/starter-kit] File read error:', err)
    return new NextResponse(
      'Download unavailable. Please contact hello@bethadenai.com.',
      { status: 500 }
    )
  }
}
