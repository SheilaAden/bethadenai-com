import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/services/ai-visibility-audit', destination: '/services', permanent: true },
      { source: '/services/ai-strategy', destination: '/services', permanent: true },
      { source: '/services/ai-implementation', destination: '/services#workflow-systems', permanent: true },
      { source: '/recovery', destination: '/services', permanent: true },
      { source: '/resources', destination: '/work', permanent: true },
      {
        source: '/resources/:slug(what-is-ai-visibility|what-is-geo|what-is-aeo|how-does-chatgpt-decide-which-businesses-to-recommend|why-isnt-my-business-showing-up-in-ai-search|ai-visibility-readiness-checklist)',
        destination: '/work',
        permanent: true,
      },
      { source: '/products/ai-visibility-starter-kit', destination: '/contact', permanent: true },
    ]
  },
}

export default nextConfig
