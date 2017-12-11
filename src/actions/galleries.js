export const asyncGetGalleries = (params) => dispatch => {
    const url = `https://api.imgur.com/3/gallery/${params.section}/${params.sort}/${params.window}/${params.page}?album_previews=true`;

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
                params.page > 0 ?
                    dispatch({type: "GALLERIES_NEXT_PAGE", payload: data.data})
                    :
                    dispatch({type: "FETCH_GALLERIES_SUCCESS", payload: data.data})
            });
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
};