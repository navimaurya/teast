import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './components/cartItem'


const CartSidebar = ({ cartItems }) => {
    let total = 0;
    let totalItems = 0;
    return (
        <div>
            <div className='p-3 pb-0 d-flex' style={{ justifyContent: 'space-between' }}>
                <h5 className='d-inline'>My cart </h5>
                <button className='btn border'> Cleare</button>
            </div>
            <hr />
            {
                cartItems.map((item, i) => {
                    total += item.quantity * item.price;
                    totalItems += item.quantity
                    return (
                        <CartItem item={item} key={i} />
                    )
                })
            }
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5 className='py-2'>Item Total <sub>({totalItems})</sub></h5>
                <p>${total}</p>
            </div>
            <Link to='/cart' className='btn btn-warning w-100 py-2 text-white'>Check Out</Link>
        </div>
    )
}
const mapStatToProps = state => ({
    cartItems: state.cart
})

export default connect(mapStatToProps)(CartSidebar)

