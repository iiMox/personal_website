import { CAROUSEL_VISIBILITY } from "../utils/types";

export const setCarouselVisibility = (state) => (dispatch) => {
    dispatch({ type: CAROUSEL_VISIBILITY, payload: state });
};
