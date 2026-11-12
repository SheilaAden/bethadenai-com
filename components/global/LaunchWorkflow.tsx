'use client'

import { useState } from 'react'
import { Container } from '@/components/global/Container'
import { Section } from '@/components/global/Section'
import styles from './LaunchWorkflow.module.css'

const stages = [
  {
    name: 'Website',
    status: 'Waiting on inventory',
    blocker: 'The product pages need confirmed quantities before checkout can go live.',
    owner: 'Web lead',
    next: 'Use the confirmed counts to set availability and run a test checkout.',
    waiting: 'Launch lead, for the checkout go-ahead.',
  },
  {
    name: 'Inventory',
    status: 'Count in progress',
    blocker: 'The warehouse count needs to match the quantities listed for sale.',
    owner: 'Inventory lead',
    next: 'Verify launch stock and share the count with the web and fulfillment teams.',
    waiting: 'Website and fulfillment, for the confirmed quantities.',
  },
  {
    name: 'Fulfillment',
    status: 'Test order pending',
    blocker: 'Packing and shipping need to be tested before orders open.',
    owner: 'Fulfillment lead',
    next: 'Pack a test order and verify the label, shipping rate, and tracking update.',
    waiting: 'Launch lead, for confirmation that orders are ready to ship.',
  },
]

export function LaunchWorkflow() {
  const [active, setActive] = useState(0)
  const stage = stages[active]

  return (
    <Section background="navy" id="launch-workflow" className="text-white">
      <Container>
        <div className={styles.layout}>
          <div>
            <h2 className="text-3xl md:text-4xl">What’s holding up the launch?</h2>
            <p className="mt-4 max-w-xl text-silver">
              Explore an example product launch. Pick a team to see what’s blocked, who owns the next step, and who’s waiting on it.
            </p>

            <div className={styles.scene} role="group" aria-label="Launch teams">
              {stages.map(({ name, status }, index) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={index === active}
                  aria-controls="launch-workflow-detail"
                  className={styles.card}
                  onClick={() => setActive(index)}
                >
                  <span className={styles.name}>{name}</span>
                  <span className={styles.status}>{status}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.detail} id="launch-workflow-detail" aria-live="polite" aria-atomic="true">
            <h3 className="text-2xl">{stage.name}</h3>
            <p className="mt-3 text-graphite">{stage.blocker}</p>
            <dl className={styles.facts}>
              <div><dt>Owner</dt><dd>{stage.owner}</dd></div>
              <div><dt>Next step</dt><dd>{stage.next}</dd></div>
              <div><dt>Waiting on it</dt><dd>{stage.waiting}</dd></div>
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  )
}
