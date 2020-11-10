
import React, { useEffect } from 'react'
import Order from '../../Components/UI/Order/Order'
import Modal from '../../Components/UI/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/actions/ordersAction'
import Spinner from '../../Components/UI/Spinner/Spinner';



const Orders = (props) => {


    const orders = useSelector(state => state.order.orders);
    const loading = useSelector(state => state.order.loading);
    const error = useSelector(state => state.order.error);


    const dispatch = useDispatch();

    useEffect(() => {
        // Axios.get('/orders')

        dispatch(getOrders());
        console.log(orders);

        //eslint-disable-next-line
    }, []);

    const closeModalHandler = () => {

        props.history.replace('/');
    }

    console.log(loading);
    return (
        <div>
            {
                error && (
                    <Modal
                        show={error}
                        modalClosed={closeModalHandler}
                    > {error.message}</Modal>
                )
            }
            {loading ? <Spinner /> :
                orders.length === 0 ?
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
