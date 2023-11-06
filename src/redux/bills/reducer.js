import { ADDAMOUNT, DEDUCTAMOUNT } from "./actionTypes";
import { initialState } from "./initialState";


const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADDAMOUNT:
            return{
                ...state,
                subTotal:state.subTotal + parseFloat(action.payload),
                total:state.total+ parseFloat(action.payload)
            };


        case DEDUCTAMOUNT:

            return{
                ...state,
                subTotal:(state.subTotal <=0 || state.subTotal<parseFloat(action.payload))?0:state.subTotal-parseFloat(action.payload),
                total:(state.total <=0 || state.total<parseFloat(action.payload))?0:state.total-parseFloat(action.payload),
            };

    
        default:
            return state;
    }
}
export default reducer;



