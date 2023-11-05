import { ADDQTY, ADD_PRODUCT_TO_STORE, DEDUCTQTY } from "./actionTypes";
import { initialState } from "./initialState";

const nextProductId=(products)=>{
    if(products.length==0)return 1;

    const maxId=products.reduce((maxId,product)=>Math.max(maxId, product.id),0);
    return maxId+1;
}

const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_PRODUCT_TO_STORE:
            return[
                ...state,
                {
                    id:nextProductId(state),
                    details:action.payload
                }
            ];


        case ADDQTY:
            return state.map(product=>{
                if(product.id === action.payload){
                    return{
                        ...product,
                        details:{
                            ...product.details,
                            qty:product.details.qty +1
                        }
                    }
                }
                return product
            });


        case DEDUCTQTY:
            return state.map(product=>{
                if(product.id === action.payload){
                    return{
                        ...product,
                        details:{
                            ...product.details,
                            qty:product.details.qty -1
                        }
                    }
                }
                return product
            });
    

        default:
            return state;
    }

}
export default reducer;