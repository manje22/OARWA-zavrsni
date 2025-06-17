import React from "react";
import NavBar from "./LayoutComponents/Navbar";
import MainFooter from "./LayoutComponents/Footer";


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


//ovde sam definirala layout koji cu koristit na par stranica (da ne ponavljam isto)