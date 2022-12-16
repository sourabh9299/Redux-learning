import React, { useReducer } from 'react'


function reducer(state, action) {

    switch (action) {
        case "increment":
            console.log("Increased By 1")
            return state + 1;
        case "decrement":
            console.log("Decreased By 1")
            return state - 1;


    }

}

function Counter() {
    const [Count, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <div className="main">

                <div>counter</div>
                <button onClick={() => { dispatch("increment") }}>+</button>
                <span>Count: {Count}</span>
                <button onClick={() => { dispatch("decrement") }}>-</button>
            </div>
        </>
    )
}

export default Counter;