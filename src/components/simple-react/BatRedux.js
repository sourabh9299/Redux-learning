import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';

function BatRedux(props) {
    const [value, setval] = useState("");
    const Buycount = props.state
    return (
        <>
            <h1>
                Bat Example
            </h1>
            <h3>Total number of Bats:{Buycount}</h3>

            <input value={value} onChange={(e) => { setval(e.target.value) }} ></input>
            <button id='batButton'>BuyBat</button>
        </>
    )
}

function mapStateToProps(state) {
    return state.bat
}
function mapDispatchToProps(dispatch) {
    return { dispatch: dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(BatRedux);