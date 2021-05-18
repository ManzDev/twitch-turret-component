class PortalTurretAntenna extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
        --antenna-color: #3b3630;
      }

      .antenna-container {
        width: 40px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
      }

      .left.antenna {
        width: 20px;
        height: 40px;
      }

      .part {
        width: 4px;
        height: 20px;
        border-radius: 5px;
        background: var(--antenna-color);
        position: absolute;
        left: 10px;
      }

      .part.top {
        transform: translate(15px, 0);
      }

      .part.middle {
        transform: translate(8px, 12px) rotate(64deg);
      }

      .part.bottom {
        transform: translate(0, 25px);
      }

      .right.antenna {
        width: 4px;
        height: 15px;
        border-radius: 4px;
        position: relative;
        left: -3px;
        background: var(--antenna-color);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${PortalTurretAntenna.styles}</style>
    <div class="antenna-container">
      <div class="left antenna">
        <div class="part top"></div>
        <div class="part middle"></div>
        <div class="part bottom"></div>
      </div>
      <div class="right antenna"></div>
    </div>`;
  }
}

customElements.define("portal-turret-antenna", PortalTurretAntenna);
