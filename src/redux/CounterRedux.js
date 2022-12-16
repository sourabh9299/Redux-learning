// Second Part
import React from "react";
import { connect } from "react-redux";

function ConterRedux(prop) {
    const Count = prop.count
    return (
        <>
            <div className="main">
                <h3>counter</h3>
                <span className="spanClass">Count: {Count}</span>
                <button onClick={prop.decrement}>-</button>
                <button onClick={prop.increment}>+</button>
                <button onClick={prop.plus5}>+5</button>
                <button onClick={prop.reset}>reset</button>
            </div>
        </>
    )}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => {
            dispatch({ type: "increment" })
        },
        decrement: () => {
            dispatch({ type: "decrement" })
        },
        reset: () => {
            dispatch({ type: "reset" })
        },
        plus5: () => {
            dispatch({type:"plus5"})
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ConterRedux);