
import '../styles/taekwondo.css';

const Gallery = () => {
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
      
      <section id="work" className="work reveal">
        <div className="container">
          <h2 className="section-title">Our Gallery</h2>
          <div className="work-grid">
            <div className="work-item">
              <div className="work-image work-image-1"></div>
              <h3>Championships</h3>
              <p>Our students excelling at regional and national competitions</p>
            </div>
            <div className="work-item">
              <div className="work-image work-image-2"></div>
              <h3>Belt Promotions</h3>
              <p>Celebrating the progress and achievements of our dedicated students</p>
            </div>
            <div className="work-item">
              <div className="work-image work-image-3"></div>
              <h3>Training Sessions</h3>
              <p>Daily classes focusing on technique, strength, and mental discipline</p>
            </div>
          </div>
          <div className="work-cta">
            <a href="/contact" className="btn secondary-btn">Join Our Academy</a>
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

export default Gallery;
