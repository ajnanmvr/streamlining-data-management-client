"use client";
import React, { useState } from "react";
import DemoCard from "./DemoCard";

const items = [
  {
    heading: "excel file",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.",
    features: [
      { name: "create", image: "/1.avif" },
      { name: "create2", image: "/x.jpg" },
      { name: "create3", image: "/x.jpg" },
      { name: "create4", image: "/1.avif" },
    ],
  },
  {
    heading: "excel file 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.1",
    features: [
      { name: "create", image: "/x.jpg" },
      { name: "create", image: "/1.avif" },
      { name: "create", image: "/1.avif" },
      { name: "create", image: "/x.jpg" },
    ],
  },
  {
    heading: "excel file 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.2",
    features: [
      { name: "create", image: "/1.avif" },
      { name: "create", image: "/1.avif" },
      { name: "create", image: "/x.jpg" },
      { name: "create", image: "/1.avif" },
    ],
  },
  {
    heading: "excel file 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus voluptates unde doloremque modi perspiciatis laboriosam. Laborum minus cumque fugit cupiditate tempore beatae fugiat! Temporibus earum hic quam voluptas odio.3",
    features: [
      { name: "create", image: "/1.avif" },
      { name: "create", image: "/x.jpg" },
      { name: "create", image: "/1.avif" },
      { name: "create", image: "/1.avif" },
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
