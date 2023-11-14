"use client";
import React from "react";
import DemoCard from "./DemoCard";

const items = [
  {
    category: "Basic Features",
    heading: "Excel File Management",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.",
    features: [
      { name: "Upload", image: "/12.png" },
      { name: "Edit", image: "/11.png" },
      { name: "Download", image: "/x.jpg" },
      { name: "Populate", image: "/12.png" },
    ],
  },
  {
    category: "Signing In",
    heading: "User Account Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.3",
    features: [
      { name: "Profile", image: "/0.png" },
      { name: "Login", image: "/login.png" },
      { name: "Signin", image: "/register.png" },
      { name: "Projects", image: "/projects.png" },
    ],
  },
  {
    category: "User Features",

    heading: "Project Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.1",
    features: [
      { name: "Create", image: "/create.png" },
      { name: "Delete", image: "/register.png" },
      { name: "Sandbox", image: "/12.png" },
      { name: "Organize", image: "/projects.png" },
    ],
  },
  {
    category: "Collaborative Features",

    heading: "Organizations & Collaborations",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.2",
    features: [
      { name: "Create", image: "/11.png" },
      { name: "Share", image: "/create.png" },
      { name: "Delete", image: "/x.jpg" },
      { name: "Manage", image: "/create.png" },
    ],
  },
];
function DemoSection() {
  return (
    <>
      {items.map((item, index) => (
        <DemoCard item={item} index={index} />
      ))}
    </>
  );
}

export default DemoSection;
