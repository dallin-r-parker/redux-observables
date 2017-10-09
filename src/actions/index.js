export const ping = () => ({ type: 'PING'});

export const searchInput = value => ({
    type: 'SEARCH_INPUT',
    payload: value
});

export const getSearch = () => ({
    type: 'GET_SEARCH',
    payload: ''
});

export const updateList = results => ({
    type: 'UPDATE_LIST',
    payload: results
});
