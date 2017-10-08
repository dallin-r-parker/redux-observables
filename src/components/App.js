import React from 'react';
import { connect } from 'react-redux'
import { ping } from "../actions/index";

let App = ({isPinging, ping}) => (
    <div>
        <h1>is pinging: {isPinging.toString()}</h1>
        <button onClick={ping}>start PING</button>
    </div>
);

function mapStateToProps(reducer) {
    console.log('state to props', reducer);
    return {
        isPinging: reducer.isPinging
    }
}

App = connect(mapStateToProps, { ping })(App);

// App = connect(
//     ({isPinging}) => ({ isPinging }),
//     { ping }
// )(App);

export default App
