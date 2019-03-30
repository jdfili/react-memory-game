import React from 'react'

function Nav(props) {
    return (
        <div className="banner">
            <h3>Score: {props.score}</h3>
            <h3>High Score: {props.highScore}</h3>
            <h3>{props.feedback}</h3>
        </div>
    )
};

export default Nav;