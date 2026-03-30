import React from "react";

const FooterComponent =()=>{
    return(
        <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-section">
          <h2>💻 TOPMARK TECHNOLOGIES </h2>
          <p>Your Trusted Tech Partner</p>
        </div>

        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: jefuni79@gmail.com</p>
          <p>Phone: 0798322647</p>
          <p>Location: Nairobi, Kenya</p>
        </div>

        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>

            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-telegram"></i>
            </a>

            <a href="https://tiktok.com/@jayjef" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Topmark Techs. All rights reserved.</p>
      </div>
    </footer>

    )

}
export default FooterComponent;