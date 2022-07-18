import {
    GET_SKILLS,
    ADD_SKILL,
    UPDATE_SKILL,
    DELETE_SKILL,
} from "../utils/types";

const initialState = {
    skills: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_SKILLS:
            return { ...state, skills: [...payload] };
        case ADD_SKILL:
            return { ...state, skills: [...state.skills, payload] };
        default:
            return state;
    }
}
