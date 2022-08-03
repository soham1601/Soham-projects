import React from "react";
import App from "./App";

class AddContact extends React.Component{

  state={
     name:'',
     email:''
  };
   add=(e)=>{
      e.preventDefault();
      if(this.state.name==="" || this.state.email===""){
          alert("All fields are mandatory");
          return;
      }
      this.props.addContactHandler(this.state);
      this.setState({name:"",email:""});
      console.log(this.state);
   };
    render(){
        return(
            <div>
        <h3>Add Contact</h3> 
        <div>
            <form onSubmit={this.add} >
                <div>
                <label>Name</label>
                <input type="text" name='name' placeholder="xyz" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} ></input>
                </div>
                <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="xyz@gmail.com" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></input>
                </div>
                <button>Add</button>
            </form>
        </div> 
    </div>
        );
        
    }
        
    
}
export default AddContact;