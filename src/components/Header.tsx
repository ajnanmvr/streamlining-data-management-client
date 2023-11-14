"use client";
import React from "react";
import Link from "next/link";
import { useRouter , usePathname } from "next/navigation";
import { useUserContext } from "@/context/User";

function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const { setUser, user } = useUserContext();

  return (
    <header className="h-20 flex pt-16 pb-10 p-10 lg:px-10 justify-between items-center ">
      <Link href={"/"}>
        <div className="lg:w-40 w-32 lg:ml-">
          <img className="object-contain" src="/logo/logo.png" />
        </div>
      </Link>
      <div>
        <ul className="flex gap-1 items-center">
          {!user?.username ? (
            <>
              <li className="hover:text-primary hidden lg:block px-3 py-1 hover:border rounded-lg">
                <Link href={"/register"}>Register</Link>
              </li>
              <li className="hover:bg-light hidden lg:block border-primary border rounded-lg text-white px-3 py-1 bg-primary">
                <Link href={"/login"}>Login</Link>
              </li>
            </>
          ) : (
            <>
              <>
                <li className={`hover:text-primary hidden lg:block px-3 py-1  rounded-lg ${pathName === '/projects' ? 'text-primary' : ''}`}>
                  <Link href={"/projects"} >Projects</Link>
                </li>

                <li className={`hover:text-primary hidden lg:block px-3 py-1  rounded-lg ${pathName === '/organizations' ? 'text-primary' : ''}`}>
                  <Link href={"/organizations"}>Organizations</Link>
                </li>
                <li className={`hover:text-primary hidden lg:block px-3 py-1  rounded-lg ${pathName === '/sandbox' ? 'text-primary' : ''}`}>
                  <Link href={"/sandbox"}>SandBox</Link>
                </li>
                <li className={`hover:text-primary hidden lg:block px-3 py-1  rounded-lg ${pathName === '/docs' ? 'text-primary' : ''}`}>
                  <Link href={"/docs"}>Docs</Link>
                </li>
                <li className="hover:text-primary hidden lg:block px-3 py-1 hover:border rounded-lg">
                  <Link href={"/search"}>Search</Link>
                </li>
              </>

              <li className="hover:text-primary hidden lg:block px-3 py-1 hover:border rounded-lg">
                user
              </li>
              <li className="hover:bg-light hidden lg:block border-primary border rounded-lg text-white px-3 py-1 bg-primary">
                New
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
      </div>
    </header>
  );
}

export default Header;
