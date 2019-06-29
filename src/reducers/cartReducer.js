import _ from "lodash"
import {ADD_TO_CART, DELETE_ALL, DELETE_ITEM, DELETE_ITEM_BY_ONE} from "../actions/types";

export default (state= {}, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            let result1 = _.find(state, ['id',action.payload.id]);
            if (result1 === undefined) {
                result1 = action.payload;
                result1.num = 1;
                return {...state, [action.payload.id]:result1};
            } else {
                result1.num = result1.num + 1;
                return {...state, [action.payload.id]:result1};
            }
        case DELETE_ALL:
            return {};
        case DELETE_ITEM_BY_ONE:
            let result2 = state[action.payload];
            if (result2 === undefined) {
                return state;
            } else {
                result2.num = result2.num - 1;
                if (result2.num === 0) {
                    return _.omit(state, [action.payload]);
                }
                return {...state, [action.payload]:result2};
            }
        case DELETE_ITEM:
            return _.omit(state, [action.payload]);
        default:
            return state;
    }
};
