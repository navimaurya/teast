import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/productItem';
import CartSidebar from '../cartSideBar';

const Home = ({ getProducts, products }) => {
    useEffect(() => {
        if (!products?.length) {
            getProducts();
        }
    }, [])
    return (
        <>
            <div className='col-6'>
                {
                    products.map((item, i) => (
                        <ProductItem key={i} item={item} />
                    ))
                }
            </div>
            <div className='col-3'>
                <CartSidebar />
            </div>
        </>
    )
}

const MapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch({ type: "ADD_TO_PRODUCT_START" })
})

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, MapDispatchToProps)(Home);
