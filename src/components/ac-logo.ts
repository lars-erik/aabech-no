import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Generates an SVG path string for a donut (ring) shape using the even-odd fill rule.
 * Outer circle is drawn clockwise; inner counter-clockwise so the centre is punched out
 * and remains truly transparent regardless of background colour.
 */
function donutPath(cx: number, cy: number, R: number, r: number): string {
  // Full-circle arc trick: arc from point to almost the same point
  const outer = `M${cx},${cy - R} A${R},${R} 0 1,1 ${cx - 0.001},${cy - R} Z`;
  const inner = `M${cx},${cy - r} A${r},${r} 0 1,0 ${cx - 0.001},${cy - r} Z`;
  return `${outer} ${inner}`;
}

/**
 * <ac-logo> – SVG trace of the Aabech Consulting "AC" circuit-board monogram.
 *
 * The "A" and "C" share a common right spine; the C is formed by two
 * horizontal arms that branch off the spine with hollow-ring terminal dots.
 *
 * CSS custom properties:
 *   --ac-color   stroke / fill colour  (default: white)
 *   --ac-size    width & height        (default: 120px)
 *
 * Attributes:
 *   animated   (boolean) – triggers a sequential draw-on animation on mount
 */
@customElement('ac-logo')
export class AcLogo extends LitElement {
  @property({ type: Boolean, reflect: true }) animated = false;

  static styles = css`
    :host {
      display: inline-block;
      width: var(--ac-size, 120px);
      height: var(--ac-size, 120px);
    }

    svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    /* ── shared stroke style ── */
    .ac-line {
      fill: none;
      stroke: var(--ac-color, white);
      stroke-width: 9;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* ── donut terminal dots ── */
    .ac-dot {
      fill: var(--ac-color, white);
      fill-rule: evenodd;
    }

    /* ════════════════════════════════════════════
       Draw-on animation (only when [animated])
       ════════════════════════════════════════════ */

    /* A – left leg  length ≈ 171 */
    :host([animated]) .line-left-leg {
      stroke-dasharray: 171;
      stroke-dashoffset: 171;
      animation: ac-draw 0.55s ease-out forwards 0.05s;
    }

    /* A/C – shared spine  length ≈ 161 */
    :host([animated]) .line-spine {
      stroke-dasharray: 161;
      stroke-dashoffset: 161;
      animation: ac-draw 0.5s ease-out forwards 0.15s;
    }

    /* C – top arm  length ≈ 82 */
    :host([animated]) .line-top-arm {
      stroke-dasharray: 82;
      stroke-dashoffset: 82;
      animation: ac-draw 0.3s ease-out forwards 0.28s;
    }

    /* A – crossbar  length ≈ 37 */
    :host([animated]) .line-crossbar {
      stroke-dasharray: 37;
      stroke-dashoffset: 37;
      animation: ac-draw 0.2s ease-out forwards 0.55s;
    }

    /* C – bottom arm  length ≈ 57 */
    :host([animated]) .line-bottom-arm {
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
      animation: ac-draw 0.25s ease-out forwards 0.48s;
    }

    /* dots fade in after the lines are drawn */
    :host([animated]) .ac-dot {
      opacity: 0;
      animation: ac-appear 0.2s ease-out forwards;
    }
    :host([animated]) .dot-apex { animation-delay: 0.72s; }
    :host([animated]) .dot-bl   { animation-delay: 0.62s; }
    :host([animated]) .dot-br   { animation-delay: 0.76s; }
    :host([animated]) .dot-ct   { animation-delay: 0.60s; }
    :host([animated]) .dot-cb   { animation-delay: 0.75s; }

    @keyframes ac-draw {
      to { stroke-dashoffset: 0; }
    }
    @keyframes ac-appear {
      to { opacity: 1; }
    }
  `;

  /*
   * Layout (viewBox 0 0 260 220)
   * ───────────────────────────────────────────────────────────────
   *  Key points (scaled from original image to 160px mark height):
   *
   *  APEX  = (112,  22)   apex of A / top of shared A–C spine
   *  BL    = ( 48, 182)   A bottom-left foot
   *  BR    = (122, 182)   A bottom-right foot / C spine bottom
   *  CT    = (195,  48)   C top arm terminal  (≈16% below apex)
   *  CB    = (178, 154)   C bottom arm terminal (≈83% down)
   *
   *  C arm branch points on the spine (computed):
   *    top arm start    y=48  → (114,  48)
   *    bottom arm start y=154 → (120, 154)
   *
   *  Crossbar intersections at y=110 (≈55% height):
   *    left-leg  → ( 77, 110)
   *    spine     → (118, 110)
   * ───────────────────────────────────────────────────────────────
   */
  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260 220"
        role="img"
        aria-label="AC – Aabech Consulting"
      >
        <title>AC – Aabech Consulting</title>

        <!-- ── strokes ── -->

        <!-- A: left leg  BL(48,182) → APEX(112,22) -->
        <line class="ac-line line-left-leg" x1="48" y1="182" x2="112" y2="22" />

        <!-- A/C: shared right spine  APEX(112,22) → BR(122,182) -->
        <line class="ac-line line-spine" x1="112" y1="22" x2="122" y2="182" />

        <!-- A: crossbar  left-leg(77,110) → spine(118,110) -->
        <line class="ac-line line-crossbar" x1="77" y1="110" x2="118" y2="110" />

        <!-- C: top arm  spine(114,48) → CT(195,48) -->
        <line class="ac-line line-top-arm" x1="114" y1="48" x2="195" y2="48" />

        <!-- C: bottom arm  spine(120,154) → CB(178,154) -->
        <line class="ac-line line-bottom-arm" x1="120" y1="154" x2="178" y2="154" />

        <!-- ── terminal dots (true transparent-hole donuts via even-odd path) ── -->

        <!-- apex -->
        <path class="ac-dot dot-apex" d="${donutPath(112, 22, 8, 3.5)}" />

        <!-- A bottom-left -->
        <path class="ac-dot dot-bl" d="${donutPath(48, 182, 8, 3.5)}" />

        <!-- A bottom-right / C spine bottom -->
        <path class="ac-dot dot-br" d="${donutPath(122, 182, 8, 3.5)}" />

        <!-- C top arm terminal -->
        <path class="ac-dot dot-ct" d="${donutPath(195, 48, 8, 3.5)}" />

        <!-- C bottom arm terminal -->
        <path class="ac-dot dot-cb" d="${donutPath(178, 154, 8, 3.5)}" />
      </svg>
    `;
  }
}

