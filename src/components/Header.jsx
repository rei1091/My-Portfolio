"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const items = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Skill", path: "/skill" },
  ];

  return (
    <>
      <header className="shadow-lg sticky top-0 p-2 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <nav className="hidden md:flex space-x-4 items-center">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-black hover:text-gray-400 font-bold text-xl no-underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-2xl focus:outline-none" // md: 768px でハンバーガー表示
            onClick={toggleMenu}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            {" "}
            {/* md: 768px で非表示 */}
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className=" text-lg block py-2 px-4 hover:text-gray-400 transition-colors duration-300 no-underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
