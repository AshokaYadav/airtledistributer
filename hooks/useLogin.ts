import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {createPost} from '../utils/crud'
interface FormData {
  mobileno: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ mobileno: '', password: '' });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.mobileno || !formData.password) {
      setError('Mobile Number and Password are required');
      setLoading(false);
      return;
    }

    // try {
    //   // Send login request to the API
    //   const response = await fetch('https://data-save-nraq.onrender.com/login', {
    //     method: 'POST',
    //     body: JSON.stringify(formData),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.message || 'Login failed');
    //   }

    //   // Handle successful login (e.g., store token, redirect, etc.)
    //   console.log('Login Successful:', data);
    //   // Example: redirect to home page
    //   router.push('/');
    // } catch (err:any) {
    //   if (err instanceof Error) {
    //     setError(err.message);
    //   } else {
    //     setError('An unexpected error occurred');
    //   }
    // } finally {
    //   setLoading(false);
    // }



    try {
      // Call createPost function to make the API request
      const response = await createPost('https://data-save-nraq.onrender.com/login', formData);
  
      if (!response) {
        throw new Error('Login failed');
      }
  
      // Handle successful login (e.g., store token, redirect, etc.)
      console.log('Login Successful:', response);
  
      // Example: redirect to home page
      router.push('/');
  
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
};
