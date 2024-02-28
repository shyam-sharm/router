import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="/courses" className="text-white">
              Courses
            </a>
          </li>
          <li>
            <a href="/gallery" className="text-white">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;
