import React from "react";
import Styles from "./ContactsList.module.css";
import ContactItem from "./ContactItem";

function ContactsList({
  contacts,
  setContacts,
  showCheckbox,
  setSelectedArray,
  selectedArray,
  changeHandler,
  editing,
  setEditing,
  nameInput,
  setNameInput,
  setLastNameInput,
  setEmailInput,
  setPhoneInput,
  setContact,
  isSearching,
  setIsSearching,
}) {
  // console.log(contacts,showCheckbox);
  return (
    <div className={Styles.container}>
      <h3>Contacts List</h3>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            data={contact}
            contacts={contacts}
            setContacts={setContacts}
            showCheckbox={showCheckbox}
            setSelectedArray={setSelectedArray}
            selectedArray={selectedArray}
            editing={editing}
            setEditing={setEditing}
            nameInput={nameInput}
            setNameInput={setNameInput}
            setLastNameInput={setLastNameInput}
            setEmailInput={setEmailInput}
            setPhoneInput={setPhoneInput}
            setContact={setContact}
            changeHandler={changeHandler}
            contact={contact}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
