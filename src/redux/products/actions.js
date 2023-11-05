import {  ADDQTY, ADD_PRODUCT_TO_STORE, DEDUCTQTY } from "./actionTypes";

export const addProductToStore=(product)=>{
    return{
        type:ADD_PRODUCT_TO_STORE,
        payload:product
    };
};

export const addQty=(productId)=>{
    return{
        type:ADDQTY,
        payload:productId
    };
};

export const deductQty=(productId)=>{
    return{
        type:DEDUCTQTY,
        payload:productId
    };
};