class PortalTurretBodyPart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
        --turret-body-color: #eee;
        --turret-border-color: #3b3630;
        --turret-border-filter: drop-shadow(3px 0 0 var(--turret-border-color)) drop-shadow(0 3px 0 var(--turret-border-color)) drop-shadow(-3px 0 0 var(--turret-border-color)) drop-shadow(0 -3px 0 var(--turret-border-color));
      }

      :host(.right) .part {
        transform: translateX(-60px) scaleX(-1);
      }

      :host(.right.open) .part {
        transform: translateX(0) scaleX(-1);
      }

      .part {
        border-left: 20px solid var(--turret-body-color);
        width: 40px;
        height: 175px;
        border-radius: 50% 0 0 50% / 70% 0 0 70%;
        position: relative;
        filter: var(--turret-border-filter);
        transform: translateX(60px);
        display: flex;
        align-items: center;
        transition: transform 0.5s;
      }

      :host(.open) .part {
        transform: translateX(0);
      }

      .chassis-container {
        background: var(--turret-body-color);
        width: 16px;
        height: 172px;
        clip-path: polygon(0 0, 100% 25%, 100% 98%, 0 100%);
        transform: translateX(-1px);
      }

      .weapon-container {
        width: 20px;
        height: 60px;
        border-radius: 0 8px 8px 0;
        background: #282829;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .weapon-container::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 4px solid #333;
        background: #111;
      }

      .weapon-container::after {
        content: "";
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        border: 4px solid #333;
        background: #111;
        margin-top: 6px;
      }

      .arm {
        position: absolute;
        z-index: -1;
        width: 60px;
        height: 10px;
        background: linear-gradient(#555 45%, #444 50%);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${PortalTurretBodyPart.styles}</style>
    <div class="part">
      <div class="chassis-container"></div>
      <div class="weapon-container"></div>
      <div class="arm"></div>
    </div>`;
  }
}

customElements.define("portal-turret-body-part", PortalTurretBodyPart);
