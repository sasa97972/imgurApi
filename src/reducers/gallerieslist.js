export default function galleriesList(state = [], action)
{
    switch (action.type) {
        case "FETCH_GALLERIES_SUCCESS":
            return action.payload;
    }
    return state;
}