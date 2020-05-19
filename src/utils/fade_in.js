import {whenVisible} from './when_visible';
import anime from 'animejs/lib/anime.es.js';
class FadeIn extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.style.opacity = 0;
    this.style.display = 'block';
    whenVisible(this, () => {
      console.log(this, 'inside')
      anime({
        targets: this,

        opacity: [
          {value: 0, duration: 0,},
          {value: 1, duration: 750}
        ],
        duration: 750,
        easing: 'easeInOutSine'
      });
    });
  }
}
export {FadeIn};
