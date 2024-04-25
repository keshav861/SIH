class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="footer">
        <div class="icons">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-github"></a>
            <a href="#" class="fab fa-pinterest"></a>
        </div>

        <div class="credit">created by <span>J.S.K</span> | © all rights reserved.</div>
    </section>
        `
    }
}
customElements.define("app-footer",Footer);