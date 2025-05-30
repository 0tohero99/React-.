import React, { Component } from 'react';
import Home from './home';
import Header from "./header_class_comp"
// import Header from './header';
import Footer from './footer';
import ProductsDisplay from "./products"
import JSON from "./data.json"

class App extends Component {
    constructor() {
        super()
        this.state = {
            Productsdata: JSON
        }
    }

    render() {
        return (
            <div>
                <Header />
                <ProductsDisplay Products={this.state.Productsdata} />
                <Footer month="may" year="2025 " />
            </div>
        )
    }
}

export default App;