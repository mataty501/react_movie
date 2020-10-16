import React from 'react'
import Popup_container from './Popup_container'

const Movie_card = (props) => {
    return (
        <div>
            <div className="movie__card">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={props.image} alt="Card image cap" />

                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">
                            {props.description}
                        </p>

                        <Popup_container key={props.id} name={props.name} description={props.description} />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movie_card

