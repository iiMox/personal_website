import React from "react";
import "./Login.css";
import loginImg from "../../../images/login.webp";

const Login = () => {
    return (
        <div className='login' style={{ height: window.innerHeight }}>
            <form>
                <img src={loginImg} alt='Login' />
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
