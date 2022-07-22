import axios from "axios";

import { token } from "../utils/token";

import {
    GET_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
} from "../utils/types";

import { deleteImage } from "./image";

export const getAllProjects = () => async (dispatch) => {
    try {
        const res = await axios.get("/project");

        dispatch({ type: GET_PROJECTS, payload: res.data });
    } catch (e) {}
};

export const addProject = (project) => async (dispatch) => {
    try {
        const res = await axios.post("/project", project, token);

        dispatch({ type: ADD_PROJECT, payload: res.data });
    } catch (e) {}
};

export const updateProject = (_id, project) => async (dispatch) => {
    try {
        const res = await axios.put(`/project/${_id}`, project, token);

        dispatch({ type: UPDATE_PROJECT, payload: res.data });
    } catch (e) {}
};

export const deleteProject = (_id, url) => async (dispatch) => {
    try {
        await deleteImage(url);

        await axios.delete(`/project/${_id}`, token);

        dispatch({ type: DELETE_PROJECT, payload: _id });
    } catch (e) {}
};
