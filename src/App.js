import React, { useState, Fragment, useRef, useEffect} from "react"
import ContactList from "./components/ContactList"
import { v4 as uuid } from 'uuid'

export function App(){
    const [contacts, setContacts] = useState([
       
    ])
    const KEY = 'contacts'
    const contactRef = useRef()
    
    useEffect(()=>{
        const storedContacts = JSON.parse(localStorage.getItem(KEY))
        if(storedContacts){
            setContacts(storedContacts)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(KEY, JSON.stringify(contacts))
    }, [contacts])

    const checkContact = (id) =>{
        const newContacts = [...contacts]
        const contact = newContacts.find((contact) => contact.id === id)
        contact.isSelected = !contact.isSelected
        setContacts(newContacts)
    }

    const addContact = ()=>{
        const name = contactRef.current.value
        if(name === '') return
        setContacts((oldContacts)=>{
            return [...oldContacts, {id: uuid(), name, isSelected:false}]
        })
        contactRef.current.value = null
    }

    const deleteContact = () =>{
        const selectedContacts=contacts.filter((contact) => !contact.isSelected)
        setContacts(selectedContacts)
    }

    // return ( <div>Hola React</div> )
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                <Fragment>
            <h1>Mis Contactos</h1>
                <ContactList  contacts={contacts} checkContact={checkContact}/>
                <div className="col-3">
                    <input ref={contactRef} type="text" placeholder="nuevo contacto"/><br/><br/>
                    <button className="btn btn-primary btn-sm m-2" onClick={addContact}>Add</button>
                    <button className="btn btn-danger btn-sm" onClick={deleteContact}>Eliminar</button>
                    <p>💁 {contacts.filter((contact)=> contact.isSelected).length} contactos seleccionados</p>
                </div>
                </Fragment>
            </div>
        </div>
    )
}


