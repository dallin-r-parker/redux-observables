const initialState = {
    search: '',
    input: ''
};

export default (state = initialState, payload) => {
    console.log('search reducer: ', state, payload);
    return state
}