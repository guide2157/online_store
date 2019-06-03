import React from "react";
import {create} from "react-test-renderer";
import axios from "axios";
import { shallow } from 'enzyme';
import {ItemList} from "../../components/item/item_list";
// import '../test-config';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();


describe("test item list", ()=> {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            items: [{
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
            }]
        };
        store = mockStore(initialState);
        wrapper = shallow(
            <ItemList store={store} />
        );
    });

    it("should display products detail correctly in list form", async ()=> {
        const instance= wrapper.getInstance();
        await instance.componentDidMount();
        const root = instance.root();
        const listOfHeader = root.findAll(elm => elm.class === "h5");
        expect(listOfHeader[0].props.children).toBe("novel");
        expect(listOfHeader[1].props.children).toBe("egg");
        const listOfDescription = root.findAll(elm => elm.class === "p");
        expect(listOfDescription[0].props.children).toBe("best book of the year");
        expect(listOfDescription[1].props.children).toBe("fresh");
        const listOfLink = root.findAll(elm => elm.class === "a");
        expect(listOfLink[0].props.children).toBe("More detail");
        expect(listOfLink[1].props.children).toBe("More detail");
    });

});