import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/productItem'

const Home = ({getProducts, products}) => {
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div>
            {
                products.map((item, i) => (
                    <ProductItem key={i} item={item}/>
                ))
            }
        </div>
    )
}

const MapDispatchToProps = (dispatch) =>({
    getProducts : () => dispatch({type : "ADD_TO_PRODUCT_START"})
})

const mapStateToProps = state =>({
    products : state.products
})

export default connect(mapStateToProps, MapDispatchToProps)(Home);
