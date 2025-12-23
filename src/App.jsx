import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="restaurant-site">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Bella Cucina</div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('menu')}>Food Menu</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Bella Cucina</h1>
          <p>Experience authentic Italian cuisine in the heart of the city</p>
          <button className="cta-button" onClick={() => scrollToSection('menu')}>
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Since 1995, Bella Cucina has been serving authentic Italian dishes 
                crafted with love and the finest ingredients. Our family recipes have 
                been passed down through generations, bringing the true taste of Italy 
                to your table.
              </p>
              <p>
                Our passionate chefs use only fresh, locally-sourced ingredients to 
                create memorable dining experiences that keep our guests coming back.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-img">🍝</div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu Section */}
      <section id="menu" className="menu">
        <div className="container">
          <h2>Our Menu</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3>Appetizers</h3>
              <div className="dish">
                <span className="dish-name">Bruschetta</span>
                <span className="price">$12</span>
              </div>
              <div className="dish">
                <span className="dish-name">Caprese Salad</span>
                <span className="price">$14</span>
              </div>
              <div className="dish">
                <span className="dish-name">Calamari Fritti</span>
                <span className="price">$16</span>
              </div>
            </div>

            <div className="menu-item">
              <h3>Main Courses</h3>
              <div className="dish">
                <span className="dish-name">Spaghetti Carbonara</span>
                <span className="price">$22</span>
              </div>
              <div className="dish">
                <span className="dish-name">Lasagna Bolognese</span>
                <span className="price">$24</span>
              </div>
              <div className="dish">
                <span className="dish-name">Osso Buco</span>
                <span className="price">$32</span>
              </div>
            </div>

            <div className="menu-item">
              <h3>Desserts</h3>
              <div className="dish">
                <span className="dish-name">Tiramisu</span>
                <span className="price">$10</span>
              </div>
              <div className="dish">
                <span className="dish-name">Panna Cotta</span>
                <span className="price">$9</span>
              </div>
              <div className="dish">
                <span className="dish-name">Cannoli</span>
                <span className="price">$8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🍽️</div>
              <h3>Dine-In</h3>
              <p>Enjoy our cozy atmosphere and impeccable table service</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3>Takeout</h3>
              <p>Quick and convenient pickup for meals on the go</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Catering</h3>
              <p>Let us make your special events unforgettable</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎂</div>
              <h3>Private Events</h3>
              <p>Host your celebrations in our private dining room</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <h3>📍 Address</h3>
                <p>123 Italian Way<br/>New York, NY 10001</p>
              </div>
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>(555) 123-4567</p>
              </div>
              <div className="info-item">
                <h3>⏰ Hours</h3>
                <p>Mon-Thu: 11am - 10pm<br/>
                   Fri-Sat: 11am - 11pm<br/>
                   Sunday: 12pm - 9pm</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Bella Cucina. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App