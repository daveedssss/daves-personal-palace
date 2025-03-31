
import { useEffect } from 'react';
import '../styles/taekwondo.css';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
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
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="homepage">
      <header>
        <div className="container">
          <h3 className="logo">Dave Taekwondo</h3>
          <nav>
            <ul>
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#expertise" className="nav-link">Classes</a></li>
              <li><a href="#work" className="nav-link">Gallery</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
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
            <a href="#contact" className="btn primary-btn nav-link">Join Our Classes</a>
          </div>
          <div className="hero-image">
            <div className="profile-image"></div>
          </div>
        </div>
      </section>
      
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
            <a href="#contact" className="btn secondary-btn nav-link">Join Our Academy</a>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact reveal">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to start your Taekwondo journey?</h3>
              <p>Contact us today to schedule a free trial class or learn more about our programs. We welcome students of all ages and skill levels.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <span className="contact-label">Phone:</span>
                    <span className="contact-value">09942553507</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">davesebastienghermino@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <span className="contact-label">Location:</span>
                    <span className="contact-value">123 Martial Arts Way, Manila, Philippines</span>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn primary-btn">Schedule a Trial Class</button>
            </form>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Dave Hermino Taekwondo Academy. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#expertise" className="nav-link">Classes</a>
              <a href="#work" className="nav-link">Gallery</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
