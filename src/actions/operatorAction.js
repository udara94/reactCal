import {ADD,SUBTRACT,MULTIPLY,DIVIDE} from '../reducers/types';

export const addOperator=()=>{
    return{
        type:ADD
    };
}

export const subtractOperator=()=>{
    return {
        type:SUBTRACT
    }
}
export const divideOperator=()=>{
    return{
        type:DIVIDE
    }
}

export const multiplyOperator=()=>{
    return {
        type:MULTIPLY
    }
}