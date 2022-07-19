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
        case UPDATE_SKILL:
            return {
                ...state,
                skills: state.skills.map((skill) =>
                    skill._id === payload._id ? payload : skill
                ),
            };
        case DELETE_SKILL:
            return {
                ...state,
                skills: state.skills.filter((skill) => {
                    return skill._id !== payload;
                }),
            };
        default:
            return state;
    }
}
