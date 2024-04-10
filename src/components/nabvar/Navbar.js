import React from "react";
import logo from "../../images/logo.svg"


const Navbar = () => {
  return (
    <div className={`w-full`}>
      <div className="flex items-center justify-center   bg-white w-full border border-b-black">
        <div className="w-32 sm:w-36 md:w-40 h-12 sm:h-14 md:h-16 cursor-pointer">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
