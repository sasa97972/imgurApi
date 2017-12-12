export const asyncComments = (id, clear = false) => dispatch => {
    if(clear) {
        dispatch({type: "FETCH_COMMENTS_SUCCESS", payload: []});
        return;
    }

    const url = `https://api.imgur.com/3/gallery/${id}/comments/best`;

    let settings = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "headers": {
            "authorization": "Client-ID d2167eddae8bbc8"
        }
    };

    fetch(url, settings)
        .then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            response.json().then(function(data) {
                dispatch({type: "FETCH_COMMENTS_SUCCESS", payload: data.data});
            });
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
};