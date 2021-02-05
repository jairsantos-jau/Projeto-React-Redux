import { combineReducers } from "redux";

function adicionarBule(state = 0, action) {
    if(action.type === "cursoreact") {
        return state + 1;
    } else {
        return state;
    }
}

function adicionarCafe(state = 0, action) {
    if(action.type === "cursonode") {
        return state + 1;
    } else {
        return state;
    }
}


const reducers = combineReducers({adicionarBule, adicionarCafe});

export default reducers;