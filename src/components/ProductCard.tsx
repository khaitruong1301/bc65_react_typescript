import React from 'react'
import { ProductModelType } from '../redux/reducers/productReducer'
import { NavLink } from 'react-router-dom'
import { RelatedProduct } from '../models/ProductDetailModelType'

type Props = {
    product: Partial<ProductModelType>
}

//Khi sử dụng thẻ <ProductCard product={} />
const ProductCard = (props: Props) => {
    let {product} = props;
  return (
    <div className='card'>
        <img src={product.image} alt='...' />
        <div className='card-body'>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <NavLink to={`/detail/${product.id}`} className={'btn btn-dark'}>
            View detail
            </NavLink>
        </div>
    </div>
  )
}
export default ProductCard

