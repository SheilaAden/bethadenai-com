export const operationsDescription =
  'Beth Aden brings order to operational chaos by coordinating teams, clarifying ownership, and building systems that move launches, bids, and business transitions forward.'

export const operationsServices = [
  {
    id: 'operations-support',
    title: 'Strategic Operations Support',
    description: 'Get ongoing help connecting leadership decisions to the work your team needs to do. I help clarify priorities, assign ownership, surface blockers, and keep decisions and deadlines visible.',
    deliverables: ['Clear owners and next steps', 'A regular check-in and reporting rhythm', 'Follow-through on decisions and blockers'],
  },
  {
    id: 'workflow-systems',
    title: 'Workflow & Systems Buildout',
    description: 'Fix a workflow that depends on someone remembering every step. I map how the work moves, build the handoffs and tools around it, and help the team put the new process to use.',
    deliverables: ['Workflow maps, checklists, and handoff guides', 'Trackers, dashboards, and exception reporting', 'Practical AI assistants or automations where they fit'],
  },
  {
    id: 'project-coordination',
    title: 'Launch, Bid & Transition Coordination',
    description: 'Bring me in when an important project depends on several teams moving together. I turn the moving pieces into a plan and keep track of what has to happen before the next milestone.',
    deliverables: ['A workback plan and readiness checklist', 'Coordination across teams and vendors', 'Decision tracking and handoff through the milestone'],
  },
]

export const selectedWork = [
  {
    slug: 'product-relaunch',
    title: 'Product relaunch coordination',
    headline: 'Getting a product relaunch ready across three teams',
    situation: 'A product relaunch depended on the website, warehouse inventory, and fulfillment being ready together. Each team had its own work to finish, and a decision in one area could change what another team needed to do.',
    role: 'I coordinated launch readiness across the teams. I kept open decisions and dependencies visible, followed up on who owned the next step, and brought questions about inventory and packaging to the people who could resolve them.',
    outcome: 'The team updated the inventory count and confirmed how aerosols would be packed for shipment. The relaunch work also gave us a clearer view of what the storefront and fulfillment teams still needed before opening orders.',
    tracker: [
      { work: 'Confirm sellable stock', owner: 'Warehouse', handoff: 'Share current counts with the storefront team.' },
      { work: 'Confirm packing instructions', owner: 'Fulfillment', handoff: 'Give the warehouse a consistent way to pack orders.' },
      { work: 'Check storefront readiness', owner: 'Web team', handoff: 'Raise any checkout or shipping issues before opening orders.' },
    ],
    description: 'Coordinating a product relaunch across the website, inventory, and fulfillment. My role is to keep launch requirements, open decisions, and team handoffs visible so each team knows what it needs from the others.',
  },
  {
    slug: 'paving-bid-and-transition',
    title: 'Paving bid and work-order transition',
    headline: 'Coordinating a paving bid while field work kept moving',
    situation: 'A construction services team had to prepare a paving bid while planning how to move incoming work orders to a new operating company. The bid had its own deadline, and crews still had open jobs to finish.',
    role: 'I brought together inputs from leadership, operations, and finance. I coordinated review of the questionnaire and supporting documents and helped clarify how to handle open jobs and new work orders during the transition.',
    outcome: 'The team assembled the bid package with the required questionnaire and pricing workbook and a signed cover letter. The transition plan gave the team a clear rule to work from: finish open jobs where they started and route new orders through the new operation at cutover.',
    tracker: [
      { work: 'Review bid package', owner: 'Bid team', handoff: 'Confirm inputs and assemble the files for final review.' },
      { work: 'Identify open jobs', owner: 'Field operations', handoff: 'Keep the open-job list with the team finishing that work.' },
      { work: 'Set new-order routing', owner: 'Operations', handoff: 'Tell scheduling where new orders go at cutover.' },
    ],
    description: 'Coordinating inputs and final review for a paving services bid while supporting a field operations transition. The work includes clarifying how open work orders are handled and how new ones are routed.',
  },
]
