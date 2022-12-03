import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SignUp = () => {
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const onChangeConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value);
        console.log(name);
        console.log(email);
        console.log(phoneNumber);
        if(password!==e.target.value){
            document.getElementById('error').innerHTML="&#9888 Password didn't match";
        }
        else{
            document.getElementById('error').innerHTML="";
        }
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value);
        if(confirmPassword!==''){
            if(confirmPassword!==e.target.value){
                document.getElementById('error').innerHTML="&#9888 Password didn't match";
            }
            else{
                document.getElementById('error').innerHTML="";
            }
        }
        else{
            document.getElementById('error').innerHTML="";
        }  
    }

    return (
        <div className="sign-up">
            <div className="navbar">
                <Navbar/>
            </div>
            <header>Create an account</header>
            <span className="top-icon"><img src="https://cdn-icons-png.flaticon.com/512/4521/4521953.png" alt="icon"/></span>

            <form onSubmit={()=>{
                alert('Account has been created successfully');
            }}>
                <span><img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="icon"></img></span>
                <input required type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
                <span><img src="https://cdn-icons-png.flaticon.com/512/2099/2099199.png" alt="Email"></img></span>
                <input required type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                <span><img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="icon"></img></span>
                <input required type="tel" placeholder="Phone number" pattern="[0-9]{10}" onChange={e=>setPhoneNumber(e.target.value)}/>
                <span><img src="https://cdn-icons-png.flaticon.com/512/807/807292.png" alt="icon"></img></span>
                <input required type="password" placeholder="Password" onChange={onChangePassword}/>
                <span><img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="icon"></img></span>
                <input required type="password" placeholder="Confirm Password" onChange={onChangeConfirmPassword}/>
                <p id="error"></p>
                <button>Sign up</button>
                <div className="option">
                    <p className="or">OR</p>
                </div>
                <Link to="/signin">
                    <button>Log In</button>
                </Link>
            </form>
        </div>
    );
}
 
export default SignUp;