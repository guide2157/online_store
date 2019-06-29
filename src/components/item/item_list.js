import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {fetchItems} from "../../actions";
import Header from "../header";

export class ItemList extends React.Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    renderList() {
        return this.props.items.map(item => {
            return (
                <Link id="name" to={`/items/${item.id}`} key={item.id}>
                    <div className="col span-1-of-3 card">
                        <h3>{item.name}</h3>
                        <p id="description">{item.shortDescription}</p>
                        <h4 id="price">{item.price}$</h4>
                    </div>
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="item_list">
                <Header url={process.env.PUBLIC_URL + "/images/logoBlack.png"}/>
                <div className="row item_list_cards">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: Object.values(state.items)
    };
};

export default connect(mapStateToProps, {fetchItems})(ItemList);

