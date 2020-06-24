import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="list-unstyled mt-3 mr-2 menu-ul">
        <li className="mb-1">
          <a>Home</a>
        </li>
        <li className="mb-1">
          <a>About</a>
        </li>
        <li className="mb-1">
          <a>Projects</a>
        </li>
        <li className="mb-1">
          <a>Development</a>
        </li>
        <li className="mb-1">
          <a>Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
