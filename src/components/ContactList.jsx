import React from "react"
import Contact from "./Contact"
import './styles/contact.css'


export default function ContactList({ contacts, checkContact }) {
    return (
        <ol className="contact-list">

            {contacts.map((contact)=>(
                    <Contact  key ={contact.id} contact={contact} checkContact={checkContact}/>
                    // <li>item</li>
                    // <li>{contact.name}</li>
                    // <li>{contact.lastName}</li>

            ))}
        </ol>
    )
}