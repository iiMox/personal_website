import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";

/* import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; */

const Home = React.lazy(() => import("./pages/Home"));

const Login = React.lazy(() => import("./pages/Login"));

const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='dashboard' element={<Dashboard />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
