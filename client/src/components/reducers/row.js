import { SET_ROW, CLEAR_ROW } from "../utils/types";

const initialState = {};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ROW:
            return { ...payload };
        case CLEAR_ROW:
            return {};
        default:
            return state;
    }
}
