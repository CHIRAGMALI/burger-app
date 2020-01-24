import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../components/axios/axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import { withErrorHandler } from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    beacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://burger-app-fac7e.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data
                })
            })
    }

    addIngredient = (type) => {
        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[type] = ingredients[type] + 1;
        const totalPrice = this.state.totalPrice + INGREDIENTS_PRICES[type]
        this.updatePurchaseState(ingredients);
        this.setState({
            ingredients,
            totalPrice
        });
    }

    removeIngredient = (type) => {
        const ingredients = {
            ...this.state.ingredients
        };
        if (ingredients[type] === 0) {
            return;
        }
        ingredients[type] = ingredients[type] - 1;
        const totalPrice = this.state.totalPrice - INGREDIENTS_PRICES[type]
        this.updatePurchaseState(ingredients);
        this.setState({
            ingredients,
            totalPrice
        });
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({
            purchasable: sum > 0
        })
    }

    purchasehandler = () => {
        this.setState({
            purchasing: !this.state.purchasing
        });
    }

    purchaseContinue = () => {
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }


        let orderSummary = null;

        let burger = <Spinner />
        if (this.state.ingredients) {
            burger = <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchasehandler}
                    purchasable={this.state.purchasable} />
            </React.Fragment>

            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                purchasehandler={this.purchasehandler}
                purchaseContinue={this.purchaseContinue}
                price={this.state.totalPrice} />

            if (this.state.loading) {
                orderSummary = <Spinner />
            }
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasehandler} >
                    {
                        orderSummary
                    }
                </Modal>
                {
                    burger
                }
            </Aux>
        )
    }
}
export default withErrorHandler(BurgerBuilder, axios)