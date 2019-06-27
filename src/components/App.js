import React from "react";
import {Router, Route} from "react-router-dom";

import Footer from "./footer";
import ItemLists from "./item/item_list";
import ItemDetail from "./item/item_detail";
import Home from "./home";
import About from "./about";

import history from "../history"


const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/items" exact component={ItemLists}/>
                    <Route path="/items/:id" exact component={ItemDetail}/>
                </div>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;
