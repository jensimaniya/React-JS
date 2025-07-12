import React from "react";
import { Outlet, Link, NavLink } from "react-router";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function Component() {
  return (
    <Navbar fluid rounded>
      {/* <NavbarBrand href="https://flowbite-react.com">
        <img
          src="https://www.adobe.com/ie/creativecloud/design/discover/media_1c66507b68db7c7927c0f978345701fe0b2200583.png?width=750&format=png&optimize=medium"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </NavbarBrand> */}
      <div className="flex md:order-2">
        <Button>Get started</Button>
        {/* <NavbarToggle /> */}
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="/aboutus" className="m-4">AboutUs</NavbarLink>
        <NavbarLink href="*" className="m-4">Error</NavbarLink>
        <NavbarLink href="/" className="m-4">Home</NavbarLink>
        <NavbarLink href="/profile">Profile</NavbarLink>
      </NavbarCollapse>
      <Outlet />
    </Navbar>
  );
}
