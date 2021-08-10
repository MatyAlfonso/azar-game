import React from 'react'

export const Player = ({ number, value, counter, img }) => {
    return (
        <div className="Player">
            <h3>Pts: {counter}</h3>
            <h1>Player #{number}</h1>
            <div>
                <img className="Img" src={img}></img>
                <h2>{value}</h2>
            </div>
        </div>
    )
}
