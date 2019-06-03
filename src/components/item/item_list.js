import React from "react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import {fetchItems} from "../../actions";

export class ItemList extends React.Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    renderList() {
        return this.props.items.map(item => {
            return (
                <div className="card" key={item.id} style={{width: "200px", height: "150px"}}>
                    <div className="card-body text-center" style={{ margin:"30px auto"}}>
                        <Link to={`/items/${item.id}`} className="card-title">
                            {item.name}
                        </Link>
                        <div className="card-text">{item.shortDescription}</div>
                        <div className="card-text">{item.price}$</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container" style={{display: "grid", "grid-gap": "0 5px",
                "grid-auto-rows": "10px", margin:"2% auto"}}>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: Object.values(state.items)
    };
};

export default connect(mapStateToProps, {fetchItems}) (ItemList);

