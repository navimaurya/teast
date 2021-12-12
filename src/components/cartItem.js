import React from 'react'
import { connect } from 'react-redux';

const CartItem = ({ item }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            {/* <div className='p-2'> 
                <img style={{ width: '50px ' }} src={item.image} alt='imgae' />
            </div> */}
            <div className='p-2'> 
                <h5>{item.title}</h5>
                <p>${item.price}</p>
            </div>
            <div>
                <button className='btn border' >Remove</button>
            </div>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     addToCart : (item)=>dispatch({type:"ADD_TO_CART", payload: item})
// })

// export default connect(null, mapDispatchToProps)(CartItem);
export default CartItem;