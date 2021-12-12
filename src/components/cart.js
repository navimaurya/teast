import React, { Component } from 'react'
import './Cart.css'
import Image from './unnamed.png'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div>
                <div className='w-100 bgcart'>
                    <div className="row">
                        <div className="col m-2 col-md-2">
                            <img src={Image} className="img" alt="..."></img>
                        </div>
                        <div className="col col-md-8">
                            <p className='h5 text-white pt-2'>Ptopia</p>
                            <p className='text-white'> 11th cross, Indira naga, Adyar -20 Chennai, Tamil Nadu, India, 600020</p>
                        </div>
                    </div>

                </div>
                <div aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </div>
                <div className='card'>
                    <div className="card-body">
                        <h5 className="card-title">Review your order</h5>
                        <hr />
                        <div className='row'>
                            <div className='col'>
                                <img src={Image} className="imgS" alt="..."></img>
                            </div>
                            <div className='col'>
                                <p>Drool chicken and egg adult dog food</p>
                                <br />
                                <p>$ 600</p>
                            </div>
                            <div className='col'>
                                <div className='d-flex flex-row m-1 p-2'>
                                    <div className='m-1'> <button className='btn-danger btn-number' onClick={this.DecreaseItem}>-</button></div>
                                    <div className='m-1'>{this.state.show ? <p>{this.state.clicks}</p> : ''}</div>
                                    <div className='m-1'><button className='btn-danger btn-number' onClick={this.IncrementItem}>+</button></div>
                                </div>
                            </div>
                            <div className='col'>
                                <p>$ 0</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Cart;
