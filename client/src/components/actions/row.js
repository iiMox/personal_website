import { SET_ROW, CLEAR_ROW } from "../utils/types";

export const setRow = (row) => (dispatch) => {
    dispatch({ type: SET_ROW, payload: row });
};

export const clearRow = () => (dispatch) => {
    dispatch({ type: CLEAR_ROW });
};
