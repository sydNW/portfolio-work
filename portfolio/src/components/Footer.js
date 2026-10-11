// Footer.js
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-contact-info">
        <h1 className="footer-heading">Connect With Me</h1>
        <p className="footer-contact-access">Email: sydneywairimu@gmail.com</p>
        <p className="footer-contact-access">Mobile: +254 712 345 678</p>
      </div>
      <div>
        <h1>Social Links</h1>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;