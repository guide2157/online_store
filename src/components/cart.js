import React from "react";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";

import {connect} from "react-redux";
import Header from "./header";
import {checkOut, deleteAll, deleteItem, deleteItemByOne} from "./../actions/index";

const Banner = styled.div`
    border: 2px solid #e67e22;
    color: #888888;
    border-radius: 5px;
    font-size: 100%;
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
    padding: 14px 10px;
    height: 60px;
`;

const Item = styled.div`
    width: 100%;
    margin: 20px auto;
    padding: 10px;
    background-color: #888888;
    border-radius: 5px;
    
    h4,p {
        text-decoration: none;
        display: inline-block;
        width: 20%;
        line-height: 150%;
        color: whitesmoke;
    }
    

    p{
        text-align: center;
        font-size: 80%;   
    }
    
    h4:first-of-type {
        padding-left: 40px;
    }
    
    h4:last-child {
        padding-right: 40px;
    }
    
    button{
        display: "inline-block";
        background-color: #888888;
    }
   
`;

export class Cart extends React.Component {

    renderEachItem() {
        return this.props.items.map(item => {
            let totalPrice = item.num * item.price;
            return (
                <Item key={item.id}>
                    <Link to={`/items/${item.id}`} >
                        <h4>{item.name}</h4>
                    </Link>
                    <h4 >{item.num} pkg</h4>
                    <h4>{totalPrice}$</h4>
                    <button className="btn btn-back" onClick={()=>this.props.deleteItemByOne(item.id)}>Get one out</button>
                    <button className="btn btn-back" onClick={()=>this.props.deleteItem(item.id)}>Delete item</button>
                </Item>
            );
        });
    }

    sum(obj) {
        let sum = 0;
        for( let elem in obj ) {
            if( obj.hasOwnProperty( elem ) ) {
                sum += obj[elem].price * obj[elem].num;
            }
        }
        return sum;
    }

    renderAllItems() {
        if (this.props.items.length === 0) {
            return (
                <div className="row">
                    <h4 style={{textAlign: 'center', marginTop: '20px', fontWeight: 300}}>Your cart is empty!</h4>
                </div>
            );
        } else {
            console.log(this.props.items);
            const totalPrice = this.sum(this.props.items);
            return (
                <div className="row">
                    {this.renderEachItem()}
                    <h4 style={{width:'100%', textAlign:"right"}}>Total : {totalPrice}$</h4>
                    <button className="btn btn-add-cart right" onClick={this.props.checkOut}>Check out</button>
                    <button className="btn btn-add-cart right" onClick={this.props.deleteAll}>Delete all items</button>
                </div>
            );
        }
    }


    render() {
        return (
            <section className="section-cart">
                <Header url={process.env.PUBLIC_URL + "/images/logoBlack.png"}/>
                <Banner className="row">
                    Your cart
                </Banner>
                <div className="row">
                    {this.renderAllItems()}
                </div>
            </section>
        );
    }

}

const mapStateToProps = (state) => {
    return {items: Object.values(state.carts)};
};

export default connect(mapStateToProps, {checkOut, deleteItemByOne, deleteItem, deleteAll})(Cart);