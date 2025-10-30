import React from "react";
import { useState } from "react";
import Styles from "./Contacts.module.css";
import { v4 } from "uuid";

function Contacts({
  contacts,
  setContacts,
  changeHandler,
  alert,
  setAlert,
  contact,
  setContact,
  editing,
  setEditing,
  nameInput,
  setNameInput,
  lastNameInput,
  emailInput,
  phoneInput,
  setLastNameInput,
  setEmailInput,
  setPhoneInput,
}) {
  const inputs = [
    { class: nameInput, type: "text", name: "name", placeholder: "Name" },
    {
      class: lastNameInput,
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
    },
    {
      class: emailInput,
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      class: phoneInput,
      type: "number",
      name: "phone",
      placeholder: "Phone",
    },
  ];

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const editHandler = (event) => {
    // console.log(contact);
    // console.log("saaaaaaaaaaaaave");

    // setNameInput(contact.name);
    // setLastNameInput(contact.lastName);
    // setEmailInput(contact.email);
    // setPhoneInput(contact.phone);
    // const newContact = { nameInput, lastNameInput, emailInput, phoneInput };
    // const name = event.target.name;
    // const value = event.target.value;
    // setContact((newContact) => ({ ...newContact, [name]: value }));
    const contactToEdit = contacts.find((c) => c.id === id);
    if (!contactToEdit) return;

    setEditing(true);
    setContact(contactToEdit);

    const { name, lastName, email, phone } = contactToEdit;
    setNameInput(name);
    setLastNameInput(lastName);
    setEmailInput(email);
    setPhoneInput(phone);
  };

  const changeEditHandler = (event) => {
    const { name, value } = event.target;
    setContact((contact) => ({ ...contact, [name]: value }));
    if (name === "name") setNameInput(value);
    if (name === "lastName") setLastNameInput(value);
    if (name === "email") setEmailInput(value);
    if (name === "phone") setPhoneInput(value);
  };
  const saveEditedHandler = () => {
    console.log("saaaaaaaaaaaaave");
    const editedContacts = contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    setContacts(editedContacts);
    setEditing(false);
    setNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setPhoneInput("");
  };
  return (
    <>
      <div className={Styles.container}>
        <h3 className={Styles.header}>Add New Contact</h3>
        <div className={Styles.inputs}>
          {/* {!editing
            ? inputs.map((input, index) => (
                <input
                  className={Styles.input}
                  key={index}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  value={contact[input.name]}
                  onChange={changeEditHandler}
                />
              ))
            : inputs.map((input, index) => (
                <input
                  className={Styles.input}
                  key={index}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  value={input.class}
                  onChange={editHandler}
                />
              ))} */}
          {inputs.map((input, index) => (
            <input
              key={index}
              className={Styles.input}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={changeEditHandler}
            />
          ))}
          {editing ? (
            <button onClick={saveEditedHandler}>Edit</button>
          ) : (
            <button onClick={addHandler}>Add</button>
          )}
        </div>
      </div>
      <div className={Styles.alert}>{alert && <p>{alert}</p>}</div>
    </>
  );
}

export default Contacts;
