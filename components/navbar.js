class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #1F2937;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-icon {
          color: #F59E0B;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        a:hover {
          color: #F59E0B;
        }
        .nav-icon {
          width: 18px;
          height: 18px;
        }
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          ul {
            gap: 1rem;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-only {
            display: none;
          }
        }
</style>
      <nav>
        <div class="nav-container">
          <a href="index.html" class="logo">
            <span class="logo-icon"><i data-feather="zap"></i></span>
            <span>Élezés Halásztelek</span>
          </a>
            <ul>
            <li><a href="index.html"><i data-feather="home" class="nav-icon"></i> Otthon</a></li>
            <li><a href="prices.html"><i data-feather="dollar-sign" class="nav-icon"></i> Árak</a></li>
            <li><a href="about.html"><i data-feather="user" class="nav-icon"></i> Rólam</a></li>
            <li><a href="contact.html"><i data-feather="user" class="nav-icon"></i> Átadás/Felvétel</a></li>
            <li class="mobile-only"><a href="contact.html"><i data-feather="map-pin" class="nav-icon"></i> Location</a></li>
          </ul>
</div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);