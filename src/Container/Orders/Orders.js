import Axios from '../../Axios-Order'
import React, { Component } from 'react'
import Order from '../../Components/UI/Order/Order'
import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/Modal';

export class Orders extends Component {

    state = {
        orders: [],
        isLoading: false,
        error: false
    }
    componentDidMount() {
        this.setState({ isLoading: true });

        Axios.get('/orders.json')
            .then(res => {
                let fetchOrder = [];
                for (const key in res.data) {

                    fetchOrder.push({ id: key, ...res.data[key] });
                }
                this.setState({ orders: fetchOrder, isLoading: false, error: null });

            }).catch(err => {
                this.setState({ isLoading: false, error: err });
            })
    }

    closeModalHandler = () => {
        this.setState({ error: null });
        this.props.history.replace('/');
    }


    render() {
        return (
            <div>
                {
                    this.state.error ? (
                        <Modal
                            show={this.state.error}
                            modalClosed={this.closeModalHandler}
                        > {this.state.error.message}</Modal>
                    ) : this.state.isLoading ? <Spinner /> : this.state.orders.length === 0 ?
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>NO ORDER FOUND</p>
                        : (
                            this.state.orders.map(order => (
                                <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                            ))
                        )
                }
            </div>
        )
    }
}

export default Orders;
