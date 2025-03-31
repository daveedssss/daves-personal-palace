
import '../styles/taekwondo.css';

const About = () => {
  return (
    <div className="homepage">
      <header>
        <div className="container">
          <h3 className="logo">Dave Taekwondo</h3>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section id="about" className="about reveal">
        <div className="container">
          <h2 className="section-title">About Master Dave</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Welcome to Dave Hermino Taekwondo Academy! I'm Master Dave, a dedicated Taekwondo practitioner with over 15 years of experience in martial arts. I believe in the transformative power of Taekwondo to build not just physical strength, but also mental discipline and moral character.</p>
              <p>My teaching philosophy combines traditional Korean Taekwondo techniques with modern training methods, creating a comprehensive learning experience for students of all ages and skill levels. Each class is designed to challenge you physically while instilling the core tenets of Taekwondo: courtesy, integrity, perseverance, self-control, and indomitable spirit.</p>
              <p>Join our academy and become part of a supportive community that celebrates achievement, respects tradition, and grows stronger together. Whether you're looking to compete, improve fitness, or gain self-defense skills, we have a program that fits your goals.</p>
              
              <div className="belt-ranks">
                <div className="belt belt-white" title="White Belt"></div>
                <div className="belt belt-yellow" title="Yellow Belt"></div>
                <div className="belt belt-orange" title="Orange Belt"></div>
                <div className="belt belt-green" title="Green Belt"></div>
                <div className="belt belt-blue" title="Blue Belt"></div>
                <div className="belt belt-brown" title="Brown Belt"></div>
                <div className="belt belt-red" title="Red Belt"></div>
                <div className="belt belt-black" title="Black Belt"></div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>300+</h3>
                <p>Students Trained</p>
              </div>
              <div className="stat">
                <h3>4th</h3>
                <p>Degree Black Belt</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Dave Hermino Taekwondo Academy. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/classes">Classes</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
