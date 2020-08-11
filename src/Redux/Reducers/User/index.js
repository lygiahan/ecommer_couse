import { LOGIN, GET_THONGTIN_USER, UPDATE_THONGTIN, LOGOUT } from "../../../action/type";

let initialState = {
    signup: null,
    signin: null,
    thongtin: null,
    login: false,
    updatethongtin: null,
    isregister: false
};

export const UserReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN:
            {
                state.signin = action.data;
                return {...state };
            }
        case GET_THONGTIN_USER:
            {
                state.thongtin = action.data;
                return {...state };
            }
        case UPDATE_THONGTIN:
            {
                state.updatethongtin = action.data;
                return {...state };
            }
        case LOGOUT:
            {
                localStorage.clear();
                return {...state, signin: action.data }
            }
        default:
            return state;
    }
}