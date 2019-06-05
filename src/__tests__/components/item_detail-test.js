import React from "react";
import {Link} from "react-router-dom";
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import {ItemDetail} from "../../components/item/item_detail";
import '../../setupTest';


describe("test item detail", ()=> {
    let wrapper;
    const mockFetch = jest.fn();
    const mockAddCart = jest.fn();
    beforeEach(() => {
        const initialState = {
            id: 1,
            name: "novel",
            price: 15,
            shortDescription: "best book of the year",
            description: "a completed story of mankind"
        };
        wrapper = mount(
            <MemoryRouter><ItemDetail item={initialState}
                                      fetchItem={mockFetch}
                                      addToCart={mockAddCart}
                                      match={{params: {id: 1}}} /></MemoryRouter>
        );
    });

    it("should display product detail correctly", ()=> {
        const names = wrapper.find("#name");
        expect(names.length).toBe(1);
        expect(names.get(0).props.children).toBe("novel");

        const descriptions = wrapper.find("#description");
        expect(descriptions.length).toBe(1);
        expect(descriptions.get(0).props.children).toBe("a completed story of mankind");

        const prices = wrapper.find("#price");
        expect(prices.length).toBe(1);
        expect(prices.get(0).props.children.join('')).toBe("15$");

        const buttons = wrapper.find("button");
        expect(buttons.length).toBe(2);
        expect(buttons.get(0).props.children).toBe("Add to cart");
        expect(buttons.get(1).props.children).toBe("Back to products list");

        wrapper.unmount();
    });

    it("should call the addToCart function when Add To Cart button is clicked", () => {
        wrapper.find("#AddToCart").simulate(
            'click'
        );
        expect(mockAddCart.mock.calls.length).toBe(1);
        wrapper.unmount();
    });


    it("should call the fetchItem function when the component is mount", () => {
        expect(mockFetch.mock.calls.length).toBe(3);
        wrapper.unmount();
    })

});