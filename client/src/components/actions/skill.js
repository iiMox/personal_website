import axios from "axios";

import { token } from "../utils/token";

import {
    GET_SKILLS,
    ADD_SKILL,
    UPDATE_SKILL,
    DELETE_SKILL,
} from "../utils/types";

export const getAllSkills = () => async (dispatch) => {
    try {
        const res = await axios.get("/skill", token);

        dispatch({ type: GET_SKILLS, payload: res.data });
    } catch (e) {}
};

export const addSkill = (skill) => async (dispatch) => {
    try {
        const res = await axios.post("/skill", skill, token);

        dispatch({ type: ADD_SKILL, payload: res.data });
    } catch (e) {}
};

export const updateSkill = () => (dispatch) => {};

export const deleteSkill = () => (dispatch) => {};
