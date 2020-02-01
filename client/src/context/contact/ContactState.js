import React, { useReducer } from "react";
import uuid from "uuid";
import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johns",
        email: "jill@gmail.com",
        phone: "111-222-3333",
        type: "personal"
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "555-222-3333",
        type: "personal"
      },
      {
        id: 3,
        name: "harry White",
        email: "harry@gmail.com",
        phone: "523-2112-3333",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //delete contact
  const deleteContact = () => {
    console.log('DELETEE')
  }
  //set current contact

  //clear current contact

  //update contact

  //filter contact

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
