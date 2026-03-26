import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('consulting-hero')
export class ConsultingHero extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      background: linear-gradient(135deg, #1a2a4a 0%, #0d1b35 60%, #0a3060 100%);
      color: #fff;
      padding: 5rem 2rem 4rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 20% 50%, rgba(0, 120, 215, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(0, 180, 120, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero-inner {
      position: relative;
      max-width: 860px;
      margin: 0 auto;
    }

    .badge {
      display: inline-block;
      background: rgba(0, 160, 200, 0.2);
      border: 1px solid rgba(0, 160, 200, 0.5);
      color: #7dd3fc;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 0.35rem 1rem;
      border-radius: 999px;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: clamp(2.2rem, 6vw, 3.8rem);
      font-weight: 800;
      line-height: 1.15;
      margin: 0 0 1rem;
      letter-spacing: -0.02em;
    }

    h1 span {
      background: linear-gradient(90deg, #38bdf8, #4ade80);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .tagline {
      font-size: clamp(1rem, 2.5vw, 1.25rem);
      color: #cbd5e1;
      max-width: 640px;
      margin: 0 auto 2.5rem;
      line-height: 1.65;
    }

    .cta-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(90deg, #0ea5e9, #06b6d4);
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.8rem 2rem;
      border-radius: 0.5rem;
      transition: opacity 0.2s, transform 0.2s;
      box-shadow: 0 4px 20px rgba(14, 165, 233, 0.4);
    }

    .cta-primary:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }

    .cta-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: transparent;
      color: #e2e8f0;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.8rem 2rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(226, 232, 240, 0.3);
      transition: background 0.2s, transform 0.2s;
    }

    .cta-secondary:hover {
      background: rgba(226, 232, 240, 0.08);
      transform: translateY(-2px);
    }

    .stats {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-top: 3.5rem;
      flex-wrap: wrap;
    }

    .stat {
      text-align: center;
    }

    .stat-value {
      display: block;
      font-size: 2.2rem;
      font-weight: 800;
      background: linear-gradient(90deg, #38bdf8, #4ade80);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }

    .stat-label {
      display: block;
      font-size: 0.85rem;
      color: #94a3b8;
      margin-top: 0.35rem;
      letter-spacing: 0.04em;
    }
  `;

  render() {
    return html`
      <section class="hero">
        <div class="hero-inner">
          <div class="badge">Independent Software Consultant</div>
          <h1>Aabech Consulting<br /><span>Delivering Proven Solutions</span></h1>
          <p class="tagline">
            Three decades of hands-on software engineering across telecom, energy, HR and
            e-commerce — turning complex challenges into reliable, maintainable systems.
          </p>
          <div class="cta-group">
            <a
              href="https://www.linkedin.com/in/aabech?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              class="cta-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a href="#highlights" class="cta-secondary">
              Explore expertise ↓
            </a>
          </div>
          <div class="stats">
            <div class="stat">
              <span class="stat-value">30+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat">
              <span class="stat-value">4</span>
              <span class="stat-label">Industry Verticals</span>
            </div>
            <div class="stat">
              <span class="stat-value">Full-Stack</span>
              <span class="stat-label">End-to-End Delivery</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
