import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import rawSvg from '../../public/logo.svg?raw';

// Extract viewBox and path `d` attribute from the favicon SVG at build time.
// logo.svg is expected to contain exactly one <path> element.
const viewBoxMatch = rawSvg.match(/viewBox="([^"]+)"/);
const viewBox = viewBoxMatch?.[1] ?? '0 0 411 362';
const pathD = rawSvg.match(/\sd="([^"]+)"/)?.[1] ?? '';

/**
 * <ac-logo> – SVG logo sourced from /public/logo.svg.
 *
 * The path data is imported at build time from logo.svg so both assets
 * always stay in sync.
 *
 * CSS custom properties:
 *   --ac-color   fill colour     (default: white)
 *   --ac-size    width & height  (default: 120px)
 *
 * Attributes:
 *   animated   (boolean) – draw-on reveal animation on mount
 */
@customElement('ac-logo')
export class AcLogo extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'animated' }) 
  animated = false;

  static styles = css`
    :host {
      display: inline-block;
      width:  var(--ac-size, 120px);
      height: var(--ac-size, 120px);
    }

    svg {
      width: 100%;
      height: 100%;
    }

    path {
      /* fill: var(--ac-color, white); */
      fill-rule: evenodd;
    }

    /* draw-on reveal animation (only when [animated]) */
    :host([animated]) svg {
      clip-path: inset(0 100% 0 0);
      animation: ac-reveal 0.75s ease-out forwards 0.05s;
    }

    @keyframes ac-reveal {
      to { clip-path: inset(0 0% 0 0); }
    }
  `;

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${viewBox}"
        role="img"
        aria-label="AC – Aabech Consulting"
      >
        <title>AC – Aabech Consulting</title>
        <path d="${pathD}" id="ac-logo-path" fill-rule="evenodd" stroke="rgb(255, 255, 255)" stroke-width="19px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"></path>
      </svg>
    `;
  }
}
