import React, { Component } from 'react'
import { CheckoutSummary } from '../../components/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

export default class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            beacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if(param[0] === 'price') {
                price = +param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({
            ingredients,
            totalPrice: price
        });
    }

    onCanceled = () => {
        this.props.history.goBack();
    }

    onContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} onCanceled={this.onCanceled} onContinue={this.onContinue} />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => ( <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>) } />
            </div>
        )
    }
}
