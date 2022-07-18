import axios from "axios";

import { token } from "../utils/token";

import {
    GET_MESSAGES,
    ADD_MESSAGE,
    UPDATE_MESSAGE,
    DELETE_MESSAGE,
} from "../utils/types";

export const getAllMessages = () => async (dispatch) => {
    try {
        const res = await axios.get("/message", token);

        dispatch({ type: GET_MESSAGES, payload: res.data });
    } catch (e) {}
};

export const addMessages = () => async (dispatch) => {
    try {
    } catch (e) {}
};

export const updateMessages = () => async (dispatch) => {
    try {
    } catch (e) {}
};

export const deleteMessages = () => async (dispatch) => {
    try {
    } catch (e) {}
};
