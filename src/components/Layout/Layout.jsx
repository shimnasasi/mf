import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div className="">
      <TopBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
