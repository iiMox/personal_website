import axios from "axios";

import { token } from "../utils/token";

import {
    GET_SERVICES,
    ADD_SERVICE,
    UPDATE_SERVICE,
    DELETE_SERVICE,
} from "../utils/types";

export const getAllServices = () => async (dispatch) => {
    try {
        const res = await axios("/service", token);
        dispatch({ type: GET_SERVICES, payload: res.data });
    } catch (e) {}
};

export const addService = (service) => async (dispatch) => {
    try {
        const res = await axios.post("/service", service, token);

        dispatch({ type: ADD_SERVICE, payload: res.data });
    } catch (e) {}
};

export const updateService = () => (dispatch) => {};

export const deleteService = () => (dispatch) => {};
