import { ADD_CART, DELETE_CART } from "../../../action/type";



let initialCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];




export const CartReducer = (state = initialCart, action) => {
    switch (action.type) {

        case ADD_CART:
            {
                let find = state.findIndex(item => item.tenKhoaHoc === action.data.tenKhoaHoc);
                if (find === -1) {
                    state.push(action.data);
                    localStorage.setItem('cart', JSON.stringify(state));
                }
                return [...state];
            }
        case DELETE_CART:
            {
                let fin = state.filter(item => item.maKhoaHoc !== action.data);
                state = fin;
                localStorage.setItem('cart', JSON.stringify(state));
                return [...state];
            }
        default:
            return state;
    }
}