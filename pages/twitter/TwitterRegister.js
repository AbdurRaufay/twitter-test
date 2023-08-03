import React, { useState } from 'react';

const TwitterRegister = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleTwitterRegister = async () => {
    try {
      // Open a pop-up window for Twitter registration
      const popup = window.open('http://localhost:8080/auth/twitter', '_blank', 'width=600,height=400');
      if (popup) {
        // Listen for messages from the pop-up window
        window.addEventListener('message', (event) => {
          if (event.origin === 'http://localhost:8080' && event.data === 'twitter-auth-success') {
            setRegistrationSuccess(true);
            window.close();
          }
        });
      } else {
        console.error('Pop-up blocked. Please allow pop-ups for this website.');
      }
    } catch (error) {
      console.error('Twitter Registration Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to Twitter Registration</h1>
        {registrationSuccess ? (
          <p className="text-green-500 mb-4">Registration successful!</p>
        ) : (
          <button
            onClick={handleTwitterRegister}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            Register with Twitter
          </button>
        )}
      </div>
    </div>
  );
};

export default TwitterRegister;
