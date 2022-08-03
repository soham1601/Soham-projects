import React from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';
import App from "./App";

 const ContactList=(props)=>{
     const deleteContactHandler=(id)=>{
         props.getContactID(id);
     }
    //  const contacts=[{
    //      id:"1",
    //      name:"Soham",
    //      email:"sohampatil1601@gmail.com"
    //  }];
     const renderContact=props.contacts.map((contact)=>{
         return <div>
             <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
              </div>
     }) 
     return(
         <div>
             Contact List
             <Link to="/add">
             <button className="ui button blue right">Add Contact</button>
             </Link>
             <div>
                 {renderContact}
             </div>
         </div>
     );
 }
export default ContactList;