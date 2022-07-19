import {
    GET_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
} from "../utils/types";

const initialState = {
    projects: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROJECTS:
            return { ...state, projects: [...payload] };
        case ADD_PROJECT:
            return { ...state, projects: [...state.projects, payload] };
        case UPDATE_PROJECT:
            return {
                ...state,
                projects: state.projects.map((project) =>
                    project._id === payload._id ? payload : project
                ),
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter((project) => {
                    return project._id !== payload;
                }),
            };
        default:
            return state;
    }
}
