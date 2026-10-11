// Create your About component here
// About.js
import IMG from '../assets/avatar.png';

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-info">
        <p className="about-desc">Hi! I’m Syd—a frontend developer based in Nairobi with a passion for sleek designs, clean code, and bringing ideas to life with React.</p>
        <div className="about-img">
          <div className="about-img-wrapper">
            <img src={IMG} alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
