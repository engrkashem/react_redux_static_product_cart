import { ADDCARTQTY, ADDTOCART, DEDUCTCARTQTY, DELETEFROMCART } from "./actionTypes";
import { initialState } from "./initialState";

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADDTOCART:
            return[
                ...state,
                action.payload
            ];


        case ADDCARTQTY:
            return state.map(product=>{
                if(product.id === action.payload){
                    product.details.qty = product.details.qty +1
                }
            });


        case DEDUCTCARTQTY:
            return state.map(product=>{
                if(product.id === action.payload){
                    product.details.qty = product.details.qty -1
                }
            });


        case DELETEFROMCART:
            return state.filter(product=>product.id !== action.payload);
            
    
        default:
            return state;
    }
}
export default reducer;