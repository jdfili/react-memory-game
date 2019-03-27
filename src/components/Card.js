import React from "react"

function Card(props) {
    return (
        <div onClick={()=>props.onClick(props.id)} className="card text-center" style={{width: 18 +'rem'}}>
            <img alt={props.name} src={props.image} className="card-img-top" />
        </div>
    )

}

export default Card;