import "./Footer.css";

function Footer({ setCurrentPage }) {     //
  return (
    <footer className="footer">

      <div className="footerSection">
        <h3>Wanderlust</h3>
        <p>Discover amazing destinations around the world.</p>
      </div>

      <div className="footerSection">
        <h3>Company</h3>

        {/*made these clickable*/}

        <p onClick={() => setCurrentPage("about")}>
          About Us
        </p>

        <p onClick={() => setCurrentPage("careers")}>
          Careers
        </p>

        <p onClick={() => setCurrentPage("contact")}>
          Contact
        </p>

      </div>

      <div className="footerSection">
        <h3>Support</h3>

        <p onClick={() => setCurrentPage("help")}>
          Help Center
        </p>

        <p onClick={() => setCurrentPage("terms")}>
          Terms of Service
        </p>

        <p onClick={() => setCurrentPage("privacy")}>
          Privacy Policy
        </p>

      </div>

      {/*Made the following into hyperlinks and they open the general website*/}

      <div className="footerSection">

        <h3>Follow Us</h3>

        <p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </p>

        <p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>

        <p>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter
          </a>
        </p>

      </div>

    </footer>
  );
}

export default Footer;