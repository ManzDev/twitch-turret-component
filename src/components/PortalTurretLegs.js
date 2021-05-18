class PortalTurretLegs extends HTMLElement {
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

      .legs-container {
        width: 150px;
        height: 100px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        filter: var(--turret-border-filter);
      }

      .top {
        position: absolute;
        width: 80px;
        height: 20px;
        background: #333;
        z-index: 5;
      }

      .tube {
        position: absolute;
        border: 10px solid #444;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%);
      }

      .tube.left {
        transform: translate(-25px, -48px) scale(-1, -1);
      }

      .tube.right {
        transform: translate(35px, -48px) scale(1, -1);
      }

      .leg {
        width: 20px;
        height: 100px;
        background: linear-gradient(to bottom, #484848 40%, #656769 42%);
        clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);
        position: relative;
      }

      .leg.left {
        transform: rotate(25deg);
        z-index: 6;
      }

      .leg.middle {
        transform: translateY(-15px);
      }

      .leg.right {
        transform: rotate(-25deg);
        z-index: 6;
      }

      .chassis {
        position: absolute;
        width: 32px;
        height: 32px;
        background: linear-gradient(#ccc 25%, var(--turret-body-color) 35%);
        border-radius: 25px 25px 5px 5px / 10px 10px 30px 30px;
        z-index: 6;
      }

      .chassis.left {
        top: -8px;
        left: 18px;
        transform: rotate(25deg);
      }

      .chassis.right {
        top: -8px;
        right: 18px;
        transform: rotate(-25deg);
      }

      .chassis-container {
        position: absolute;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${PortalTurretLegs.styles}</style>
    <div class="legs-container">
      <div class="top">
        <div class="left tube"></div>
        <div class="right tube"></div>
      </div>
      <div class="left leg"></div>
      <div class="middle leg"></div>
      <div class="right leg"></div>
      <div class="chassis-container">
        <div class="left chassis"></div>
        <div class="right chassis"></div>
      </div>
    </div>`;
  }
}

customElements.define("portal-turret-legs", PortalTurretLegs);
