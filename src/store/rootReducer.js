import  authReducer  from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import homeReducer from "./reducers/homeReducer";

const rootReducer = {
    home: homeReducer,
    auth: authReducer,
    card : cartReducer
}
export default rootReducer;