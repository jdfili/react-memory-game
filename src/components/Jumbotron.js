import React from 'react'
function Jumbotron(props) {
    return (
        <div className="text-center row">{props.children}</div>
    )
}

export default Jumbotron