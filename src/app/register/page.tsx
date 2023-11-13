'use client';

import { useUserContext } from '@/context/User';
import Axios from '@/utils/Axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, user } = useUserContext();
  const [error, setError] = useState('');
  const router = useRouter();

  const submitForm = (e: any) => {
    e.preventDefault();
    // with axios
    Axios.post('users', {
      username: username,
      password: password,
      email: email,
      FirstName: firstName,
      LastName: lastName,
    })
      .then((data) => {
        if (data?.data?.username) {
          setUser(data.data);
          router.push('/profile');
        }
      })
      .catch((err) => {
        setError('please check all fields are filled');
        setTimeout(() => {
          setError('');
        }, 5000);
      });
  };
  return (
    <div className="flex w-screen h-screen bg-smoke items-center justify-center bg">
      <form
        onSubmit={submitForm}
        className="bg-white flex flex-col h-fit md:w-96  md:p-10 rounded-xl gap-3 items-center"
      >
        <div className="w-20">
          <img
            className="object-contain"
            src="/logo/logo-only.png"
            alt="Logo"
          />
        </div>
        <h1 className="text-center font-semibold text-2xl">
          Register in{' '}
          <span className="font-extrabold text-primary">Excelens</span>
        </h1>

        {error && <span className="text-red-500">{error}</span>}
        <input
          type="text"
          placeholder="First Name"
          onChange={(e: any) => setFirstName(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e: any) => setLastName(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e: any) => setUsername(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e: any) => setEmail(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
          className="px-3 py-2 rounded-lg border focus:border-primary"
          required
        />
        <button
          type="submit"
          className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary"
        >
          Register
        </button>
        <Link href="/login">
          <p className="text-sm">
            Already have an account?{' '}
            <span className="font-bold text-light">Login</span>
          </p>
        </Link>
      </form>
    </div>
  );
}
