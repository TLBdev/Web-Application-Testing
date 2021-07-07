import React from 'react';
function Dashboard(props) {
    return (
        <div>
            <button onClick={props.strikeHandler}>strike</button>
            <button onClick={props.ballHandler}>ball</button>
            <button onClick={props.foulHandler}>foul</button>
            <button onClick={props.hitHandler}>hit</button>
        </div>
    )
}

export default Dashboard