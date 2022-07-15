const initialState = {
    skills: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
}
