import React from 'react'
import { connect } from 'react-redux'
import CartItem from './components/cartItem'

const CartSidebar = ({cartItems}) => {
    return (
        <div>
            <div className='p-3' style={{}}>
                <h5 className='d-inline'>My cart </h5>
                <p className=' d-inline'> ({cartItems.length} items) </p>
                <button className='btn border'> Cleare</button>
                <hr/>
            </div>
            {
                cartItems.map((item, i)=>(
                <CartItem item={item} key ={i}/>
                ))
            }
        </div>
    )
}
const mapStatToProps = state => ({
    cartItems : state.cart
})

export default connect(mapStatToProps)(CartSidebar)

