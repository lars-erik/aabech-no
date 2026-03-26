import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './ac-logo.js';

@customElement('consulting-hero')
export class ConsultingHero extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      background: #0b1220;
      color: #f1f5f9;
      padding: 6rem 2rem 5rem;
      text-align: center;
    }

    .hero-inner {
      max-width: 720px;
      margin: 0 auto;
    }

    ac-logo {
      --ac-color: white;
      --ac-size: 96px;
      display: block;
      margin: 0 auto 2.5rem;
    }

    h1 {
      font-family: var(--font-sans, 'Inter', system-ui, sans-serif);
      font-size: clamp(2.4rem, 6vw, 4rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      margin: 0 0 1.5rem;
      color: #f8fafc;
    }

    .tagline {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: clamp(1.1rem, 2.5vw, 1.35rem);
      color: #94a3b8;
      max-width: 580px;
      margin: 0 auto 3rem;
      line-height: 1.7;
      font-weight: 400;
    }

    .cta {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: #38bdf8;
      color: #0b1220;
      text-decoration: none;
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 700;
      font-size: 1.05rem;
      padding: 0.85rem 2.2rem;
      border-radius: 0.5rem;
      transition: background 0.15s, transform 0.15s;
    }

    .cta:hover {
      background: #7dd3fc;
      transform: translateY(-2px);
    }
  `;

  render() {
    return html`
      <section class="hero">
        <div class="hero-inner">
          <ac-logo animated></ac-logo>
          <h1>Aabech Consulting</h1>
          <p class="tagline">
            Independent software consultant with 30+ years of hands-on experience
            across telecom, energy, HR and e-commerce.
          </p>
          <a
            href="https://www.linkedin.com/in/aabech?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            class="cta"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </section>
    `;
  }
}
