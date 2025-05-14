import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or service
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    // In a real app, you would connect this to your mailing list service
  };
  
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', paddingBottom: '30px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
        <Link to="/" style={{ 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center',
          textDecoration: 'none',
          padding: '10px', 
          marginRight: '10px',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 style={{ textAlign: 'center', flexGrow: 1, fontSize: '24px', fontWeight: 'bold' }}>Coming Soon: 8-Week Program</h1>
      </div>
      
      {/* Main Content */}
      <div style={{ 
        backgroundColor: '#ffd166', 
        color: '#9E1B32', 
        borderRadius: '20px', 
        padding: '25px', 
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
        lineHeight: 1.6
      }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Deepen Your Skills</h2>
        
        <p style={{ marginBottom: '15px' }}>
          We're excited to announce our upcoming 8-week comprehensive program that will:
        </p>
        
        <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '25px' }}>
          <li style={{ marginBottom: '8px' }}>Improve your Spanish language skills through structured improv exercises</li>
          <li style={{ marginBottom: '8px' }}>Build your confidence speaking in a supportive environment</li>
          <li style={{ marginBottom: '8px' }}>Develop your improv performance techniques</li>
          <li style={{ marginBottom: '8px' }}>Culminate in a live bilingual improv performance!</li>
        </ul>
        
        <div style={{ 
          border: '2px solid #9E1B32', 
          borderRadius: '15px', 
          padding: '20px', 
          marginBottom: '25px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)'
        }}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Program Details:</p>
          <p style={{ marginBottom: '5px' }}>Duration: 8 weeks</p>
          <p style={{ marginBottom: '5px' }}>Class time: 2 hours per week</p>
          <p style={{ marginBottom: '5px' }}>Price: $200</p>
          <p>Launch Date: Coming Summer 2025</p>
        </div>
        
        {submitted ? (
          <div style={{ 
            backgroundColor: 'rgba(78, 207, 99, 0.8)', 
            color: '#9E1B32', 
            padding: '20px', 
            borderRadius: '15px', 
            textAlign: 'center',
            marginBottom: '25px'
          }}>
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Thank you for your interest!</p>
            <p>We'll notify you when registration opens.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '12px' }}>Get early access and a 10% discount:</p>
            <div style={{ display: 'flex' }}>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ 
                  flexGrow: 1, 
                  padding: '15px', 
                  borderRadius: '9999px 0 0 9999px', 
                  border: 'none',
                  outline: 'none',
                  fontSize: '16px'
                }}
              />
              <button 
                type="submit"
                style={{ 
                  backgroundColor: '#9E1B32', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  padding: '15px 25px', 
                  borderRadius: '0 9999px 9999px 0', 
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Notify Me
              </button>
            </div>
          </form>
        )}
        
        <Link to="/" style={{ 
          display: 'block', 
          width: 'calc(100% - 30px)',
          backgroundColor: '#9E1B32', 
          color: 'white', 
          textAlign: 'center', 
          fontWeight: 'bold', 
          padding: '15px', 
          borderRadius: '9999px', 
          margin: '25px auto 10px',
          textDecoration: 'none',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
        }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ComingSoonPage;