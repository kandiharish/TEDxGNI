import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import './EventInfo.css';

const EventInfo = () => {
  return (
    <section className="event-info-section" id="venue">
      <div className="wrapper event-info-wrapper">
        <motion.div 
          className="event-info-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="event-info-title">
            Join Us at <span className="red-accent">TEDx</span>GNI 2026
          </h2>
          <p className="event-info-subtitle">
            Mark your calendar for our upcoming event featuring thought-provoking talks and inspiring performances.
          </p>
        </motion.div>

        <div className="event-info-grid">
          {/* Card 1: Date */}
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="info-icon-wrapper">
              <Calendar size={40} strokeWidth={1.5} className="info-icon" />
            </div>
            <h3 className="info-card-title">Date</h3>
            <p className="info-card-text">April 29, 2026</p>
          </motion.div>

          {/* Card 2: Venue */}
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-icon-wrapper">
              <MapPin size={40} strokeWidth={1.5} className="info-icon" />
            </div>
            <h3 className="info-card-title">Venue</h3>
            <p className="info-card-text">
              Guru Nanak Institutions<br />
              <span className="small-text">
                Khanapur Village, Ibrahimpatnam - Ranga Reddy district<br />
                Telangana 501506
              </span>
            </p>
            <a 
              href="https://goo.gl/maps/bY9zM5ZkZ1u1pWQ9A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="directions-link"
            >
              Get Directions
            </a>
          </motion.div>

          {/* Card 3: Time */}
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="info-icon-wrapper">
              <Clock size={40} strokeWidth={1.5} className="info-icon" />
            </div>
            <h3 className="info-card-title">Time</h3>
            <p className="info-card-text">9:00 AM - 5:00 PM</p>
          </motion.div>
        </div>

        {/* Registration Open Block */}
        <motion.div 
          className="event-registration-status"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="btn btn-primary reg-btn" onClick={() => window.open('https://build.fillout.com/editor/preview/vwNtnMQfEcus', '_blank')}>Register Now</button>
          <p className="reg-status-text">
            Secure your spot for the most inspiring event of the year! Limited seats available.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventInfo;
