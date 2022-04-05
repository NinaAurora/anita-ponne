import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import eyeLogo from "../public/eye.svg";
import closeIcon from "../public/close.svg";
import menuIcon from "../public/menu.svg";
import useComponentVisible from "./useComponentVisible";

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: true,
};

function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " text-orange-500 border-b-2 border-orange-500";
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

export default function Navbar() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <nav>
      {/* Desktop navbar*/}
      <div className="bg-white drop-shadow uppercase hidden lg:block">
        <div className="container mx-auto py-8 flex justify-between items-center">
          <Link href="/">
            <a className="">
              <div className="flex justify-center">
                <Image src={eyeLogo} alt="Eye logo" width={50} height={50} />
              </div>
              <p className="text-3xl font-medium">Anita Ponne</p>
            </a>
          </Link>
          <ul className="flex gap-x-8">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Desktop navbar*/}

      {/* Mobile navbar*/}
      <div className="">
        <div className="px-8 my-4 flex justify-between block lg:hidden">
          <Link href="/">
            <a>
              <Image
                className=""
                src={eyeLogo}
                alt="Eye logo"
                width={50}
                height={50}
              />
            </a>
          </Link>

          <button
            ref={ref}
            onClick={() => setIsComponentVisible(!isComponentVisible)}
          >
            {!isComponentVisible ? (
              <Image src={menuIcon} alt="Menu Icon" width={40} height={40} />
            ) : (
              <Image src={closeIcon} alt="Close Icon" width={40} height={40} />
            )}
          </button>
        </div>

        {isComponentVisible ? (
          <div ref={ref} className="">
            <div className="px-8 pb-8 block md:hidden absolute bg-white z-10 w-full">
              <ul className="uppercase grid grid-cols-1 gap-y-6">
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/about">About</NavLink>
                </li>
                <li>
                  <NavLink href="/gallery">Gallery</NavLink>
                </li>
                <li>
                  <NavLink href="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* Mobile navbar*/}
    </nav>
  );
}
