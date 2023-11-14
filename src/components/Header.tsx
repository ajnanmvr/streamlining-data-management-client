"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useUserContext } from "@/context/User";
import Axios from "@/utils/Axios";
function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const { setUser, user } = useUserContext();
 // logout function
 const logout = () => {

  Axios.post('/users/logout').then((res) => {
    setUser(null);
    router.push('/');
  }).catch((err) => {
    console.log(err);
  })

}


const isEditRoute = /^\/project\/.*\/edit$/.test(pathName || '')


  return (
    <>
    {
      // if pathname starts with /projects/ then show this
      !isEditRoute && (
        <header className="h-20 flex pt-16 pb-10 p-10 lg:px-10 xl:p-20 justify-between items-center ">
        <Link href={"/"}>
          <div className="lg:w-40 xl:w-48 w-32">
            <img className="object-contain" src="/logo/logo.png" />
          </div>
        </Link>
        <div>
          <ul className="lg:flex gap-1 items-center font-semibold hidden">
            <li>
              <Link
                href={"/projects"}
                className={`flex cursor-pointer items-center hover:fill-primary hover:text-primary mx-2 ${
                  pathName === "/projects" ? "fill-primary text-primary" : ""
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
                  pathName === "/organizations" ? "fill-primary text-primary" : ""
                }`}
              >
                <p className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
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
                <p className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                  </svg>
                  Sheets
                </p>
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
                  </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </Link>
            </li>
  
            {!user?.username ? (
              <>
                <li>
                  <Link
                    href={`/register`}
                    className={`${
                      pathName === "/register" &&
                      "fill-primary text-primary border-primary"
                    } ${
                      pathName !== "/register" &&
                      "border-black hover:border-primary"
                    } flex cursor-pointer  items-center hover:fill-primary hover:text-primary border-2 rounded-full py-1 px-3 gap-1`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                    >
                      <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                    </svg>
                    <span className="font-semibold">Sign up</span>
                  </Link>
                </li>
  
                <li>
                  <Link className="mx-2" href={"/login"}>Login</Link>
                </li>
              </>
            ) : (
              <>
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
                    onClick={logout}
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
            className="lg:hidden"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </header>
      )

    }
  
    </>
  );
}

export default Header;
