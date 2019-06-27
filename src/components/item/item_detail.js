import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchItem, addToCart} from "../../actions";
import Header from "../header";

export class ItemDetail extends React.Component {


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
            <div className="item_detail">
                <Header/>
                <section className="detail">
                    <div className="row">
                        <h2 id="name">{this.props.item.name}</h2>
                        <h4 id="price">{this.props.item.price}$</h4>
                        <p id="description">{this.props.item.description}</p>
                        <div className="buttons">
                            <button id="AddToCart" className="btn btn-add-cart"
                                    onClick={this.addToCartOnClick}>Add to cart
                            </button>
                            <Link id="BackToProducts" className="btn btn-back" to={'/items'}>Back to products
                                list</Link>
                        </div>
                    </div>
                </section>
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

export default connect(mapStateToProps, {fetchItem, addToCart})(ItemDetail);