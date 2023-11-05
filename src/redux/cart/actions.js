import { ADDTOCART, DELETEFROMCART } from "./actionTypes"

export const addToCart=(product)=>{
    return{
        type: ADDTOCART,
        payload:product
    }
};

export const addCartQty=(productId)=>{
    return{
        type: ADDTOCART,
        payload:productId
    }
};

export const deductCartQty=(productId)=>{
    return{
        type: ADDTOCART,
        payload:productId
    }
};

export const deleteFromCart=(productId)=>{
    return{
        type: DELETEFROMCART,
        payload:productId
    }
};