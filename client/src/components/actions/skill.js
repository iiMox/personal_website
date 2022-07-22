import axios from "axios";

import { token } from "../utils/token";

import {
    GET_SKILLS,
    ADD_SKILL,
    UPDATE_SKILL,
    DELETE_SKILL,
} from "../utils/types";

import { deleteImage } from "./image";

export const getAllSkills = () => async (dispatch) => {
    try {
        const res = await axios.get("/skill");

        dispatch({ type: GET_SKILLS, payload: res.data });
    } catch (e) {}
};

export const addSkill = (skill) => async (dispatch) => {
    try {
        const res = await axios.post("/skill", skill, token);

        dispatch({ type: ADD_SKILL, payload: res.data });
    } catch (e) {}
};

export const updateSkill = (_id, skill) => async (dispatch) => {
    try {
        const res = await axios.put(`/skill/${_id}`, skill, token);

        dispatch({ type: UPDATE_SKILL, payload: res.data });
    } catch (e) {}
};

export const deleteSkill = (_id, url) => async (dispatch) => {
    try {
        await deleteImage(url);

        await axios.delete(`/skill/${_id}`, token);

        dispatch({ type: DELETE_SKILL, payload: _id });
    } catch (e) {}
};
