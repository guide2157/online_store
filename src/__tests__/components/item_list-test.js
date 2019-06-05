import React from "react";
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import {ItemList} from "../../components/item/item_list";
import '../../setupTest';


describe("test item list", ()=> {
    let wrapper;
    const mockFetch = jest.fn();

    beforeEach(()=> {
        const initialState = [
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
        wrapper = mount(
            <MemoryRouter><ItemList items={initialState} fetchItems={mockFetch} /></MemoryRouter>
        );
    });

    it("should display products detail correctly in list form", ()=> {

        const names = wrapper.find("#name");
        expect(names.length).toBe(4);
        expect(names.get(0).props.children).toBe("novel");
        expect(names.get(2).props.children).toBe("egg");

        const links = wrapper.find("Link");
        expect(links.length).toBe(2);
        expect(links.get(0).props.to).toBe("/items/1");
        expect(names.get(1).props.to).toBe("/items/2");

        const descriptions = wrapper.find("#description");
        expect(descriptions.length).toBe(2);
        expect(descriptions.get(0).props.children).toBe("best book of the year");
        expect(descriptions.get(1).props.children).toBe("fresh");

        const prices = wrapper.find("#price");
        expect(prices.length).toBe(2);
        expect(prices.get(0).props.children.join('')).toBe("15$");
        expect(prices.get(1).props.children.join('')).toBe("2$");

        wrapper.unmount();
    });

    it("should call the fetchItem function when the component is mount", () => {
        expect(mockFetch.mock.calls.length).toBe(2);
        wrapper.unmount();
    })

});