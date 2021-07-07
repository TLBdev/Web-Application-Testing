import React from 'react';
function Display(props) {

    return (
        <div>
            <h1>{`Strikes: ${props.data.strikes}`}</h1>
            <h1>{`Balls: ${props.data.balls}`}</h1>
        </div>
    )

}

export default Display