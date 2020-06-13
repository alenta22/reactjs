import React, { Component } from 'react'
import Child1 from './Child1';

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: 15
        }
    }

    beliProduk = (jumlah) => {
        this.setState({
            stock: this.state.stock - jumlah
        })
    }

    render() {
        return (
            <Child1 
            stock={this.state.stock}
            fungsi={this.beliProduk.bind(this)}
            ></Child1>
        )
    }
}

export default Parent