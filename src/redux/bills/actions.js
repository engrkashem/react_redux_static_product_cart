import { ADDAMOUNT, DEDUCTAMOUNT } from "./actionTypes"

export const addAmount=(amount)=>{
    return{
        type:ADDAMOUNT,
        payload:amount
    }
};

export const deductAmount=(amount)=>{
    return{
        type:DEDUCTAMOUNT,
        payload:amount
    }
};