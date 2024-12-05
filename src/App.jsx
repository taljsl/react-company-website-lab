// src/App.jsx
import CompanyPage from "./components/CompanyPage";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Navbar from "./components/Nav";
import Content from "./components/Content";
import PastWorkPage from "./components/PastWorkPage";
import StaffPage from "./components/StaffPage";
import LinksPage from "./components/LinksPage";
// import Logo from "src/assets/Logo.png"
const App = () => {
  const headerContent = {
    // image: 'src/assets/screenshot_2024-12-05_at_10.13.51___am_480.png',
    text: "Three Nerds Incorporated",
  };
  const views = [
    { title: "Home", content: <Homepage />, id:1 },
    { title: "Company History", content: <CompanyPage />, id:2 },
    {title: 'Past Work', content: <PastWorkPage />, id:3},
    {title: 'Staff', content:<StaffPage/>, id:4},
    {title: 'Contact Us', content:<StaffPage />, id:5}, 
    {title: 'Links', content:<LinksPage/>, id:6 }
  ];

  
  return (
    <>
      <Header headerContent={headerContent} />
      <Navbar views={views} />
      <Content />
    </>
  );
};

export default App;

// Description
// Build a single page portfolio website for a fictional company. The page should contain the following sections:

// Home Page
// Company History (a paragraph or so describing the founding etc. of your company (e.g. “founded in 1907 by…”). Feel free to use placeholder text)
// Past Work
// Staff
// Contact Us
// External Links - links to other sites of interest. Feel free to use placeholder links.
// All text that the user reads should be stored in variables and displayed using a combination of curly braces, conditional rendering, and looping with JSX elements.

// In addition, use a combination of click events and conditional rendering to create a “nav bar” that hides/shows each section. If the user clicks “Staff” in the “nav bar”, call an event listener that alters a state variable. Based on that variable’s value, show the “Staff” section of the page and hide all other sections. The goal is to make it appear to the end user like their navigating through a multi-page app, even though it’s being implemented as a single page app.

// Optional, but strongly recommended
// Make the navigation its own component. Then lift its state to the parent component which will use that information to display the correct section (e.g. home, past work, etc)
