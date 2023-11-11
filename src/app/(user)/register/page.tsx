"use client";

import { useState } from "react";

export default function Signup() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({
      avatar: avatar,
      name: name,
      email: email,
      password: password,
    });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="file"
          placeholder="avatar"
          onChange={(e: any) => {
            setAvatar(e.target.files[0]);
          }}
          required
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          required
        />
        <input
        type="text"
        placeholder="username"
        onChange={(e: any) => {
          setUsername(e.target.value);
        }}
        required
      />
        <input
          type="email"
          placeholder="email"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e: any) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
