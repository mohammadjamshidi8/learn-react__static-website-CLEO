import logo from "./assets/logo.png";
import React from "react";

export default function Menu() {
  const openMobileMenu = () => {
    const mobileMenuWrapper = document.querySelector("#mobile-menu");

    mobileMenuWrapper.classList.toggle("top-[-4000px]");
    mobileMenuWrapper.classList.toggle("top-0");
    mobileMenuWrapper.classList.toggle("opacity-0");
    mobileMenuWrapper.classList.toggle("h-0");
    mobileMenuWrapper.classList.toggle("top-16");
  };

  return (
    <div className="relative mobile-container md:tablet-container xl:desktop-container mt-6 flex justify-between items-center font-dana">
      {/* mobile menu start */}
      <div
        id="mobile-menu"
        className="absolute bg-white transition-all duration-500 top-[-4000px] opacity-0 right-0 w-full h-0 overflow-hidden lg:hidden"
      >
        <ul id="menu" className="w-max px-5 gap-3 flex flex-col">
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">پورتفولیو</a>
          </li>
          <li>
            <a href="#">خدمات</a>
          </li>
          <li>
            <a href="#">اخبار</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
        </ul>
      </div>
      {/* mobile menu ends */}

      {/* logo start */}
      <div id="logo">
        <a href="#">
          <img src={logo} alt="" className="w-14" />
        </a>
      </div>
      {/* logo ends */}

      {/* mobile burger menu and desktop menu start */}
      <div>
        {/* burger icon container start */}
        <div className="lg:hidden">
          <svg
            onClick={openMobileMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {/* burger icon container start */}

        {/* desktop menu start */}
        <div className="hidden lg:block">
          <ul id="menu" className="gap-10 flex">
            <li>
              <a href="#">خانه</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">پورتفولیو</a>
            </li>
            <li>
              <a href="#">خدمات</a>
            </li>
            <li>
              <a href="#">اخبار</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
          </ul>
        </div>
        {/* desktop menu ends */}
      </div>
      {/* mobile burger menu and desktop menu ends */}
    </div>
  );
}
