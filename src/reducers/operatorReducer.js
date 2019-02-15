import {ADD,SUBTRACT,MULTIPLY,DIVIDE} from './types'

const initialState={
helloWord:'hello'
}
export default (state=initialState,action)=>{
    switch(action.type){
        case ADD:
            return state
        default:
            return state;
    }
}