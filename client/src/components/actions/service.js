import axios from "axios";

import { token } from "../utils/token";

import {
    GET_SERVICES,
    ADD_SERVICE,
    UPDATE_SERVICE,
    DELETE_SERVICE,
} from "../utils/types";

import { deleteImage } from "./image";

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

export const updateService = (_id, service) => async (dispatch) => {
    try {
        const res = await axios.put(`/service/${_id}`, service, token);

        dispatch({ type: UPDATE_SERVICE, payload: res.data });
    } catch (e) {}
};

export const deleteService = (_id, url) => async (dispatch) => {
    try {
        await deleteImage(url);

        await axios.delete(`/service/${_id}`, token);

        dispatch({ type: DELETE_SERVICE, payload: _id });
    } catch (e) {}
};
