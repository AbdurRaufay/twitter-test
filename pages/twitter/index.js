
// // pages/index.js
// import React from 'react';
// import Head from 'next/head';
// // import  BsTwitter  from 'react-icons/bs';
// import axios from 'axios';

// const Twitter = () => {
//   const handleTwitterLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/auth/twitter/register');
//       const { user } = response.data;
//       console.log('Registered User:', user);

//       // After successful registration, proceed with the login
//       const loginResponse = await axios.get('http://localhost:8080/auth/twitter/login');
//       const { authenticatedUser } = loginResponse.data;
//       console.log('Authenticated User:', authenticatedUser);

//       // Handle the authenticated user data or redirect to the dashboard page as needed
//     } catch (error) {
//       console.error('Twitter Login/Register Error:', error);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <Head>
//         <title>Twitter Login</title>
//       </Head>
//       <div className="bg-white p-8 rounded shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Welcome to Twitter Login</h1>
//         <button
//           onClick={handleTwitterLogin}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
//         >
//             login with twitter
//           {/* <BsTwitter className="mr-2" /> Login with Twitter */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Twitter

import React from 'react';
import Head from 'next/head';
import axios from 'axios';

const Twitter = () => {
    const handleTwitterLogin = async () => {
        try {
          // Make a request to the backend's /auth/twitter route
          window.location.href = 'http://localhost:8080/auth/twitter';
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
