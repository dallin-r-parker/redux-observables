import React from 'react';

let List = (props) => (
    <div className="list-container">
        <ul>
            <li>Name: {props.name}</li>
            <li>Height: {props.height}</li>
            <li>Hair Color: {props.hairColor}</li>
            <li>Eye Color: {props.eyeColor}</li>
            <li>Home world: <a href={props.homeworld}>Find Out</a></li>
        </ul>
    </div>
);

export default List