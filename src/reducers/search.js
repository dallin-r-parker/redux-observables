const initialState = {
    search: '',
    input: '',
    people: [],
    homePlanet: ''
};

export default (state = initialState, {type, payload}) => {
    switch (type){
        case 'SEARCH_INPUT':
           return Object.assign({}, state, {input: payload});
        case 'GET_SEARCH':
            return Object.assign({}, state, {search: state.input, input: payload});
        case 'UPDATE_LIST':
            return Object.assign({}, state, {people: [payload]});
        default:
            return state
    }
}