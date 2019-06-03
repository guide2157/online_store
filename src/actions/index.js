import {CHECK_OUT, ADD_TO_CART, DELETE_ALL, DELETE_ITEM, FETCH_ITEM, FETCH_ITEMS} from "../actions/types";
import backend from "../apis/backend";

export const fetchItems = () => async dispatch => {
    const response = await backend.get(`/all`);
    dispatch({type: FETCH_ITEMS, payload: response.data});
};

export const fetchItem = (id) => async dispatch => {
    const response = await backend.get(`/single/${id}`);
    dispatch({type: FETCH_ITEM, payload: response.data});
};

export const checkOut = () => {
    return {type:CHECK_OUT};
};

export const addToCart = (id) => {
    return {type:ADD_TO_CART, payload: id};
};

export const deleteAll = () => {
    return {type:DELETE_ALL};
};

export const deleteItem = (id) => {
    return {type:DELETE_ITEM, payload:id};
};