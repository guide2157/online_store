import React from "react";
import {Link} from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="section-footer">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                        <li><Link to={"/about"}>About us</Link></li>
                        <li><Link to={"/items"}>Products</Link></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-icons">
                        <li><a href="#"><i className="ion-social-facebook"/></a></li>
                        <li><a href="#"><i className="ion-social-twitter"/></a></li>
                        <li><a href="#"><i className="ion-social-instagram"/></a></li>
                    </ul>
                </div>
                <div className="row">
                    <p>
                        Copyright &copy; 2019 by TaneSeed. All rights reserved.
                    </p>
                </div>
            </footer>
        )
    }
}