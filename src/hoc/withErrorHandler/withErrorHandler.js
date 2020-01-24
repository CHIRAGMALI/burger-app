import React from 'react'
import Modal from '../../components/UI/Modal/Modal';

export const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }
        componentDidMount() {
            this.reqIntercepter = axios.interceptors.request.use(req => {
                this.setState({
                    error: null,
                });
                return req
            })
            this.reqIntercepter = axios.interceptors.response.use(res => res, err => {
                this.setState({
                    error: err
                })
            })
        }

        componentWillUnmount() {
            if(this.reqIntercepter && (this.reqIntercepter.request || this.reqIntercepter.response)) {
                this.reqIntercepter.request.eject(this.reqIntercepter);
                this.reqIntercepter.response.eject(this.reqIntercepter);    
            }
        }

        errReadHandle = () => {
            this.setState({
                error: null
            })
        }

        render() {
            return (
                <React.Fragment>
                    <Modal show={this.state.error} modalClosed={this.errReadHandle}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    }
}
