import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: '🏭',
    title: 'Multi-Industry Expertise',
    description:
      'Delivered enterprise software across telecom, energy, HR and e-commerce sectors — bringing cross-domain insight that drives robust, adaptable designs.',
  },
  {
    icon: '🔗',
    title: 'CMS · CRM · Integration · BI',
    description:
      'Deep experience building and integrating content management, customer relationship, business intelligence and enterprise integration platforms.',
  },
  {
    icon: '✅',
    title: 'Automated Testing & TDD/BDD',
    description:
      'Advocate for test-driven and behaviour-driven development. Writing tests first is the fastest path to clean, confident, defect-free software.',
  },
  {
    icon: '⚙️',
    title: 'Agile Architecture',
    description:
      'Architecture that evolves with the product. Lean design decisions, evolutionary refactoring and continuous feedback loops keep systems healthy over time.',
  },
];

@customElement('highlights-section')
export class HighlightsSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    section {
      background: #111827;
      padding: 6rem 2rem;
    }

    .section-header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 4rem;
    }

    h2 {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: clamp(1.9rem, 4vw, 2.75rem);
      font-weight: 800;
      color: #f8fafc;
      margin: 0 0 1rem;
      letter-spacing: -0.03em;
      line-height: 1.15;
    }

    .section-sub {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 1.1rem;
      color: #94a3b8;
      line-height: 1.7;
      margin: 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      max-width: 1080px;
      margin: 0 auto;
    }

    .card {
      background: #1e293b;
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 0.75rem;
      padding: 2rem 2rem 2.25rem;
      transition: border-color 0.2s;
    }

    .card:hover {
      border-color: rgba(56, 189, 248, 0.35);
    }

    .icon {
      font-size: 2rem;
      line-height: 1;
      margin-bottom: 1.25rem;
    }

    h3 {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: #f1f5f9;
      margin: 0 0 0.75rem;
      letter-spacing: -0.01em;
    }

    p {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 1rem;
      color: #94a3b8;
      line-height: 1.7;
      margin: 0;
    }
  `;

  render() {
    return html`
      <section id="highlights">
        <div class="section-header">
          <h2>What I bring</h2>
          <p class="section-sub">
            30 years of building software at scale across industries — always with quality,
            maintainability and delivery speed in mind.
          </p>
        </div>
        <div class="grid">
          ${highlights.map(
            (h) => html`
              <div class="card">
                <div class="icon">${h.icon}</div>
                <h3>${h.title}</h3>
                <p>${h.description}</p>
              </div>
            `
          )}
        </div>
      </section>
    `;
  }
}
