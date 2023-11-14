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
      { name: "Upload", image: "/1.avif" },
      { name: "Edit", image: "/x.jpg" },
      { name: "Download", image: "/x.jpg" },
      { name: "Populate", image: "/1.avif" },
    ],
  },
  {
    category: "Signing In",
    heading: "User Account Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.3",
    features: [
      { name: "Profile", image: "/1.avif" },
      { name: "Login", image: "/1.avif" },
      { name: "Signin", image: "/x.jpg" },
      { name: "Projects", image: "/1.avif" },
    ],
  },
  {
    category: "User Features",

    heading: "Project Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.1",
    features: [
      { name: "Create", image: "/x.jpg" },
      { name: "Delete", image: "/1.avif" },
      { name: "Sandbox", image: "/1.avif" },
      { name: "Organize", image: "/x.jpg" },
    ],
  },
  {
    category: "Collaborative Features",

    heading: "Organizations & Collaborations",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.2",
    features: [
      { name: "Create", image: "/1.avif" },
      { name: "Share", image: "/1.avif" },
      { name: "Delete", image: "/x.jpg" },
      { name: "Manage", image: "/1.avif" },
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
