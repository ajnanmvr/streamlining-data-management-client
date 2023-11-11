"use client";

import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [avatar, setAvatar] = useState(null);
const [firstName,setFirstName]=useState("")
const [lastName,setLastName] = useState("")
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({
      avatar: avatar,
      email: email,
      password: password,
    });
  };
  return (
    <div className="flex w-screen h-screen bg-smoke items-center justify-center bg">
      <form onSubmit={submitForm} className="bg-white flex flex-col h-fit w-96 p-10 rounded-xl gap-3 items-center">
        <div className='w-20'>
          <img className='object-contain' src="/logo/logo-only.png" alt="Logo" />
        </div>
        <h1 className="text-center font-bold text-2xl">Register to Continue</h1>
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
        <button type="submit" className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary">
          Register
        </button>
        <p className="text-sm">Already have an account? <Link className="font-bold text-light" href="/login">Login</Link></p>
      </form>

      <div className="mt-4">
        {/* Replace "/register" with the actual path to your registration page */}
      </div>
    </div>
  );
}
