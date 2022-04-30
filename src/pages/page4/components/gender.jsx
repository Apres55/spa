import React from "react";
import anonym from "./anonym.svg"
import male from "./men.svg"
import women from "./women.svg"
import Contacts from "./AllContacts"

const maleIcon = <img className="contact-name" src={male} alt="contact-logo" />
const womenIcon = <img className="contact-name" src={women} alt="contact-logo" />
const anonymus = <img className="contact-name" src={anonym} alt="contact-logo" />

let genderIcon;
    if (Contacts.map(contact => contact.gender === "male")) {
        genderIcon = anonymus;
    } else if (Contacts.map(contact => contact.gender === "female")) {
        genderIcon = womenIcon;
    } else {
        genderIcon = anonymus;
    }


export default genderIcon