import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerSection">
        <h3>Wanderlust</h3>
        <p>Discover amazing destinations around the world.</p>
      </div>

      <div className="footerSection">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>

      <div className="footerSection">
        <h3>Support</h3>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>

      <div className="footerSection">
        <h3>Follow Us</h3>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>X / Twitter</p>
      </div>

    </footer>
  );
}

export default Footer;