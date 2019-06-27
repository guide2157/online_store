import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <nav className="nav-bar">
                <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo"/>
                <div className="nav-links">
                    <ul>
                        <li className="nav-link">
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link to={`/items`}>Products</Link>
                        </li>
                        <li className="nav-link">
                            <Link to={`/about`}>About us</Link>
                        </li>
                        <li className="nav-link">
                            <Link to={`/`}>Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};