import axios from "axios";

import { token } from "../utils/token";

import {
    GET_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
} from "../utils/types";

export const getAllProjects = () => async (dispatch) => {
    try {
        const res = await axios.get("/project", token);

        dispatch({ type: GET_PROJECTS, payload: res.data });
    } catch (e) {}
};

export const addProject = (project) => async (dispatch) => {
    try {
        const res = await axios.post("/project", project, token);

        dispatch({ type: ADD_PROJECT, payload: res.data });
    } catch (e) {}
};

export const updateProject = () => async (dispatch) => {};

export const deleteProject = () => async (dispatch) => {};
