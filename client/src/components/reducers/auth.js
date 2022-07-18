import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../utils/types";

const initialState = {
    isAuthenticated: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload);
            return { ...state, isAuthenticated: true };
        case LOGIN_FAIL:
        case LOGOUT: {
            localStorage.clear();
            return { ...state, isAuthenticated: false };
        }
        default:
            return state;
    }
}
