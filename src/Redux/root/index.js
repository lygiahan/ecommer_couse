import { combineReducers } from 'redux';
import { CourseReducer } from '../Reducers/Course';
import { CartReducer } from '../Reducers/Cart';
import { UserReducer } from '../Reducers/User';
import { AdminReducer } from '../Reducers/Admin';
export const rootReducer = combineReducers({
    CourseReducer,
    CartReducer,
    UserReducer,
    AdminReducer
})