// First Step
let initialState = {
    Buycount: 10
}
function Batreducer(state = initialState, action) {
    switch (action.type) {
        case "buyBat":
            return { count: state.Buycount - 1 }

        default:
            return state;

    }
}


export default Batreducer;