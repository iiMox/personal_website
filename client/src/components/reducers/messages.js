import {
    GET_MESSAGES,
    ADD_MESSAGE,
    UPDATE_MESSAGE,
    DELETE_MESSAGE,
} from "../utils/types";

const initialState = {
    messages: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MESSAGES:
            return { ...state, messages: [...payload] };
        case ADD_MESSAGE:
        case UPDATE_MESSAGE:
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((message) => {
                    return message._id !== payload;
                }),
            };
        default:
            return state;
    }
}
