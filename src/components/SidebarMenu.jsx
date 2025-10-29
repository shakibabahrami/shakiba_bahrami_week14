import React from "react";
import Styles from "./SidebarMenu.module.css";
import SidebarButtons from "./sidebarButtons";

function SidebarMenu({contacts,setContacts,deleteButton,showCheckbox,selectedArray}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.iconContainer}>
        <span className={Styles.notebook}>📓</span>
      </div>
      <SidebarButtons contacts={contacts} setContacts={setContacts} deleteButton={deleteButton}showCheckbox={showCheckbox} selectedArray={selectedArray} />
    </div>
  );
}

export default SidebarMenu;
