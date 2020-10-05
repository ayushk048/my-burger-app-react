import React, { Component } from 'react'
import Modal from '../../Components/UI/Modal/Modal'
import Auxilary from '../Auxilary/Auxilary'

export const withErrorHandler = (WrapingComponent, axios) => {
    return class extends Component {
        // state = {
        //     error: false
        // }

        error = null;


        // componentWillUnmount() {

        //     axios.interceptors.request.use(req => {
        //         // this.setState({ error: null });
        //         // this.errror = null;

        //         return req;
        //     }, err => err);
        //     axios.interceptors.response.use(res => res, error => {
        //         // this.setState({ error: error });
        //         // this.error = error
        //         console.log('aiya pochyu');
        //     });
        // }

        errorConfirmedHandler = () => {
            // this.setState({ error: null });
            // this.error = null;
        }

        render() {

            return (
                <Auxilary>
                    <Modal
                        show=''
                        modalClosed={this.errorConfirmedHandler} >

                    </Modal>
                    <WrapingComponent {...this.props} />
                </Auxilary>
            )
        }
    }
}
