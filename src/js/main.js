import '../css/style.css';
import { SplashScreen } from '@capacitor/splash-screen';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `<div></div>
    `;
    }

    connectedCallback() {
      const self = this;

      window.location = __URL__;
    }
  },
);
