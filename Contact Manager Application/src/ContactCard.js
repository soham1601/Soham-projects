import React from "react";
import ContactList from './ContactList';
import App from "./App";

function ContactCard(props){
    const {id,name,email}=props.contact;
    
   return(
       
           <div>
             <div>
             {name}
             </div>
             <div>
                 {email}
             </div>
              
              <div><button onClick={()=>{props.clickHandler(id)}}>Delete</button></div>
              </div>
   );

}
export default ContactCard;