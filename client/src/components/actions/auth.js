import axios from "axios";

import { LOGIN_SUCCESS, LOGOUT } from "../utils/types";

export const loginAdmin = (username, password) => async (dispatch) => {
    try {
        const res = await axios.post("/api/auth/login", { username, password });

        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });

        window.location.pathname = "dashboard";
    } catch (e) {}
};

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};
