"use client";

import {FunctionComponent} from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar: FunctionComponent = () => {
  {/* Get the current route */}
const currentRoute = usePathname();
const linkStyle = "transition ease-in-out duration-500 text-slate-800 px-4 py-2 rounded-full hover:bg-amber-400";
const activeLink = linkStyle + " border-2 border-amber-400";
const nonActiveLink = linkStyle;
  return (
    <div className="flex justify-end items-center flex-row p-8 gap-x-10 ">      
      <h3 className={currentRoute === "/" ? activeLink : nonActiveLink}><Link href="/">Home</Link></h3>  
      <h3 className={currentRoute === "/about" ? activeLink : nonActiveLink}><Link href="/about">About</Link></h3>
      <h3 className={currentRoute === "/learn" ? activeLink : nonActiveLink}><Link href="/learn">Learn</Link></h3>
    </div>
  );
};

export default Navbar;
