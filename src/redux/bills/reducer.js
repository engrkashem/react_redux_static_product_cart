import { ADDAMOUNT, DEDUCTAMOUNT } from "./actionTypes";
import { initialState } from "./initialState";


const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADDAMOUNT:
            return{
                ...state,
                subTotal:state.subTotal + action.payload
            };


        case DEDUCTAMOUNT:

            return{
                ...state,
                subTotal:state.subTotal==0?action.payload:state.subTotal-action.payload
            };

    
        default:
            return state;
    }
}
export default reducer;



