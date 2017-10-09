const initialState = {
    isPinging: false
};

export default (state = initialState, {type}) => {
    switch (type) {
        case 'PING':
            return { isPinging: true};
        case 'PONG':
            return { isPinging: false};
        default:
            return state
    }
}