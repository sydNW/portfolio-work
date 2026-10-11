// Create your Body component here
// Body.js
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/avatar.png';

const Body = () => {
  return (
    <div id="body" className="body">
      <div className="body-container">
        <div className="body-profile">
          <img className="body-img" alt='avatar' src={Avatar} />
          <div className="body-content">
            <div className="body-headline">Syd Wairimu</div>
            <div className="body-text">Frontend Developer</div>
          </div>
        </div>
        <div className="body-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-link"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default Body;
