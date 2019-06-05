import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import history from "../../history";
import {fetchItem, addToCart} from "../../actions";

export class ItemDetail extends React.Component{


    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchItem(id);
    }

    addToCartOnClick = () => {
        const id = this.props.match.params.id;
        this.props.addToCart(id);
    };


    render() {
        if (!this.props.item) {
            return (
                <div>Loading</div>
            );
        }
        return (
            <div className="jumbotron container" style={{margin: '8% auto'}}>
                <h1 id="name" className="display-4">{this.props.item.name}</h1>
                <h5 id="price" className="lead">{this.props.item.price}$</h5>
                <p id="description" className="my-4">{this.props.item.description}</p>
                <div style={{display:"flex", 'justifyContent': 'center', width:'330px', float:'right'}}>
                    <button id="AddToCart" className="btn btn-warning" type="button" style={{marginRight: '20px'}} onClick={this.addToCartOnClick}>Add to cart</button>
                    <button id="BackToProducts" className="btn btn-info" type="button" onClick={() => history.push('/items')}>Back to products list</button>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        item: state.items[id]
    }
};

export default connect (mapStateToProps, {fetchItem, addToCart}) (ItemDetail) ;