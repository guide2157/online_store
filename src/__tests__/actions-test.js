import axios from "axios";
import {checkOut, addToCart, deleteAll, deleteItem, fetchItem, fetchItems} from "../actions";
import {CHECK_OUT, ADD_TO_CART, DELETE_ALL, DELETE_ITEM, FETCH_ITEM, FETCH_ITEMS} from "../actions/types";

jest.mock("axios");

describe("test actions", () => {


    test('should create an action to check out', ()=> {
        const expectedAction = {
            type: CHECK_OUT,
        };
        expect(checkOut()).toEqual(expectedAction);
    });

    test('should create an action to add an item to the cart', () => {
        const itemNumber = 2;
        const expectedAction = {
            type: ADD_TO_CART,
            payload: itemNumber
        };
        expect(addToCart(itemNumber)).toEqual(expectedAction);
    });

    test('should create an action to delete all items in the cart', () => {
        const expectedAction = {
            type:DELETE_ALL
        };
        expect(deleteAll()).toEqual(expectedAction);
    });

    test('should create an action to delete a specific item in the cart', () => {
        const itemNumber = 2;
        const expectedAction = {
            type: DELETE_ITEM,
            payload: itemNumber
        };
        expect(deleteItem(itemNumber)).toEqual(expectedAction);
    })


});

