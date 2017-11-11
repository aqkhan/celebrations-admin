import React, { Component } from 'react';
import axios from 'axios';

class CreateProduct extends Component {
    // Method to post data

    componentWillMount() {
        const url = 'https://rs-node-cms.herokuapp.com/pages';
        axios.post(
            url,
            {
                title: "Test product",
                content: "1900"
            }
        ).then(
            response => console.log("API returned: ", response)
        ).catch(
            err => console.log("Erroooor: ", err)
        );
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Product title"/>
                <input type="text" placeholder="Product price"/>
                <input type="text" placeholder="Product stock"/>
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
            </div>
        );
    }

}

export default CreateProduct;