import "./PortalTurretBodyPart.js";
import "./PortalTurretEye.js";

const fxOpen = new Audio("turret-fx-despliegue.mp3");
const fxClose = new Audio("turret-fx-cierre.mp3");

class PortalTurretBody extends HTMLElement {
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

      .body-container {
        width: 100%;
        height: 225px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      .body {
        width: 125px;
        height: 225px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        z-index: 5;
        filter: var(--turret-border-filter);
      }

      /* Central line */
      .body::before {
        position: absolute;
        top: 0;
        z-index: 5;
        content: "";
        display: block;
        width: 4px;
        height: 100%;
        background: var(--turret-border-color);
      }

      .body-top {
        position: absolute;
        top: 0;
        background: var(--turret-body-color);
        width: 100px;
        height: 200px;
        border-radius: 50%;
        clip-path: polygon(0 0, 100% 0, 100% 20%, 80% 35%, 20% 35%, 0 20%);
      }

      .body-core {
        background: var(--turret-body-color);
        width: 75px;
        height: 200px;
        border-radius: 50%;
      }

      portal-turret-eye {
        position: absolute;
        transform: translate(-28px, -115px);
        z-index: 10;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  toggleLeftPart() {
    const left = this.shadowRoot.querySelector("portal-turret-body-part.left");
    const isOpen = left.classList.contains("open");
    left.classList.toggle("open");

    if (isOpen) { fxClose.play(); } else { fxOpen.play(); }
  }

  toggleRightPart() {
    const right = this.shadowRoot.querySelector("portal-turret-body-part.right");
    right.classList.toggle("open");
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${PortalTurretBody.styles}</style>
    <div class="body-container">
      <portal-turret-body-part class="left"></portal-turret-body-part>
      <div class="body">
        <div class="body-top"></div>
        <div class="body-core"></div>
      </div>
      <portal-turret-body-part class="right"></portal-turret-body-part>
      <portal-turret-eye></portal-turret-eye>
    </div>
    `;
    this.shadowRoot.querySelector(".body").addEventListener("click", () => {
      this.toggleLeftPart();
      this.toggleRightPart();
    });
  }
}

customElements.define("portal-turret-body", PortalTurretBody);
