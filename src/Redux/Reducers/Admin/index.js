import { ADMIN_LOGIN, ADMIN_LOGOUT, GET_LIST_USER, GET_MALOAI, FILTER_MALOAI, FILTER_USER, GET_DANHSACHHOCVIEN_KHOAHOC, UPDATE_USER, HIENTHI_USER } from "../../../action/type";

let initialAdmin = {
    adminlogin: null,
    listUser: localStorage.getItem('dsuser') ? JSON.parse(localStorage.getItem('dsuser')) : [],
    maloai: [],
    filterMaloai: '',
    filterUser: [],
    dsHocvienkhoahoc: [],
    hienthiUser: null
};

export const AdminReducer = (state = initialAdmin, action) => {

    switch (action.type) {

        case ADMIN_LOGIN:
            {
                state.adminlogin = action.data;
                return {...state };
            }
        case ADMIN_LOGOUT:
            {
                localStorage.clear();
                return {...state, adminlogin: action.data }
            }
        case GET_LIST_USER:
            {
                state.listUser = action.data;
                return {...state };
            }
        case GET_MALOAI:
            {
                state.maloai = action.data;
                return {...state }
            }
        case FILTER_MALOAI:
            {
                state.filterMaloai = action.data;
                return {...state };
            }
        case FILTER_USER:
            {

                return {...state, listUser: action.data }
            }
        case GET_DANHSACHHOCVIEN_KHOAHOC:
            {
                return {...state, dsHocvienkhoahoc: action.data };
            }

        case HIENTHI_USER:
            {
                return {...state, hienthiUser: action.data };
            }
        default:
            return state;
    }
}