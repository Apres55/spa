import React from "react";
import genderIcon from "./gender";


let Contact = ({phone, name, surname, gender}) => {
    return (
        <li className="contact">
            {genderIcon}{`${name} ${surname}`}
            <ul id="phone-area">{phone}</ul>
            <ul id="gender-area">{gender}</ul>
        </li>
    )
}


export default Contact;