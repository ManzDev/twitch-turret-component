import "./PortalTurretAntenna.js";
import "./PortalTurretBody.js";
import "./PortalTurretLegs.js";

class PortalTurret extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        width: 275px;
      }`;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${PortalTurret.styles}</style>
      <portal-turret-antenna></portal-turret-antenna>
      <portal-turret-body></portal-turret-body>
      <portal-turret-legs></portal-turret-legs>
    `;
  }
}

customElements.define("portal-turret", PortalTurret);
