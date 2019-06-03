import React from "react";
import {Link} from "react-router-dom";
// import axios from "../apis/backend";

export default class Home extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="card text-white" style={{overflow: 'hidden', 'height': '500px', 'textAlign': 'right'}}>
                    <img
                        src="https://previews.123rf.com/images/packzerolism/packzerolism1612/packzerolism161200138/69661557-zoom-shot-of-green-trees-plant-to-a-fence-sensitive-focus-.jpg"
                        className="card-img" alt="No image founded"/>
                    <div className="card-img-overlay" style={{color: 'black'}}>
                        <h1 className="card-title">Tane Inc.</h1>
                        <h3 className="card-text">Best seeds for your garden.</h3>
                    </div>
                </div>
                <div style={{'margin': '2% auto', width: "1000px", display: 'flex', 'justify-content': 'center'}}>
                    <div className="col-sm-3" style={{'margin-right': '10px'}}>
                        <Link to={`/items`} className="jumbotron btn btn-light" style={{width: '250px'}}>
                            <h5>Products</h5>
                            <p>See our finest products.</p>
                        </Link>
                    </div>
                    <div className="col-sm-3" style={{'margin-left': '10px'}}>
                        <Link to={"/about"} className="btn btn-light jumbotron" style={{width: '250px'}}>
                            <h5>About us</h5>
                            <p>Find out more out us.</p>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }
}