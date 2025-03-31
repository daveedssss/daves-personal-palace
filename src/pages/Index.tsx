
import { useEffect } from 'react';
import '../styles/taekwondo.css';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call once on load
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

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
      
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Dave Hermino</h1>
            <h2>Taekwondo Master & Instructor</h2>
            <p>Building strength, discipline, and character through the art of Taekwondo</p>
            <a href="/contact" className="btn primary-btn">Join Our Classes</a>
          </div>
          <div className="hero-image">
            <div className="profile-image"></div>
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

export default Index;
