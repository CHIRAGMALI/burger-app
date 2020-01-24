import React, { Component } from 'react'
import { Order } from '../../components/Order/Order'
import axios from '../../components/axios/axios-order'
import { withErrorHandler } from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {

    state={
        orders: [],
        loading: false
    }

    componentDidMount() {
        axios.get('/order.json')
            .then(res => {
                const orders = [];
                for(let key in res.data) {
                    orders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({
                    loading: true,
                    orders
                });
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.orders.map(order => <Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />)
                }
            </div>
        )
    }
}
export default withErrorHandler(Orders, axios);
