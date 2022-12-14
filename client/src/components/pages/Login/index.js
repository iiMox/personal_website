import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAdmin, logout } from "../../actions/auth";
import "./Login.css";

import dashboardImg from "../../../images/dashboard.webp";
import loginImg from "../../../images/login.webp";

const Login = () => {
    const [login, setLogin] = useState({ username: "", password: "" });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
    }, [dispatch]);

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
                    onClick={async (e) => {
                        e.preventDefault();
                        if (login.username !== "" && login.password !== "") {
                            dispatch(
                                loginAdmin(login.username, login.password)
                            );
                        } else {
                        }
                    }}
                >
                    <img src={loginImg} alt='Login' /> Login
                </button>
            </form>
        </div>
    );
};

export default Login;
