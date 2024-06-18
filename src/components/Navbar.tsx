import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { createPortal } from "react-dom";
import MobileNavigationOptions from "./MobileNavigationOptions";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);


  return (
    <nav className="flex justify-between items-center py-5 px-5 fixed w-full top-0 z-50">
      <img
        src={logo}
        alt="logo"
        className="w-[103px]"
      />
      {/* <div className=" mobile:block tablet:hidden " onClick={() => setShowSidebar(true)}>
        <GiHamburgerMenu size={50} />
      </div> */}
      {/* <div className="w-[15%] mobile:hidden tablet:flex  text-white justify-center items-center gap-3">
        <a>Home</a>
        <a>Home</a>
      </div> */}

      {showSidebar &&
                createPortal(
                    <MobileNavigationOptions
                        onclose={() => setShowSidebar(false)}
                    />,
                    document.getElementById("root") ||
                        document.createElement("div")
                )}
    </nav>
  );
};

export default Navbar;
