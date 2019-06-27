import React from "react";
import Header from "./header";

export default class Home extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="main-page">
                <Header/>
                <div className="header">
                    <h2>Open the world</h2>
                    <h2>Embrace the nature </h2>
                </div>
            </div>
        );
    }
}