"use client";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({
      email: email,
      password: password,
    });
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="email"
          placeholder="email"
          onChange={(e: any) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e: any) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
