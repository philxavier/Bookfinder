import React from "react";
import Sidebar from "./components/SideBar";
import Content from "./Content";
import ModalComponent from "./components/Modal";

const SidebarExampleSidebar = () => {
  return (
    <div>
      <ModalComponent />
      <Sidebar />;
      <Content />
    </div>
  );
};

export default SidebarExampleSidebar;
