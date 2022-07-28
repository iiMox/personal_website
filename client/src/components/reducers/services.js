import {
    GET_SERVICES,
    ADD_SERVICE,
    UPDATE_SERVICE,
    DELETE_SERVICE,
} from "../utils/types";

const initialState = {
    services: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_SERVICES:
            return { ...state, services: [...payload] };
        case ADD_SERVICE:
            return { ...state, services: [...state.services, payload] };
        case UPDATE_SERVICE:
            return {
                ...state,
                services: state.services.map((service) =>
                    service._id === payload._id ? payload : service
                ),
            };
        case DELETE_SERVICE:
            return {
                ...state,
                services: state.services.filter((service) => {
                    return service._id !== payload;
                }),
            };
        default:
            return state;
    }
}
