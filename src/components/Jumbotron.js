import React from 'react'
function Jumbotron(props) {
    return (
        <div className="jumbtron text-center row">{props.children}</div>
    )
}

export default Jumbotron