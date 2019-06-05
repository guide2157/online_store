
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {checkOut, addToCart, deleteAll, deleteItem, fetchItem, fetchItems} from "../actions";
import {CHECK_OUT, ADD_TO_CART, DELETE_ALL, DELETE_ITEM, FETCH_ITEM, FETCH_ITEMS} from "../actions/types";

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
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
    });

    test('should create an action to fetch all items in the store', async () => {
        const store = mockStore({});
        const data = [
            {
                id: 1,
                name: "novel",
                price: 15,
                shortDescription: "best book of the year",
                description: "a completed story of mankind"
            }, {
                id: 2,
                name: "egg",
                price: 2,
                shortDescription: "fresh",
                description: "best from the local farm"
            }];
        axios.get.mockImplementationOnce(() => Promise.resolve({ status: 200, data: data }));
        const expectedAction = {
            type: FETCH_ITEMS,
            payload: data
        };
        return store.dispatch(fetchItems())
            .then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
    });


});

