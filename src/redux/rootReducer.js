import{ combineReducers } from 'redux' ;

import productReducer from './products/reducer';
import cartReducer from './cart/reducer';
import billReducer from './bills/reducer';

const rootReducer=combineReducers({
    products:productReducer,
    cart:cartReducer,
    bill:billReducer
});
export default rootReducer;