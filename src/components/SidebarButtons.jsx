import React, { useState } from "react";

import Styles from "./SidebarButtons.module.css";
// const searchInputValue=0,setSearchInputValue=0;
function SidebarButtons({
  contacts,
  setContacts,
  deleteButton,
  showCheckbox,
  selectedArray,
  isSearching,
  setIsSearching
}) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const deleteSelected = () => {
    let res = [];
    res = contacts.filter((contact) => !selectedArray.includes(contact.id));
    setContacts(res);
  };

  const searchContact = () => {
    console.log(searchInputValue);
    console.log(contacts);
    let res = contacts.find(
      (contact) =>
        searchInputValue ==
        (contact.name || contact.lastName || contact.phone || contact.email)
    );
    console.log(res);
    
  };

  return (
    <div className={Styles.sidebarButtons}>
      <input
        placeholder="search here"
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
      <button onClick={searchContact}>search</button>
      <button onClick={deleteButton}>Delete</button>
      {showCheckbox && (
        <button
          className={Styles.deleteSelectedButton}
          onClick={deleteSelected}
        >
          Delete Selected Contacts
        </button>
      )}
    </div>
  );
}

export default SidebarButtons;
