import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CreateProduct from "./components/CreateProduct";


class App extends Component {

    state = {
        loaded: null,
        products: [],
        screen: 'Home'
    };

    // Get all products when the app is initialized
    componentWillMount() {
        const url = 'https://rs-node-cms.herokuapp.com/pages';
        axios.get(
            url
        ).then(
            response => {
                this.setState( { loaded: true, products: response.data } );
            }
        ).catch(
            err => {
                console.log('Something went wrong with the API call', err);
            }
        )

    }

    // Helper method to switch views
    renderViews() {
        if (this.state.loaded) {
            return(
                <div>
                    <h1>Data loaded</h1>
                    <ul>
                        {
                            this.state.products.map( (product, i) => {
                                return(
                                    <li key={i}>{ product.title }</li>
                                )
                            })
                        }
                    </ul>
                </div>

            )
        }
        return(
            <div className='loader'>
                <img src={ require('./imgs/831.png') } alt="Loading"/>
            </div>
        );
    }

    renderScreens() {
        if (this.state.screen === 'Home') {
            return(
                ''
            );
        }
        return <CreateProduct />;
    }

    render() {
        return(
            <div>
                { this.renderViews() }
                <button onClick={ () => this.setState( { screen: 'cp' } ) }>Some button</button>
                { this.renderScreens() }
            </div>
        );
    }
}

export default App;
