import React, { useState ,useEffect } from 'react';
import './App.css';
import {uuid} from 'uuidv4';
import {BrowserRouter as Router,Switch,Routes,Route} from 'react-router-dom';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
   const addContactHandler=(contact)=>{
         setContacts([...contacts,{id:uuid(), ...contact}]);
   };

   const removeContactHandler=(id)=>{
          const newContactList=contacts.filter(contact=>{
             return contact.id!==id;
          });
          setContacts(newContactList);
   }
   useEffect(()=>{
    const retrieve=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieve){
      setContacts(retrieve);
    }
   },[]); 
   useEffect(()=>{
       localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
   },[contacts]);

  
  return (
    <div>
      <Router>
      <Header />
       
       <Routes>
       
        <Route path="/add" render={(props)=>(
        <AddContact {...props} 
        addContactHandler={addContactHandler} 
        />)} />
       <Route path="/" render={(props)=>(
       <ContactList {...props} 
       contacts={contacts} 
       getContactID={removeContactHandler} 
       />)} />
      
       </Routes>
       
       {/* <AddContact addContactHandler={addContactHandler} />
       <ContactList contacts={contacts} getContactID={removeContactHandler} /> */}
      </Router>
       
    </div>
  );
}
;
export default App;
