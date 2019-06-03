import React from "react";
import {Link} from "react-router-dom";


export default class Header extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-toggleable-md navbar-expand-md navbar-light bg-light">
                <Link className="navbar-brand" to={`/`}>Store</Link>
                <div className="collapse navbar-collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={`/`} >Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/items`}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/about`} >About us</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/`}>Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};