import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col text-center items-center lg:text-left lg:items-start lg:flex-row justify-between bg-primary text-white p-12">
      <div className="flex flex-col justify-between">
        <div className="mb-10 lg:mb-0 lg:h-32">
          <img
            src="/logo/logo-white.png"
            alt="logo"
            className="h-12 w-40 object-contain"
          />
        </div>
        <p className="hidden lg:block font-light text-sm opacity-80 w-56">
          © Excelens Inc | All Rights Reserved
        </p>
      </div>
      <div className="w-full px-4">
        <div className="flex flex-wrap sm:flex-nowrap items-top mb-6 justify-center lg:justify-end xl:mr-32 gap-20">
          <div className="px-4 ">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
              Features
            </span>
            <ul className="list-unstyled opacity-80">
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="/sheets"
                >
                  Sheets
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="/projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="/organizations"
                >
                  Organizations
                </a>
              </li>
              {/* <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="/tea-stall"
                >
                  Tea Stall
                </a>
              </li> */}
            </ul>
          </div>
          <div className="px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
              Resources
            </span>
            <ul className="list-unstyled opacity-80 ">
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="#"
                >
                  Docs
                </a>
              </li>
              {/* <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  href="/contact-us"
                >
                  Contact Us
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
