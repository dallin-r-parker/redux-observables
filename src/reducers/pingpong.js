const initialState = {
    isPinging: false
};

export default (state = initialState, {type}) => {
    console.log("inside reducer", type);
    switch (type) {
        case 'PING':
            return { isPinging: true};
        case 'PONG':
            return { isPinging: false};
        default:
            return state
    }
}