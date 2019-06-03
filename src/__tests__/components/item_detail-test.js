import React from "react";
import {create} from "react-test-renderer";
import axios from "axios";
import ItemDetail from "../../components/item/item_detail";

jest.mock("axios");

describe("test item detail component", () => {
        it("should display product detail correctly", async () => {
            const response = {
                data: {
                    id: 1,
                    name: "novel",
                    price: 15,
                    shortDescription: "best book of the year",
                    description: "a completed story of mankind"
                }
            };
            axios.get.mockResolvedValue(response);
            const component = create(<ItemDetail />);
            const instance = component.getInstance();
            await instance.componentDidMount();
            const root = component.root;
            const header = root.findByType("h2");
            expect(header).toEqual(<h2>novel</h2>);
            const price = root.findByType("h3");
            expect(price).toEqual(<h3>15$</h3>);
            const description = root.findByType("p");
            expect(description).toEqual(<p>a completed story of mankind</p>);
        });

        it("should display information not found if axios fails", async () => {
            const response = {};
            axios.get.mockResolvedValue(response);
            const component = create(<ItemDetail/>);
            const instance = component.getInstance();
            await instance.componentDidMount();
            const root = component.root;
            const header = root.findByType("h2");
            expect(header).toEqual(<h2>Information not found</h2>);
        });

        it("should change the description on add to cart button", async () => {
            const response = {
                data: {
                    id: 1,
                    name: "novel",
                    price: 15,
                    shortDescription: "best book of the year",
                    description: "a completed story of mankind"
                }
            };
            axios.get.mockResolvedValue(response);
            const component = create(<ItemDetail/>);
            const instance = component.root;
            await instance.componentDidMount();
            const root = component.root;
            const button = root.findByType("button");
            expect(button.props.children).toBe("Add to cart");
            button.props.onClick();
            expect(button.props.children).toBe("Added to cart");
        });
    }
);