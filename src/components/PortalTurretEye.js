class PortalTurretEye extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
        --turret-body-color: #eee;
        --turret-border-color: #3b3630;
        --turret-eye-gradient:
          radial-gradient(#df0a0a 30%, transparent 55%),
          repeating-conic-gradient(#c70a0a 1% 3%, #222 4% 5%);
      }

      .eye-container {
        position: absolute;
        width: 55px;
        height: 55px;
        background: conic-gradient(#aaa 25%, #fff 35% 80%, #aaa 90%);
        border-radius: 50%;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .line {
        position: absolute;
        top: 0;
        z-index: 5;
        content: "";
        display: block;
        width: 4px;
        height: 100%;
        transform: translateX(1px);
        background: var(--turret-border-color);
      }

      .eye {
        width: 35px;
        height: 35px;
        border: 3px solid var(--turret-border-color);
        border-radius: 50%;
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background-color: #222;
      }

      .iris {
        border-radius: 50%;
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--turret-eye-gradient);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(var(--x, 0), var(--y, 0));
        transition: transform 0.25s;
      }

      .pupil {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #222;
        background: radial-gradient(#222 80%, transparent 80%);
      }

      .eye.blink .lid-top {
        animation: topBlink 2s ease infinite alternate;
      }

      .eye.blink .lid-bottom {
        animation: bottomBlink 2s ease infinite alternate;
      }

      .eye .lid-top,
      .eye .lid-bottom {
        content: "";
        display: block;
        position: absolute;
        background: var(--turret-body-color);
        width: 100%;
        height: 50%;
        left: 0;
        right: 0;
        z-index: 20;
      }

      .eye .lid-top {
        border-bottom: 2px solid var(--turret-border-color);
        top: 0;
      }

      .eye .lid-bottom {
        border-top: 2px solid var(--turret-border-color);
        bottom: 0;
      }

      @keyframes topBlink {

        0%,
        85% {
          transform: translateY(-20px);
        }

        100% {
          transform: translateY(0);
        }
      }

      @keyframes bottomBlink {

        0%,
        85% {
          transform: translateY(20px);
        }

        100% {
          transform: translateY(1px);
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${PortalTurretEye.styles}</style>
    <div class="eye-container">
      <div class="eye blink">
        <div class="iris">
          <div class="pupil"></div>
        </div>
        <div class="lid-top"></div>
        <div class="lid-bottom"></div>
      </div>
      <div class="line"></div>
    </div>`;
  }
}

customElements.define("portal-turret-eye", PortalTurretEye);
