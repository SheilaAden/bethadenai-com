# Visibility OS lead sync

The contact form continues sending its existing email notification, then securely sends the same inquiry to the Visibility OS Leads module.

## Required website environment variables

- `VISIBILITY_OS_LEAD_WEBHOOK_URL`
- `VISIBILITY_OS_LEAD_WEBHOOK_SECRET`

The webhook URL should point to:

`https://beth-ai-visibility-os.vercel.app/api/integrations/website-leads`

The secret must match `WEBSITE_LEAD_WEBHOOK_SECRET` in the Visibility OS Vercel project.

A lead-sync failure is logged server-side but does not show the visitor a false form failure after their email notification was successfully sent.
