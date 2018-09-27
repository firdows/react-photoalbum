export function loadAlbums(userID) {
    return (dispatch) => {
        return dispatch(fetchAlbums(userID));
    }

}

function fetchAlbums(userID) {
    return {
        type: 'LOAD_ALBUMS',
        payload: fetch('http://jsonplaceholder.typicode.com/albums?userId=${userID}').then(result => result.json())

    }
}