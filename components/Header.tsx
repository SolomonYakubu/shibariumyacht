import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { Link, animateScroll as scroll } from "react-scroll";
import corner from "../public/images/logo.webp";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import ExportedImage from "next-image-export-optimizer";
export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSocialOpen, setSocialOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [home, setHome] = useState(true);
  const list = [
    ["Home", null],

    ["About", null],
    ["Partners", null],
    ["Tokenomics", null],
    ["Roadmap", null],
  ];

  const sessionList = [
    ["Dashboard", "/dashboard", true],
    ["Profile", "/profile", true],
  ];
  const router = useRouter();
  useEffect(() => {
    setNavOpen(false);
    if (router.pathname === "/") {
      return setHome(true);
    }
    setHome(false);
  }, [router]);

  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = () => {
      const { pageYOffset, scrollY } = window;
      setPage(scrollY);
    };
    document.addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll);
  }, []);
  return (
    <div className="fixed top-0 z-40">
      <div
        className={`${
          (page < 70 && "bg-none") || "bg-none md:bg-grad md:bg-opacity-40"
        } transition-all duration-500 p-4 md:px-16 md:py-8 flex w-screen items-center justify-between   h-16`}
      >
        <div className="block w-16 p-1">
          <ExportedImage
            src={corner}
            alt="logo"
            layout="responsive"
            className=""
          />
        </div>
        <ul className="  md:justify-between  md:flex hidden">
          {home &&
            list.map(([name, link], index) => (
              <Link
                className="m-2 text-white font-bold  cursor-pointer hover:text-blue-400 font-[Figtree]"
                key={index}
                activeClass="none"
                to={`${name}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {name}
              </Link>
            ))}
        </ul>

        <button
          className={`md:hidden relative p-2 outline-none after:rounded-full z-50  ${
            (page < 70 && "text-white") || "text-white"
          }`}
          onClick={() => setNavOpen(!isNavOpen)}
        >
          {(isNavOpen && <AiOutlineClose size={40} />) || (
            <MdOutlineMenu size={40} />
          )}
        </button>
      </div>
      <div
        className={`md:hidden absolute top-0 z-40 bg-opacity-90 overflow-hidden flex flex-col  bg-bg2 shadow-lg w-full items-center justify-center transition-all ease-out duration-300 ${
          (isNavOpen && "h-96") || "h-0 py-0"
        }`}
      >
        <ul className="flex flex-col ">
          {home &&
            list.map(
              ([name, link], index) =>
                (home && (
                  <Link
                    className={`mt-4  text-gray-50  text-center   font-bold  text-2xl font-[Figtree]`}
                    key={index}
                    onClick={() => setNavOpen(false)}
                    activeClass="active"
                    to={`${name}`}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {name}
                  </Link>
                )) || (
                  <li
                    className={`mt-2 pl-2 text-gray-50 m-1 font-light text-xl hover:scale-105`}
                    key={index}
                    onClick={() => router.push("/")}
                  >
                    {name}
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
}
