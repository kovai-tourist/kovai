import React from "react";
import {Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="fixed h-20 top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="container py-3 sm:py-0 ">
          <div className="flex justify-between items-center ">
            <div className="gap-4  font-bold text-2xl h-full flex justify-center items-center">
              <Link className="flex justify-center items-center" to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <p className="flex justify-center items-center h-full my-5 mx-10">Explore Kovai</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;