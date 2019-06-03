import React from "react";
import {create} from "react-test-renderer";
import Header from "../../components/header";

describe("test header", ()=> {
    it("should display correct button", () => {
        const component = create(<Header/>);
        const instance = component.getInstance();
        const root = instance.root();
        const ListOfLink = instance.findAllByType('Link');

    });



});