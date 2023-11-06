import { ADDCARTQTY, ADDTOCART, DEDUCTCARTQTY, DELETEFROMCART } from "./actionTypes";
import { initialState } from "./initialState";

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADDTOCART:
            const newPproduct=action.payload;
            if(state.length==0){
                return[
                    ...state,
                    newPproduct
                ]
            }
            else{
            let flag=false;
            const newState= state.map(product=>{
                if(product.id === action.payload.id){
                    flag=true;
                    return {
                        ...product,
                        qty:product.qty + 1
                    };
                }

                return product;
            });

            if(flag){
                return newState;
            }

            newState.push(newPproduct);
            return newState
        }


        case ADDCARTQTY:
            return state.map(product=>{
                if(product.id === action.payload){
                    return{
                        ...product,
                        qty:product.qty + 1
                    }
                }
                return product
            });


        case DEDUCTCARTQTY:
            return state.map(product=>{
                if(product.id === action.payload){
                    return{
                        ...product,
                        qty:product.qty - 1
                    }
                }
                return product
            });


        case DELETEFROMCART:
            return state.filter(product=>product.id !== action.payload);
            
    
        default:
            return state;
    }
}
export default reducer;