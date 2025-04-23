import React from "react";
import NavBar from "./LayoutComponents/Navbar";
import MainFooter from "./LayoutComponents/Footer";

// Pass the child props
function MainLayout({ children }) {
  return (
    <div>
      <NavBar/>
      {children}
      <MainFooter/>
    </div>
  );
}

export default MainLayout