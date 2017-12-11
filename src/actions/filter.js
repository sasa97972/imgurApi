export const changeFilter = (name, value) => dispatch => {
    dispatch({
        type: "CHANGE_FILTER",
        payload: {
            name,
            value
        }
    });
};