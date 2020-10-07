import Axios from '../../Axios-Order'
import React, { useState, useEffect } from 'react'
import Order from '../../Components/UI/Order/Order'
import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/Modal';



const Orders = (props) => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);



    useEffect(() => {

        setIsLoading({
            ...isLoading,
            isLoading: true
        });
        Axios.get('/orders.json').then(res => {
            let fetchOrder = [];
            for (const key in res.data) {
                fetchOrder.push({ id: key, ...res.data[key] });
            }
            setOrders(fetchOrder);
            setIsLoading(false);
            setError(false);
        })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            })
    }, []);

    const closeModalHandler = () => {
        setError({
            ...error,
            error: null
        });

        props.history.replace('/');
    }

    return (
        <div>
            {
                error ? (
                    <Modal
                        show={error}
                        modalClosed={closeModalHandler}
                    > {error.message}</Modal>
                ) : isLoading ? <Spinner /> : orders.length === 0 ?
                    <p style={{ fontWeight: 'bold', textAlign: 'center' }}>NO ORDER FOUND</p>
                    : (
                        orders.map(order => (
                            <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                        ))
                    )
            }
        </div>
    )

}

// class Orders extends Component {

//     state = {
//         orders: [],
//         isLoading: false,
//         error: false
//     }
//     componentDidMount() {
//         this.setState({ isLoading: true });

//         // Axios.get('/orders')
//         Axios.get('/orders.json')
//             .then(res => {
//                 let fetchOrder = [];
//                 for (const key in res.data) {

//                     fetchOrder.push({ id: key, ...res.data[key] });
//                 }
//                 this.setState({ orders: fetchOrder, isLoading: false, error: null });

//             }).catch(err => {
//                 this.setState({ isLoading: false, error: err });
//             })
//     }

//     closeModalHandler = () => {
//         this.setState({ error: null });
//         this.props.history.replace('/');
//     }


//     render() {
//         return (
//             <div>
//                 {
//                     this.state.error ? (
//                         <Modal
//                             show={this.state.error}
//                             modalClosed={this.closeModalHandler}
//                         > {this.state.error.message}</Modal>
//                     ) : this.state.isLoading ? <Spinner /> : this.state.orders.length === 0 ?
//                         <p style={{ fontWeight: 'bold', textAlign: 'center' }}>NO ORDER FOUND</p>
//                         : (
//                             this.state.orders.map(order => (
//                                 <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
//                             ))
//                         )
//                 }
//             </div>
//         )
//     }
// }

export default Orders;
