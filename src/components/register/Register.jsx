import { useState,useContext} from "react";
import { UserContext } from "../../services/UserContext";
import {useNavigate} from "react-router-dom";

function Register(){
const navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const {user,
    setUser,
    isLogin,
    setLogin,
    login,
    register,
    registerMessage,
    message,
    logout } =useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        let username=name;
        let useremail=email;
        register(username,useremail)
        setUser({id :null,name:username,email :useremail})
    }
    return (

    <>
    <div style={{
        display :'flex',
        justifyContent:'center',
        margin:'auto'
        }}>
    <div style={
        {
            justifyContent:'center',
            margin:'auto'
        }}>
    { !isLogin ?
    <div >
       <h1>Register</h1>
       {registerMessage ?
        <h2 style={{color:'gren'}}>{registerMessage}</h2> :null
        }
      <form style={{display:'block'}}onSubmit={(e)=>handleSubmit(e)}> 
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input  style={{color:'red'}} type="submit" value="Register"/>
     </form>
     </div>
     : <h1>You are logged In as 

        <p style={{color:'green'}}>
            {user.email}
        </p>
        <button style={{fontSize:'large',color:'red'}}onClick={logout}>Logout</button>
        </h1>
    }

    {
        
    }
    </div>
    </div>
     </>
    );
}
export default Register;