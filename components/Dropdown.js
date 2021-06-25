import { useState, useEffect, useRef } from "react";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

import MenuItem from "./MenuItem";

export default function Dropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  });

  const ref = useRef();

  return (
    <nav ref={ref}>
      <CgMenu
        className={
          dropdownOpen
            ? "hidden"
            : "fixed rounded-3xl text-white h-12 w-24 right-4 top-4 p-1 cursor-pointer bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 md:hidden z-50"
        }
        onClick={handleToggle}
      />
      <IoClose
        className={
          dropdownOpen
            ? "fixed rounded-3xl text-white h-12 w-24 right-4 top-4 p-1 cursor-pointer bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 md:hidden z-50"
            : "hidden"
        }
        onClick={handleToggle}
      />

      <div
        className={
          dropdownOpen
            ? "fixed flex flex-col text-left top-20 right-4 bg-gray-800 rounded-3xl pt-7 pb-11 px-5 w-40 z-50 md:hidden"
            : "hidden"
        }
      >
        <MenuItem title="HOME" scrollTo="home" dropdownOpen={setDropdownOpen} />
        <MenuItem
          title="PROJECTS"
          scrollTo="projects"
          dropdownOpen={setDropdownOpen}
        />
        <MenuItem
          title="TECHNOLOGIES"
          scrollTo="technologies"
          dropdownOpen={setDropdownOpen}
        />
        <MenuItem
          title="ABOUT"
          scrollTo="about"
          dropdownOpen={setDropdownOpen}
        />
      </div>
    </nav>
  );
}
