import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../utils/types";

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem("token"),
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return { ...state, payload, isAuthenticated: true };
        case LOGIN_FAIL:
        case LOGOUT: {
            localStorage.removeItem("token");
            return { ...state, isAuthenticated: false, token: null };
        }
        default:
            return state;
    }
}
