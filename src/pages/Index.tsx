
import { useEffect } from 'react';
import '../styles/homepage.css';

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
          <h3 className="logo">DH</h3>
          <nav>
            <ul>
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#expertise" className="nav-link">Expertise</a></li>
              <li><a href="#work" className="nav-link">Work</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Dave Hermino</h1>
            <h2>Professional Designer & Developer</h2>
            <p>Creating digital experiences that make a difference</p>
            <a href="#contact" className="btn primary-btn nav-link">Get in Touch</a>
          </div>
          <div className="hero-image">
            <div className="profile-image"></div>
          </div>
        </div>
      </section>
      
      <section id="about" className="about reveal">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Hello! I'm Dave, a passionate designer and developer with over 8 years of experience creating beautiful, functional digital solutions. I believe in the power of thoughtful design and clean code to solve complex problems.</p>
              <p>My approach combines aesthetic sensibility with technical expertise, allowing me to deliver projects that not only look great but also perform exceptionally well. I'm constantly learning and exploring new technologies to enhance my craft.</p>
              <p>When I'm not working, you can find me hiking in the mountains, reading design books, or experimenting with new coffee brewing methods.</p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>8+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>120+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>18</h3>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="expertise" className="expertise reveal">
        <div className="container">
          <h2 className="section-title">Areas of Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>UI/UX Design</h3>
              <p>Creating intuitive interfaces and seamless user experiences that delight and engage.</p>
            </div>
            <div className="expertise-card">
              <h3>Web Development</h3>
              <p>Building responsive, performance-optimized websites with modern technologies.</p>
            </div>
            <div className="expertise-card">
              <h3>Brand Identity</h3>
              <p>Developing cohesive visual systems that communicate brand values effectively.</p>
            </div>
            <div className="expertise-card">
              <h3>Mobile Applications</h3>
              <p>Designing and developing native and cross-platform mobile experiences.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="work" className="work reveal">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="work-grid">
            <div className="work-item">
              <div className="work-image work-image-1"></div>
              <h3>Eco-Commerce Platform</h3>
              <p>A sustainable shopping experience with carbon footprint tracking</p>
            </div>
            <div className="work-item">
              <div className="work-image work-image-2"></div>
              <h3>Health Monitoring App</h3>
              <p>Intuitive interface for personal health analytics and insights</p>
            </div>
            <div className="work-item">
              <div className="work-image work-image-3"></div>
              <h3>Creative Agency Website</h3>
              <p>Dynamic web presence for award-winning design studio</p>
            </div>
          </div>
          <div className="work-cta">
            <a href="#contact" className="btn secondary-btn nav-link">See more projects</a>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact reveal">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's start a conversation</h3>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">hello@davehermino.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location:</span>
                  <span className="contact-value">San Francisco, CA</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Dribbble</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn primary-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Dave Hermino. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#expertise" className="nav-link">Expertise</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
