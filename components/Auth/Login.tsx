'use client';
import React from 'react';
import { useLogin } from '@/hooks/useLogin'; // Import the custom hook
import InputField from './InputField';
// import InputField from '@/components/InputField'; // Import the reusable InputField
// import SubmitButton from '@/components/Auth/SubmitButton';

const Login: React.FC = () => {
  const {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit,
  } = useLogin(); // Use the custom hook

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="Mobile Number"
            name="mobileno"
            type="tel"
            value={formData.mobileno}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

        <button
            type="submit"
            className={`w-full py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${loading ? 'bg-indigo-300' : 'bg-indigo-600 text-white'}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
















































// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useLogin } from '@/hooks/useLogin';

// const Login: React.FC = () => {
//   const router = useRouter();
// //   const [formData, setFormData] = useState({
// //     mobileno: '',
// //     password: '',
// //   });
// //   const [error, setError] = useState<string>('');
// //   const [loading, setLoading] = useState<boolean>(false);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     // Basic validation
// //     if (!formData.mobileno || !formData.password) {
// //       setError('Mobile Number and Password are required');
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // Send login request to the API
// //       const response = await fetch('https://data-save-nraq.onrender.com/login', {
// //         method: 'POST',
// //         body: JSON.stringify(formData),
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || 'Login failed');
// //       }

// //       // Handle successful login (e.g., store token, redirect, etc.)
// //       console.log('Login Successful:', data);
// //       // Example: redirect to home page
// //       router.push('/');
// //     } catch (err) {
// //       if (err instanceof Error) {
// //         setError(err.message);
// //       } else {
// //         setError('An unexpected error occurred');
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// const {
//     formData,
//     error,
//     loading,
//     handleChange,
//     handleSubmit,
//   } = useLogin(); // Use the hook
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="mobileno" className="block text-sm font-medium text-gray-700">Mobile Number</label>
//             <input
//               type="tel"
//               id="mobileno"
//               name="mobileno"
//               value={formData.mobileno}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your mobile number"
//               pattern="[0-9]{10}"
//               maxLength={10}
//               required
//             />
//           </div>
          
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className={`w-full py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${loading ? 'bg-indigo-300' : 'bg-indigo-600 text-white'}`}
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
