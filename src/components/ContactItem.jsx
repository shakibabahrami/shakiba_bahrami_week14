import React from "react";
import Styles from "./ContactsItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  contacts,
  setContacts,
  showCheckbox,
  setSelectedArray,
  selectedArray,
  editing,
  setEditing,
  nameInput,
  setNameInput,
  setLastNameInput,
  setEmailInput,
  setPhoneInput,
  setContact,
  changeHandler,
  contact,
}) {
  const checkboxHandler = (id) => {
    selectedArray.findIndex((item) => item === id) === -1
      ? setSelectedArray((selectedArray) => [...selectedArray, id])
      : setSelectedArray((selectedArray) => [
          ...selectedArray.filter((item) => item !== id),
        ]);
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const editHandler = (id) => {
    setEditing(id);
    const contactToChange = contacts.filter((contact) => contact.id === id)[0];
    setNameInput(contactToChange.name);
    setLastNameInput(contactToChange.lastName);
    setEmailInput(contactToChange.email);
    setPhoneInput(contactToChange.phone);

    const editingContact = {
      id: contactToChange.id,
      name: contactToChange.name,
      lastName: contactToChange.lastName,
      email: contactToChange.email,
      phone: contactToChange.phone,
    };
    setContact(editingContact);
  };

  return (
    <li key={id}>
      {showCheckbox && (
        <input
          className={Styles.checkbox}
          type="checkbox"
          onClick={() => checkboxHandler(id)}
        />
      )}
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📞</span> {phone}{" "}
      </p>
      <p>
        <span>📧</span>
        {email}
      </p>
      <span className={Styles.delete} onClick={() => deleteHandler(id)}>
        🗑️
      </span>
      <span className={Styles.edit} onClick={() => editHandler(id)}>
        ✏️
      </span>
    </li>
  );
}

export default ContactItem;
