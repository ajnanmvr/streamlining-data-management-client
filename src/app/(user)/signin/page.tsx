"use client";
import { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({
      username: username,
      password: password,
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="username"
          onChange={(e: any) => setUsername(e.target.value)}
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
