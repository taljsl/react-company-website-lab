import React from "react";

const Navbar = ({ views }) => {
  return (
    <nav>
      <ul>
        {views.map((view) => (
          <li>{view.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

// Home Page
// Company History (a paragraph or so describing the founding etc. of your company (e.g. “founded in 1907 by…”). Feel free to use placeholder text)
// Past Work
// Staff
// Contact Us
// External Links - links to other sites of interest. Feel free to use placeholder links.
