class GuestCounter extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }

    get count() {
        return this.getAttribute("count");
    }

    set count(val) {
        this.setAttribute('count', val);
    }

    static get observedAttributes(){
        return ["count"];
    }

    attributeChangedCallback(prop, oldVal, newVal){
        if (prop == 'count'){
            this.render();
            let btn = this.shadow.querySelector('#btn');
            let btnRe = this.shadow.querySelector('#btnRe');
            btn.addEventListener("click", this.inc.bind(this));
            btnRe.addEventListener("click", this.dec.bind(this));
        }
    }

    inc(){
        this.count++;
        let doc = document.getElementById('numberOfGuests');
        doc.innerHTML = this.count;
    }

    dec(){
        this.count--;
        let doc = document.getElementById('numberOfGuests');
        doc.innerHTML = this.count;
    }

    connectedCallback(){
        this.render();
        let btn = this.shadow.querySelector('#btn');
        let btnRe = this.shadow.querySelector('#btnRe');
        btn.addEventListener("click", this.inc.bind(this));
        btnRe.addEventListener("click", this.dec.bind(this));
    }
    
    render() {
        this.shadow.innerHTML = `
        <h1>Number of Guests</h1>
        ${this.count}
        <button id='btn'>Add Guests</button>
        <button id='btnRe'>Remove Guests</button>
        `
    }
}

customElements.define('guest-counter', GuestCounter);