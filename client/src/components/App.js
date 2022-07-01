import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
