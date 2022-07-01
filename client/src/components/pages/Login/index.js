import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import dashboardImg from "../../../images/dashboard.webp";
import loginImg from "../../../images/login.webp";

const Login = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState({ username: "", password: "" });

    return (
        <div className='login' style={{ height: window.innerHeight }}>
            <form>
                <img src={dashboardImg} alt='Login' />
                <input
                    type='text'
                    placeholder='Username'
                    value={login.username}
                    onChange={(e) => {
                        setLogin({ ...login, username: e.target.value });
                    }}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={login.password}
                    onChange={(e) => {
                        setLogin({ ...login, password: e.target.value });
                    }}
                />
                <button
                    onClick={(e) => {
                        navigate("../dashboard");
                    }}
                >
                    <img src={loginImg} alt='Login' /> Login
                </button>
            </form>
        </div>
    );
};

export default Login;
