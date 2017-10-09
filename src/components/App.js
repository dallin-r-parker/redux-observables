import React from 'react';
import { connect } from 'react-redux'
import { ping } from "../actions/index";
import Search from './Search'

let App = ({isPinging, ping}) => (
    <div>
        {/*<h1>is pinging: {isPinging.toString()}</h1>*/}
        {/*<button onClick={ping}>start PING</button>*/}
        <br/>
        <br/>
        <hr/>
        <Search />
    </div>
);

function mapStateToProps(reducer) {
    return {
        isPinging: reducer.isPinging
    }
}

App = connect(mapStateToProps, { ping })(App);

export default App
