class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1F2937;
          color: white;
          padding: 3rem 1rem;
          text-align: center;
          margin-top: auto;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          color: #F59E0B;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .footer-section p, .footer-section a {
          color: #E5E7EB;
          margin-bottom: 0.5rem;
          display: block;
        }
        .footer-section a:hover {
          color: #F59E0B;
        }
        .footer-bottom {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #374151;
          text-align: center;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icons a {
          color: white;
          transition: color 0.2s;
        }
        .social-icons a:hover {
          color: #F59E0B;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Élezés Halásztelek</h3>
            <p>Precíziós élezési szolgáltatások minden vágószerszámához.</p>
            <div class="social-icons">
              <a href="https://www.youtube.com/@csiga888888/videos" target="_blank"><i data-feather="youtube">Youtube</i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Gyors linkek</h3>
            <a href="index.html">Otthon</a>
            <a href="prices.html">Árak</a>
            <a href="about.html">Rólam</a>
            <a href="contact.html">Átadás/Felvétel</a>
          </div>
          <div class="footer-section">
            <h3>Kapcsolat</h3>
            <p><i data-feather="mail"></i> elezes.halasztelek@gmail.com</p>
            <p><i data-feather="map-pin"></i> Halásztelek, II. Rákóczi Ferenc út 54/C (papírbolt), 2314</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Élezés Halásztelek. Minden jog fenntartva.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);