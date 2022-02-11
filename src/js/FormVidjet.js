// import isValid from './Validate.js';

export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.title = 'Тематическая подсказка';
    /*
    this.button = () => {
      this.bindToDOM();
      return this.parentEl.querySelector(this.constructor.buttonSelector);
    };
    */
    // this.body = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus';
    /*
    get button() {
      this.bindToDOM();
      this._button = this.parentEl.querySelector(this.constructor.buttonSelector);
    }
    */
  }

  static get markup() {
    return `
    <div class="button-relative">
    <button type="button" class="btn btn-secondary" data-id= "button-widjet" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button>
    `;
  }

  static get inputSelector() {
    return '[data-id=form-input]';
  }

  static get buttonSelector() {
    return '[data-id=button-widjet]';
  }

  static get widjetSelector() {
    return '[data-widget=button-widget]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const button = this.parentEl.querySelector(this.constructor.buttonSelector);
    button.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    if (e.target.parentElement.children.length === 1) {
      this.createPopover();
    } else {
      e.target.parentElement.children[1].remove();
    }
  }

  createPopover() {
    const first = this.parentEl.querySelector(this.constructor.buttonSelector);// = button
    const popover = document.createElement('div');
    popover.className = 'popover fade show bs-popover-top';// 'div-propover';
    // popover.textContent = 'Большой текст сообщения об ошибке';

    const popoverBody = document.createElement('div');
    popoverBody.className = 'popover-body';
    popoverBody.textContent = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus';

    const popoverHead = document.createElement('h3');
    popoverHead.className = 'popover-header';
    popoverHead.textContent = this.title;

    const arrow = document.createElement('div');
    arrow.className = 'arrow';

    popover.appendChild(arrow);
    popover.appendChild(popoverHead);
    popover.appendChild(popoverBody);

    first.offsetParent.appendChild(popover);
    popover.style.top = `${first.offsetTop - popover.offsetHeight - 20}px`;
    popover.style.left = `${first.offsetLeft + first.offsetWidth / 2 - popover.offsetWidth / 2}px`;
    arrow.style.left = 'calc(50% - 10px)';
    arrow.style.top = `${popover.offsetHeight - 3}px`;
    arrow.classList.add('top');
    // console.log('кнопка', this.button);
  }
}
//
//
//

/*
    <div class="popover fade show bs-popover-top" role="tooltip" id="popover99555"
     x-placement="top"
    style="position: absolute; will-change: transform; top: 0px; left: 0px;
    transform: translate3d(273px, 2187px, 0px);">
      <div class="arrow" style="left: 124px;">
      </div>
      <h3 class="popover-header"></h3>
      <div class="popover-body">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
    </div>
   </div>
    */
