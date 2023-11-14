"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useUserContext } from "@/context/User";

function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const { setUser, user } = useUserContext();

  return (
    <header className="h-20 flex pt-16 pb-10 p-10 lg:px-10 xl:p-20 justify-between items-center ">
      <Link href={"/"}>
        <div className="lg:w-40 xl:w-48 w-32">
          <img className="object-contain" src="/logo/logo.png" />
        </div>
      </Link>
      <div>
        <ul className="lg:flex gap-1 items-center font-semibold hidden">
          {!user?.username ? (
            <>
              <li className="hover:text-primary px-3 py-1 border border-transparent hover:border-smoke rounded-lg">
                <Link href={"/register"}>Register</Link>
              </li>
              <li className="hover:bg-light border-primary border rounded-lg text-white px-3 py-1 bg-primary">
                <Link href={"/login"}>Login</Link>
              </li>
            </>
          ) : (
            <>
              <>
                <li>
                  <Link
                    href={"/projects"}
                    className={`flex cursor-pointer items-center hover:fill-primary hover:text-primary mx-2 ${
                      pathName === "/projects"
                        ? "fill-primary text-primary"
                        : ""
                    }`}
                  >
                    <p className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 640 512"
                      >
                        <path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z" />
                      </svg>
                      Projects
                    </p>
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/organizations"}
                    className={`flex cursor-pointer items-center hover:fill-primary hover:text-primary mx-2 ${
                      pathName === "/organizations"
                        ? "fill-primary text-primary"
                        : ""
                    }`}
                  >
                    <p className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 384 512"
                      >
                        <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                      </svg>
                      Organizations
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/sandbox"}
                    className={`flex cursor-pointer items-center hover:fill-primary hover:text-primary mx-2 ${
                      pathName === "/sandbox" ? "fill-primary text-primary" : ""
                    }`}
                  >
                    {" "}
                    <p className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                      </svg>
                      SandBox
                    </p>{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/docs"}
                    className={`flex cursor-pointer items-center hover:fill-primary hover:text-primary mx-2 ${
                      pathName === "/docs" ? "fill-primary text-primary" : ""
                    }`}
                  >
                    <p className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                      </svg>{" "}
                      Docs
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/search"}
                    className={`flex cursor-pointer items-center hover:fill-primary hover:text-primary mx-4 ${
                      pathName === "/search" ? "fill-primary text-primary" : ""
                    }`}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </Link>
                </li>
              </>

              <li>
                <Link
                  href={`/profile`}
                  className={`${
                    pathName === "/profile" &&
                    "fill-primary text-primary border-primary"
                  } ${
                    pathName !== "/profile" &&
                    "border-black hover:border-primary"
                  } flex cursor-pointer  items-center hover:fill-primary hover:text-primary border-2 rounded-full py-1 px-3 gap-1`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className=""
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <span className="font-semibold">Profile</span>
                </Link>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="hover:fill-red-600 mx-4 cursor-pointer"
                >
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
                </svg>
              </li>
            </>
          )}
          <li className=" block lg:hidden rounded-lg text-white px-3 py-1">
            <Link href={"/login"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-primary h-6"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </Link>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
    </header>
  );
}

export default Header;
