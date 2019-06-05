import React from "react";
import {Link} from "react-router-dom";
import {shallow} from "enzyme";
import Header from "../../components/header";
import '../../setupTest';

describe("test header", ()=> {

    it("should display correct button", () => {
        const component = shallow(<Header/>);
        const links = component.find('Link');
        const expectedHref = [`/`, `/`, `/items`, `/about`, `/`];
        const expectedTitle = ['Store','Home', 'Products', 'About us', 'Cart'];
        for (let i = 0; i < 5; i ++) {
            expect(links.get(i).props.children).toBe(expectedTitle[i]);
            expect(links.get(i).props.to).toBe(expectedHref[i]);
        }
    });


});