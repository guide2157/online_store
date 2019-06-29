import {CHECK_OUT, ADD_TO_CART, DELETE_ALL, DELETE_ITEM, FETCH_ITEM, FETCH_ITEMS, DELETE_ITEM_BY_ONE} from "../actions/types";
import backend from "../apis/backend";
import history from "../history";

export const fetchItems = () => async dispatch => {
    const response = await backend.get(`/all`);
    dispatch({type: FETCH_ITEMS, payload: response.data});
};

export const fetchItem = (id) => async dispatch => {
    const response = await backend.get(`/${id}`);
    dispatch({type: FETCH_ITEM, payload: response.data[0]});
};

export const checkOut = () => async dispatch => {
    dispatch({type:CHECK_OUT});
    history.push('/');
};

export const addToCart = (item) => async dispatch => {
    const payload = {name: item.name, id: item.id, price: item.price, shortDescription: item.shortDescription};
    dispatch({type:ADD_TO_CART, payload: payload});
};

export const deleteAll = () => {
    return {type:DELETE_ALL};
};

export const deleteItem = (id) => {
    return {type:DELETE_ITEM, payload:id};
};

export const deleteItemByOne = (id) => {
    return {type:DELETE_ITEM_BY_ONE, payload:id}
};