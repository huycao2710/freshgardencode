import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import ProductDetails from './ProductDetail'
import ProductDetailsComponent from './ProductDetailsComponent'

const ProductDetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div style={{ height: '126vh', width: '100%', background: '#efefef' }}>
            <div style={{ width: '1270px', height: '100%', margin: '0 auto' }}>
                <ProductDetailsComponent idProduct={id} />
            </div>

        </div>
    )
}

export default ProductDetailPage