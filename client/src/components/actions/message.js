import axios from "axios";

import { token } from "../utils/token";

import { GET_MESSAGES, DELETE_MESSAGE } from "../utils/types";

export const getAllMessages = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/message", token);

        dispatch({ type: GET_MESSAGES, payload: res.data });
    } catch (e) {}
};

export const addMessage = (message) => async () => {
    try {
        await axios.post("/api/message", message);
    } catch (e) {}
};

export const deleteMessage = (_id) => async (dispatch) => {
    try {
        await axios.delete(`/api/message/${_id}`, token);

        dispatch({ type: DELETE_MESSAGE, payload: _id });
    } catch (e) {}
};
