// Importing our components
import CompanyPage from "./components/CompanyPage";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Navbar from "./components/Nav";
import Content from "./components/Content";
import PastWorkPage from "./components/PastWorkPage";
import StaffPage from "./components/StaffPage";
import LinksPage from "./components/LinksPage";
import { useState } from "react";
import ContactPage from "./components/ContactPage";

// App here
const App = () => {
  // const headerContent = {
  //   // image:
  //   text: "Three Nerds Incorporated",
  // };
  const views = [
    { title: "Home", content: <Homepage />, id: 0 },
    { title: "Company History", content: <CompanyPage />, id: 1 },
    { title: "Past Work", content: <PastWorkPage />, id: 2 },
    { title: "Staff", content: <StaffPage />, id: 3 },
    { title: "Contact Us", content: <ContactPage />, id: 4 },
    { title: "Links", content: <LinksPage />, id: 5 },
  ];

  const [view, setView] = useState(views[0]);

  // const changeView = (viewId) => {
  //   // console.log(viewId)
  //   const selectedView = views[viewId]
  //   console.log(selectedView)
  //   setView(selectedView)

  // }
  // here we use an event listener rather than directly passing the id
  const changeView = (event) => {
    // console.log(viewId)
    const selectedView = views[event.target.id];
    // console.log(selectedView);
    setView(selectedView);
  };

  // rendering below
  return (
    <>
      {/* <Header headerContent={headerContent} view={view}/> */}
      {/* changed header to update dynamically, earlier header content var no longer neccessary */}
      <Header view={view}/>
      <Navbar views={views} changeView={changeView} />
      <Content view={view} />
    </>
  );
};

export default App;
