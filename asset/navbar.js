class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
        <a href="#" class="logo"><img src="./user_interface/vendors/images/favicon-32x32.png"></a>
        <nav class="navbar">
            <ul>
                <li>
                    <div id="google_translate_element"></div>
                </li>
                <li><a href="#home" class="active">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="/pages/section.html">Section</a></li>
                <li><a href="#facility">Facility</a></li>
                 <a href="./pages/login.html"> 
                    <li><button class="log">Login</button>
               </a> 
                </li>
            </ul>
        </nav>
        <div class="fas fa-bars"></div>
        <script src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'></script>
        <script>
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    // pageLanguage: 'en',
                    autoDisplay: 'true',
                    includedLanguages: 'en,hi,ta',
                    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
                }, 'google_translate_element');
            }
        </script>
        <style>
            .VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
                z-index: 9724790009779 !important;
                top: 0;
                left: unset;
                right: -5px;
                display: none !important;
                border-radius: 50%;
            }

            .VIpgJd-ZVi9od-aZ2wEe-OiiCO {
                width: 80px;
                height: 80px;
            }

            /*hide google translate link | logo | banner-frame */
            .goog-logo-link,
            .gskiptranslate,
            .goog-te-gadget span,
            .goog-te-banner-frame,
            #goog-gt-tt,
            .goog-te-balloon-frame,
            div#goog-gt- {
                display: none !important;
            }

            .goog-te-gadget {
                color: transparent !important;
                font-size: 0px;
            }

            .goog-text-highlight {
                background: none !important;
                box-shadow: none !important;
            }
            .goog-te-combo option{
                background-color: #333;
            }

            /*google translate Dropdown */

            #google_translate_element select {
                font-size: 2rem;
                background: #f6edfd00;
                color: #CBA76F;
                border: none;
                border-radius: 3px;
                padding: 6px 8px
            }
        </style>
    </header>
        `
    }
}
customElements.define("app-navbar",Navbar);