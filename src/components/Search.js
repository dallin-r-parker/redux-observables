import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from "./List";
import { searchInput } from "../actions/index";

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleSearchInput(e) {
        console.log(e.target.value);
        console.log(this.props)
    }

    render(){
        return(
            <div className="search-container">
                <input type="text"
                       placeholder='search star wars characters'
                       onChange={this.handleSearchInput}/>
                <List/>
            </div>
        )
    }
}

function mapStateToProps(reducer) {
    console.log('search map state: ', reducer);
    return {
        input: ''
    }
};

export default connect(mapStateToProps, searchInput)(Search)