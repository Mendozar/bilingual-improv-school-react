import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
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
        <h1 style={{ textAlign: 'center', flexGrow: 1, fontSize: '24px', fontWeight: 'bold' }}>What is Bilingual Improv?</h1>
      </div>
      
      {/* Main Content */}
      <div style={{ 
        backgroundColor: 'white', 
        color: '#9E1B32', 
        borderRadius: '20px', 
        padding: '25px', 
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
        lineHeight: 1.6
      }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Improv + Language Learning</h2>
        
        <p style={{ marginBottom: '15px' }}>
          Bilingual Improv School offers language immersion to language learners through the fun, supportive and structured environment of an improv class.
        </p>
        
        <p style={{ marginBottom: '15px' }}>
          Our classes empower students to practice their target language in a judgment-free space and like-minded community.
        </p>
        
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', marginTop: '25px' }}>Who is it for?</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Beginner and intermediate Spanish language learners who want to practice listening and speaking skills</li>
          <li style={{ marginBottom: '8px' }}>Native Spanish speakers who want to learn improv in a bilingual environment</li>
          <li style={{ marginBottom: '8px' }}>Native Spanish speakers looking for a fun space to practice their English</li>
        </ul>
        
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', marginTop: '25px' }}>No experience necessary!</h3>
        <p style={{ marginBottom: '20px' }}>
          We welcome all fluency levels, and no improv experience is needed. Our class is in "Spanglish" which allows students to speak at their comfort level.
        </p>
        
        <div style={{ 
          backgroundColor: 'rgba(78, 207, 99, 0.2)', 
          borderRadius: '15px', 
          padding: '20px', 
          margin: '25px 0',
          fontStyle: 'italic'
        }}>
          <p style={{ marginBottom: '10px' }}>
            "I was nervous about my basic Spanish, but the supportive environment made it so fun! I've learned more here than in years of traditional classes."
          </p>
          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>
            - Maria K., Student
          </p>
        </div>
        
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

export default AboutPage;