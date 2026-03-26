import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('contact-section')
export class ContactSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    section {
      background: linear-gradient(135deg, #1a2a4a 0%, #0d1b35 100%);
      padding: 5rem 2rem;
      text-align: center;
      color: #fff;
    }

    .inner {
      max-width: 640px;
      margin: 0 auto;
    }

    .eyebrow {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #7dd3fc;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 800;
      margin: 0 0 1rem;
    }

    p {
      font-size: 1.05rem;
      color: #cbd5e1;
      line-height: 1.65;
      margin: 0 0 2.5rem;
    }

    .linkedin-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: #0077b5;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
      font-size: 1rem;
      padding: 0.85rem 2.2rem;
      border-radius: 0.5rem;
      transition: background 0.2s, transform 0.2s;
      box-shadow: 0 4px 20px rgba(0, 119, 181, 0.45);
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
          <span class="eyebrow">Get in touch</span>
          <h2>Let's work together</h2>
          <p>
            Looking for an experienced independent consultant to help with your next project?
            Reach out on LinkedIn and let's start a conversation.
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
