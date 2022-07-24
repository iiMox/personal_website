import { CAROUSEL_VISIBILITY } from "../utils/types";

const initialState = false;

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CAROUSEL_VISIBILITY:
            return payload;
        default:
            return state;
    }
}
