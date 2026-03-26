import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('contact-section')
export class ContactSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    section {
      background: #0b1220;
      padding: 6rem 2rem;
      text-align: center;
      color: #f1f5f9;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }

    .inner {
      max-width: 560px;
      margin: 0 auto;
    }

    h2 {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: clamp(1.9rem, 4vw, 2.75rem);
      font-weight: 800;
      margin: 0 0 1.25rem;
      letter-spacing: -0.03em;
      line-height: 1.15;
      color: #f8fafc;
    }

    p {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 1.1rem;
      color: #94a3b8;
      line-height: 1.7;
      margin: 0 0 2.5rem;
    }

    .linkedin-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: #0077b5;
      color: #fff;
      text-decoration: none;
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 700;
      font-size: 1.05rem;
      padding: 0.85rem 2.2rem;
      border-radius: 0.5rem;
      transition: background 0.15s, transform 0.15s;
    }

    .linkedin-btn:hover {
      background: #005885;
      transform: translateY(-2px);
    }

    svg {
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <section id="contact">
        <div class="inner">
          <h2>Let's work together</h2>
          <p>
            Looking for an experienced independent consultant? Reach out on LinkedIn and let's
            start a conversation.
          </p>
          <a
            href="https://www.linkedin.com/in/aabech?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View LinkedIn Profile
          </a>
        </div>
      </section>
    `;
  }
}
