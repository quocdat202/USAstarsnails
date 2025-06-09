import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { MENU_ITEMS } from "../../constants";
import { useRouter } from "next/router";
import { CloseIcon, HamburgerIcon } from "../../assets/svg";

const NavBar = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const MenuLink = ({ href, children, className = "", onClick }: any) => {
    const isActive = currentPath === href;

    return (
      <li className={`${className} cursor-pointer`}>
        <Link href={href} legacyBehavior>
          <a
            onClick={onClick}
            className={`p-3 plus-sans-light text-md ${
              isActive
                ? "text-[#e09f26] font-bold"
                : "text-[#828896] font-normal"
            }`}
          >
            {children}
          </a>
        </Link>
      </li>
    );
  };

  // Menu icon component
  const MenuIcon = () => (
    <button onClick={toggleMenu} className="block lg:hidden z-10">
      <div className={`h-6 w-6 relative`}>
        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </div>
    </button>
  );

  return (
    <header
      className={`fixed items-center h-[72px] flex left-0 top-0 w-full z-10 transition-colors duration-300 bg-white px-1 md:px-[100px]`}
    >
      <div className="w-full flex justify-between items-center p-3 md:py-3">
        <Link href="/" legacyBehavior>
          <a className="flex items-center gap-1">
            <Image
              src={logo}
              width={40}
              height={40}
              alt="USAstarsnails Logo"
              priority
            />
            <h1 className={`font-bold text-base `}>USAstarsnails</h1>
          </a>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className={`flex  menu-item gap-4`}>
            {MENU_ITEMS.map((item) => (
              <MenuLink key={item.label} href={item.href}>
                {item.label}
              </MenuLink>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <MenuIcon />

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black flex justify-center items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible left-full"
          }`}
        >
          <nav>
            <ul className="text-center flex flex-col gap-4">
              {MENU_ITEMS.map((item) => (
                <MenuLink
                  key={item.label}
                  href={item.href}
                  className="text-4xl hover:text-gray-500"
                  onClick={toggleMenu}
                >
                  {item.label}
                </MenuLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
