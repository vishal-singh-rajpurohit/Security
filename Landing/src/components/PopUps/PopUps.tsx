'use client'
import { MenuContext } from '@/context/Contexts.context';
import React, { useEffect, useContext } from 'react';

function SuccessPopup() {

  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('MenuContext must be used within a MenuProvider');
  }

  const { status, setStatus } = context

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus?.('');
      }, 3000);

      return () => clearTimeout(timer);
    }
    else if (status === 'error') {
      const timer = setTimeout(() => {
        setStatus?.('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, setStatus]);


  // const handleSuccess = () => {
  //   setStatus('success');
  // };

  return (


    <div style={{ position: 'absolute', top: 0, minHeight: '10vh', width: "100vw", padding: '' }}>
      {status === 'success' && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#4BB543',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
          zIndex: 9999,
          animation: 'fadeInOut 3s'
        }}>
          Success! Message Sent.
        </div>
      )}

      {status === 'error' && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#f44336',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
          zIndex: 9999,
          animation: 'fadeInOut 3s'
        }}>
          Somthing went wrong
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export { SuccessPopup };
