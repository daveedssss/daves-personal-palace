
import '../styles/taekwondo.css';

const Classes = () => {
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
      
      <section id="expertise" className="expertise reveal">
        <div className="container">
          <h2 className="section-title">Our Classes</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Kids Program (Ages 5-12)</h3>
              <p>Fun, engaging classes that develop coordination, focus, and confidence while teaching respect and discipline.</p>
            </div>
            <div className="expertise-card">
              <h3>Teen Program (Ages 13-17)</h3>
              <p>Technical training combined with physical conditioning, perfect for developing strength and self-confidence.</p>
            </div>
            <div className="expertise-card">
              <h3>Adult Program (18+)</h3>
              <p>Comprehensive martial arts training focusing on technique, fitness, and practical self-defense skills.</p>
            </div>
            <div className="expertise-card">
              <h3>Competition Team</h3>
              <p>Intensive training for students looking to compete in local, national, and international tournaments.</p>
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

export default Classes;
