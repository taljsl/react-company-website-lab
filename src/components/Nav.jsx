import React from "react";

const Navbar = ({ views, changeView }) => {
  return (
    <nav>
      <ul>
        {views.map((view) => (
        //   <li key={view.id} onClick ={() => changeView(view.id)} >
        <li key={view.id} onClick ={(event) => changeView(event)} id={view.id} >
            {view.title}
            </li>
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
