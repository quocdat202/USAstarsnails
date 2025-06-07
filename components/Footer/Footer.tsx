import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.png";
import { MENU_ITEMS } from "../../constants";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../../assets/svg";

export const Footer = () => {
  const MenuLink = ({ href, children, className = "", onClick }: any) => (
    <li className={`p-2 sm:p-4 ${className}`}>
      <Link href={href} legacyBehavior>
        <a
          onClick={onClick}
          className="plus-sans-light text-white text-base font-medium"
        >
          {children}
        </a>
      </Link>
    </li>
  );

  return (
    <div className="flex flex-col gap-12 px-3 md:px-[100px] py-[80px] pt-6 w-full bg-[#462F02] mt-20">
      <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-0">
        <div className="flex items-center justify-between w-full sm:w-[auto]">
          <a className="flex items-center gap-1">
            <Image
              src={logo}
              width={40}
              height={40}
              alt="USAstarsnails Logo"
              priority
              className="rounded-[3px] flex-shrink-0"
            />
            <h1 className="font-bold text-base text-white">USAstarsnails</h1>
          </a>
          <div className="flex gap-4 sm:hidden">
            <a
              href="https://www.facebook.com/share/1557oUy1eS7/?mibextid=wwXIfr"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/usastarsnails.dunstable?igsh=aDRwM3YzazFyNnpm&utm_source=qr"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <WhatsAppIcon />
          </div>
        </div>

        <ul className="flex menu-item ">
          {MENU_ITEMS.slice(1).map((item) => (
            <MenuLink key={item.label} href={item.href}>
              {item.label}
            </MenuLink>
          ))}
        </ul>
        <div className="hidden gap-4 sm:flex">
          <a
            href="https://www.facebook.com/share/1557oUy1eS7/?mibextid=wwXIfr"
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/usastarsnails.dunstable?igsh=aDRwM3YzazFyNnpm&utm_source=qr"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <WhatsAppIcon />
        </div>
      </div>
      <p className="plus-sans-light text-white text-sm font-normal text-center">
        USAstarsnails @ 2025. All rights reserved.
      </p>
    </div>
  );
};
