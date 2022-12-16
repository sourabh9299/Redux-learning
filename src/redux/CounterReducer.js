// First Step
let initialState = {
    count: 0
}
function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        
        case "decrement":
            return { count: state.count - 1 }
        
        case "plus5":
            return { count: state.count + 5 }
        
        case "reset":
            return { count: 0 }
        
        default: 
            return state;

    }
}

export default CounterReducer;