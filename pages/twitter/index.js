// import React from 'react';
// const Twitter = () => {
//     const handleTwitterLogin = async () => {
//         try {
//           window.location.href = 'http://localhost:8080/auth/twitter';
//         } catch (error) {
//           console.error('Twitter Login Error:', error);
//         }
//       };
    
//       return (
//         <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//           <div className="bg-white p-8 rounded shadow-md">
//             <h1 className="text-2xl font-bold mb-4">Welcome to Twitter Login</h1>
//             <button
//               onClick={handleTwitterLogin}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
//             >
//              Login with Twitter
//             </button>
//           </div>
//         </div>
//       );
//     };

// export default Twitter;


import React from 'react';

const Twitter = () => {
  const handleTwitterLogin = async () => {
    try {
      // Open a pop-up window for Twitter login
      const popup = window.open('http://localhost:8080/auth/twitter', '_blank', 'width=600,height=400');
      if (popup) {
        // Listen for messages from the pop-up window
        window.addEventListener('message', (event) => {
          if (event.origin === 'http://localhost:8080' && event.data === 'twitter-auth-success') {
            // Handle successful authentication, e.g., redirect to a logged-in page
            window.location.href = 'https://marvelous-churros-c678e1.netlify.app';
          }
        });
      } else {
        console.error('Pop-up blocked. Please allow pop-ups for this website.');
      }
    } catch (error) {
      console.error('Twitter Login Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to Twitter Login</h1>
        <button
          onClick={handleTwitterLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          Login with Twitter
        </button>
      </div>
    </div>
  );
};

export default Twitter;
