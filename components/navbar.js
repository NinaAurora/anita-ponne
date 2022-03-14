import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import eyeLogo from '../public/eye.svg'

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: true
};

function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' text-orange-500';
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}

  
  export default function Navbar() {
    return (

        <nav className="bg-white drop-shadow uppercase">
            <div className="container mx-auto py-8 flex justify-between items-center">
                <div className="">
                    <div className="flex justify-center">
                        <Image
                        src={eyeLogo}
                        alt="Eye logo"
                        width={50}
                        height={50}
                    />
                    </div>
                    <p className="text-3xl font-medium">Anita Ponne</p>
                </div>

                <ul className="flex gap-x-8">
                    <li>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/gallery">
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>

    )
  }