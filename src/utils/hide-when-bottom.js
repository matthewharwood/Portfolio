class HideWhenBottom extends HTMLElement {
  constructor() {
    super();
    this.bottomOffset = 200;
    this._scrollAtBottom = evt => this.scrollAtBottom(evt);
  }

  disconnectedCallback() {
    this.style.opacity = '1';
    window.removeEventListener('scroll', this._scrollAtBottom);
  }

  connectedCallback() {
    this.style.opacity = '1';
    window.addEventListener('scroll', this._scrollAtBottom);
  }


  scrollAtBottom() {

    if ((window.innerHeight + window.scrollY + this.bottomOffset) >= document.body.offsetHeight) {
      this.style.opacity = '0';
      window.removeEventListener('scroll', this._scrollAtBottom);
    }
  }
}
export {HideWhenBottom};
