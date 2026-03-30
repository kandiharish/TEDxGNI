import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Home, Mail } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If someone navigates here directly without paying, we could redirect them:
    // if (!location.state || !location.state.paymentId) navigate('/');
  }, [location, navigate]);

  const { paymentId = 'TXN-DEMO-12345', user = { name: 'Attendee', college: 'Guest' } } = location.state || {};

  const ticketVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }
    }
  };

  return (
    <div className="success-page">
      <div className="success-bg-glow"></div>
      
      <div className="success-content wrapper">
        <motion.div 
          className="success-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="success-icon-wrapper">
            <CheckCircle size={60} className="check-icon" />
          </div>
          <h1>Payment Successful!</h1>
          <p>We've captured your registration and (if enabled) sent an e-ticket to your email.</p>
        </motion.div>

        <motion.div 
          className="ticket-wrapper"
          variants={ticketVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="digital-ticket">
            <div className="ticket-left">
              <div className="ticket-brand">
                <span className="ted">TEDx</span><span className="gni">GNI</span>
              </div>
              <h2 className="ticket-theme">Redefining Success</h2>
              
              <div className="attendee-details">
                <div className="detail-group">
                  <label>ATTENDEE</label>
                  <p>{user.name}</p>
                </div>
                <div className="detail-group">
                  <label>ORGANIZATION</label>
                  <p>{user.college}</p>
                </div>
                <div className="detail-group">
                  <label>TICKET TYPE</label>
                  <p>VIP Admission</p>
                </div>
              </div>
            </div>
            
            <div className="ticket-divider"></div>
            
            <div className="ticket-right">
              <div className="qr-placeholder">
                <div className="qr-box">
                  {/* CSS pattern for mock QR display on UI */}
                  <div className="qr-pattern"></div>
                </div>
              </div>
              <div className="tx-id">
                <label>TXN ID</label>
                <p>{paymentId.slice(-8).toUpperCase()}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="success-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/" className="btn btn-outline">
            <Home size={20} className="btn-icon" /> Return Home
          </Link>
          <button className="btn btn-primary" onClick={() => window.print()}>
            <Download size={20} className="btn-icon" /> Download Ticket
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
