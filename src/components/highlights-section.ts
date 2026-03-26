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
      background: #f8fafc;
      padding: 5rem 2rem;
    }

    .section-header {
      text-align: center;
      max-width: 640px;
      margin: 0 auto 3.5rem;
    }

    .section-eyebrow {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #0ea5e9;
      margin-bottom: 0.75rem;
    }

    h2 {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 1rem;
      line-height: 1.2;
    }

    .section-sub {
      font-size: 1.05rem;
      color: #64748b;
      line-height: 1.65;
      margin: 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.75rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    .card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 1rem;
      padding: 2rem;
      transition: box-shadow 0.2s, transform 0.2s;
    }

    .card:hover {
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      transform: translateY(-4px);
    }

    .icon {
      font-size: 2.4rem;
      line-height: 1;
      margin-bottom: 1.1rem;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 0.65rem;
    }

    p {
      font-size: 0.95rem;
      color: #475569;
      line-height: 1.65;
      margin: 0;
    }
  `;

  render() {
    return html`
      <section id="highlights">
        <div class="section-header">
          <span class="section-eyebrow">What I bring</span>
          <h2>Broad Skills, Deep Expertise</h2>
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
