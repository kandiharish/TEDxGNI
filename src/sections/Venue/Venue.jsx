import React from 'react';
import { motion } from 'framer-motion';
import './Venue.css';

const Venue = () => {
  return (
    <section className="venue-section wrapper" id="venue">
      <div className="section-header text-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Event <span className="red-accent">Venue</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join us at Guru Nanak Institutions for TEDxGNI 2026.
        </motion.p>
      </div>

      <div className="venue-grid">
        {/* Left Column - Map */}
        <motion.div 
          className="venue-map-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15243.666991316027!2d78.64761405!3d17.1626772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb09550abc9667%3A0x7ae4bff180472c3c!2sGuru%20Nanak%20Institutions!5e0!3m2!1sen!2sin!4v1710928374932!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Guru Nanak Institutions Location"
          ></iframe>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div 
          className="venue-details"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="venue-header-info">
            <h3 className="venue-name">Guru Nanak Institutions</h3>
            <p className="venue-address">Khanapur Village, Ibrahimpatnam, Ranga Reddy district, Telangana 501506</p>
            <a href="https://goo.gl/maps/bY9zM5ZkZ1u1pWQ9A" target="_blank" rel="noopener noreferrer" className="get-directions-link">
              Get Directions
            </a>
          </div>

          <div className="venue-info-cards">
            {/* About Venue Card */}
            <div className="venue-card">
              <h4 className="venue-card-title red-accent">About the Venue</h4>
              <p>
                Guru Nanak Institutions provides a modern, comfortable setting for TEDxGNI. The main auditorium offers excellent acoustics and visibility, ensuring all attendees have an immersive experience that matches the high standards of TEDx events worldwide.
              </p>
            </div>

            {/* Facilities Card */}
            <div className="venue-card">
              <h4 className="venue-card-title red-accent">Facilities</h4>
              <ul className="venue-list two-cols">
                <li><span className="red-dot"></span>500+ seating capacity</li>
                <li><span className="red-dot"></span>State-of-the-art audio-visual equipment</li>
                <li><span className="red-dot"></span>Wheelchair accessibility</li>
                <li><span className="red-dot"></span>Ample parking space</li>
                <li><span className="red-dot"></span>Refreshment area</li>
                <li><span className="red-dot"></span>Wi-Fi connectivity</li>
              </ul>
            </div>

            {/* Transportation Card */}
            <div className="venue-card">
              <h4 className="venue-card-title red-accent">Transportation</h4>
              <p className="margin-bottom-sm">The venue is conveniently located and accessible via multiple transportation options:</p>
              <ul className="venue-list two-cols">
                <li><span className="red-dot"></span>Close to Outer Ring Road</li>
                <li><span className="red-dot"></span>Regular bus service from Hyderabad</li>
                <li><span className="red-dot"></span>Taxi and ride-sharing services available</li>
                <li><span className="red-dot"></span>Nearest airport: Rajiv Gandhi International Airport</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
