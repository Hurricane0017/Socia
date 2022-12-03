import {useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const SignIn = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordType,setPasswordType]=useState('password');
    const handlePasswordChange=(e)=>{setPassword(e.target.value)}
    const togglePassword=()=>{
        if(passwordType==="password")
        {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    }
    const handleClick=()=>{
        if(document.getElementById('passIcon').innerHTML===`<i class="bi bi-eye-fill" style="color: rgb(175, 170, 181);"></i>`){
            document.getElementById('passIcon').innerHTML=`<i class="bi bi-eye-slash-fill" style="color:rgb(175, 170, 181);"></i>`;
        }
        else{
            document.getElementById('passIcon').innerHTML=`<i class="bi bi-eye-fill" style="color: rgb(175, 170, 181);"></i>`;
        }
    }

    return (
        <div className="sign-in">
            <Navbar/>
            <div className="content">
                <header>Have an account?</header>
                <form onSubmit={()=>{
                    alert('Sign-In Successful');
                }}>
                    <input required type="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
                    <div>
                        <div id="passIcon" onClick={()=>{
                            handleClick();
                            togglePassword();
                        }}>
                            <i class="bi bi-eye-fill" style={{color:'#AFAAB5'}}></i>
                        </div>
                        <input required type={passwordType} placeholder='Password' value={password} onChange={handlePasswordChange}/>
                    </div>
                    <button>Sign In</button>
                    <a href='/'>Forget Password?</a>
                </form>
                <div className='remember'>
                    <input type="checkbox" id='remember'/>
                    <label htmlFor='remember'>Remember Me</label>
                </div>
                <div className="create">
                    <p>New user?</p>
                    <img src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNjIuODk3NDQsNjAuNjA4NWMtMS4xNzEyNiwtMC45MDQyOCAtMi44NTMxNSwtMC42OTE2NCAtMy43NjI1LDAuNDc1NjlsLTYuNzUzNjksOC42Njk4N2MtMS44MzU1NiwtNy41MjUgLTYuNzE4NzUsLTIyLjM3NjEyIC0xNy42NTE1LC0yOS4wNTE4N2MtNi40ODgxMywtMy44MzQ4MSAtMTQuMzc4NDYsLTQuNDc1OSAtMjEuNDAwNTYsLTEuNzM4ODFjLTE4LjI3NSw2LjA4NzE5IC0yMi4wMzc1LDI1LjUwOTc1IC0yNS4zODYxMyw0Mi42NDUyNWMtMi42ODc1LDEzLjc0Mzg3IC00Ljk5MzM4LDI1LjYxMTg4IC0xMy45NDI3NSwyNi44OTExM2MtOS43MTI2MywxLjM5NzUgLTEzLjg2MjEzLC00LjQ4MDA2IC0xOC42NTM5NCwtMTEuMjg3NWMtNS4yMTEwNiwtNy4zOTYgLTExLjExNTUsLTE1Ljc3NTYzIC0yNC44MTkwNiwtMTEuODYyNjNjLTI0Ljg2NzQ0LDcuMTE5MTkgLTI1LjE1MjMxLDQ3LjMxODgxIC0yNS4xNTIzMSw0OS4wMjUzOGMwLDEuNDg0MjcgMS4yMDMyMywyLjY4NzUgMi42ODc1LDIuNjg3NXYwYzEuNDg0MjcsMCAyLjY4NzUsLTEuMjAzMjMgMi42ODc1LC0yLjY4NzVjMCwtMC4zNzYyNSAwLjI2ODc1LC0zNy44NTA3NSAyMS4yNjYxOSwtNDMuODQ2NTZjMTAuMDMyNDQsLTIuODY0ODggMTMuOTc1LDIuNzE5NzUgMTguOTQ5NTYsOS43OTMyNWM1LjA3NCw3LjE5NzEzIDEwLjgxOTg3LDE1LjM1NjM4IDIzLjgwNTg4LDEzLjQ5OTMxYzEyLjczMzM4LC0xLjgxOTQ0IDE1LjUxMjI1LC0xNi4wODIgMTguNDU3NzUsLTMxLjE3NWMzLjIwODg4LC0xNi40NjA5NCA2LjUyNTI1LC0zMy40ODA4NyAyMS44MTE3NSwtMzguNTczNjljNS41MTMxOCwtMi4yMzc4NSAxMS43NTMwNSwtMS43ODgwMyAxNi44ODgyNSwxLjIxNzQ0YzkuMjU1NzUsNS42NDM3NSAxMy41OTMzOCwxOS4xMDgxMyAxNS4yNDM1LDI1LjgzNDk0bC0xMS45NTkzNywtNS41MTIwNmMtMS4zNDg0NSwtMC42MjExNyAtMi45NDUxNSwtMC4wMzE1OCAtMy41NjYzMSwxLjMxNjg3Yy0wLjYyMTE3LDEuMzQ4NDUgLTAuMDMxNTgsMi45NDUxNSAxLjMxNjg3LDMuNTY2MzFsMTYuOTYwODEsNy44MTUyNWMxLjEzNDg5LDAuNTIyNDkgMi40ODAxOCwwLjE5Mzk2IDMuMjQ2NSwtMC43OTI4MWwxMC4yMTI1LC0xMy4xMzExMmMwLjQzODI1LC0wLjU2NDk1IDAuNjMzMzEsLTEuMjgxMjUgMC41NDIwMiwtMS45OTA0Yy0wLjA5MTI5LC0wLjcwOTE1IC0wLjQ2MTQxLC0xLjM1MjY5IC0xLjAyODQ1LC0xLjc4ODIzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+' alt='icon'/>
                    <Link to="/signup">Create an account</Link>
                </div>
            </div>  
            
        </div>
    );
}
 
export default SignIn;