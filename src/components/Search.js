import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from "./List";
import { searchInput, getSearch } from "../actions/index";

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.getSearch = this.getSearch.bind(this);
    }

    handleSearchInput(e) {
        this.props.searchInput(e.target.value)
    }

    getSearch(){
        this.props.getSearch();
    }

    render(){
        const listResults = this.props.people.map((e, i) => {
            console.log('e: ', e);
            return (
                <List key={i} name={e.name}
                      height={e.height}
                      homeworld={e.homeworld}
                      hairColor={e.hair_color}
                      eyeColor={e.eye_color} />
            )
        });
        return(
            <div className="search-container">
                <input type="text"
                       placeholder='input a number'
                       value={this.props.input}
                       onChange={this.handleSearchInput}/>
                <button onClick={this.getSearch}>Get Search Results</button>
                {(this.props.people) ? listResults : null}
                <h1>{(this.props.input) ? this.props.input : 'nothing has been input'}</h1>
            </div>
        )
    }
}

function mapStateToProps({searchReducer}) {
    return {
        input: searchReducer.input,
        search: searchReducer.search,
        people: searchReducer.people
    }
}

export default connect(mapStateToProps, { searchInput, getSearch })(Search)