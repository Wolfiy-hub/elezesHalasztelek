// Ide másold be ezt a teljes kódot a navbar.js fájlba

class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* ALAPVETŐ HIBAJAVÍTÁS: Minden elem helyes dobozmodellt használ */
        :host, * {
          box-sizing: border-box;
        }

        nav {
          background-color: #1F2937;
          padding: 1rem 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          width: 100%; /* Explicit szélesség, hogy biztosan kitöltse a helyét */
        }
        .nav-container {
          display: flex;
          flex-wrap: wrap; /* LEGFONTOSABB: Engedi törni a sort, ha nincs elég hely */
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          gap: 1rem 2rem; /* Helyköz a sorok és elemek között is, ha törés van */
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none; /* A logo linkről is hiányzott */
        }
        .logo:hover {
          color: white; /* A logo ne változtasson szint hoverre */
        }
        .logo-icon {
          color: #F59E0B;
        }
        ul {
          display: flex;
          flex-wrap: wrap; /* A menüpontok is törhetnek, ha szükséges */
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: center; /* Ha a menüsor törik, középre igazodik */
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

        /* MOBILNÉZET finomítása */
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          .nav-container {
            justify-content: center; /* Mobilon a logo és a menü is középre kerül */
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
          <a href="/kezdolap" class="logo">
            <span class="logo-icon"><i data-feather="zap"></i></span>
            <span>Élezés Halásztelek</span>
          </a>
            <ul>
            <li><a href="/kezdolap"><i data-feather="home" class="nav-icon"></i> Kezdőlap</a></li>
            <li><a href="/arak"><i data-feather="dollar-sign" class="nav-icon"></i> Árak</a></li>
            <li><a href="/rolam"><i data-feather="user" class="nav-icon"></i> Rólam</a></li>
            <li><a href="/atadas"><i data-feather="user" class="nav-icon"></i> Átadás/Felvétel</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);