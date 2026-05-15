import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.college.trim()) newErrors.college = 'College name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePayment = async () => {
    try {
      // 1. Create order on backend
      const orderResponse = await fetch('http://localhost:5000/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: 899 })
      });
      
      const orderData = await orderResponse.json();
      
      if (!orderData.success) {
        throw new Error('Could not create order');
      }

      // 2. Initialize Razorpay Checkout
      const options = {
        key: 'rzp_test_YOUR_KEY_ID', // Replaced with actual API key in production
        amount: orderData.order.amount,
        currency: "INR",
        name: "TEDx GNI 2026",
        description: "General Admission Ticket",
        order_id: orderData.order.id,
        handler: async function (response) {
          // 3. Verify payment on backend
          try {
            const verifyRes = await fetch('http://localhost:5000/api/payment/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                ...response,
                userData: formData // Includes data for generating the email/ticket on backend
              })
            });
            const verifyData = await verifyRes.json();
            
            if (verifyData.success) {
              setSubmitStatus('success');
              setIsSubmitting(false);
              // Navigate to success page gracefully passing ticket info via router state
              navigate('/success', { 
                state: { 
                  paymentId: verifyData.paymentId, 
                  user: formData 
                } 
              });
            } else {
              setSubmitStatus('error');
              setIsSubmitting(false);
              setErrors({ general: 'Payment verification failed' });
            }
          } catch (err) {
            console.error('Verification error:', err);
            setSubmitStatus('error');
            setIsSubmitting(false);
            setErrors({ general: 'Server verification failed post-payment' });
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#e62b1e"
        }
      };
      
      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response){
        setIsSubmitting(false);
        setSubmitStatus('error');
        setErrors({ general: 'Payment failed or cancelled' });
      });
      
      rzp.open();
      
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
      setIsSubmitting(false);
      setErrors({ general: 'Server connection failed. Could not reach checkout gateway.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrors({});

    if (validateForm()) {
      setIsSubmitting(true);
      
      if (!window.Razorpay) {
         setErrors({ general: 'Payment SDK not loaded. Check internet or adblockers.' });
         setIsSubmitting(false);
         return;
      }
      
      await handlePayment();
    } else {
      setSubmitStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <motion.div 
          className="register-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1>Secure Your Seat</h1>
          <p>Join the movement. Redefine success.</p>
        </motion.div>

        <motion.div 
          className="register-card registration-closed-card"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <div className="registration-closed-content">
            <CheckCircle2 size={64} className="closed-icon" />
            <h2>Registration Closed</h2>
            <p>
              TEDxGNI 2026 has successfully concluded. We are no longer accepting new registrations for this season.
            </p>
            <div className="closed-actions">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/')}
              >
                Back to Home
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/past-seasons')}
              >
                View Past Seasons
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
