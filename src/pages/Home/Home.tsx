import { DispatchType, RootState } from '../../redux/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductModelType, getAllProductActionApi } from '../../redux/reducers/productReducer'
import ProductCard from '../../components/ProductCard'

type Props = {}

const Home = (props: Props) => {

    const {arrProduct}  = useSelector((state:RootState) => state.productReducer)
    const dispatch:DispatchType = useDispatch();
    
    const getAllProduct = async () => {
        //dispatch action thunk
        const actionAsync = getAllProductActionApi();
        dispatch(actionAsync);
    }
    useEffect(() => {
        getAllProduct()
    },[])
  return (
    <div className='container'>
        <h3>Product list</h3>
        <div className='row'>
        {arrProduct.map((item:ProductModelType,index:number)=>{
            return <div className='col-4 mt-2' key={index}>
                   <ProductCard product={item}/>
            </div> 
        })}
        </div>
    </div>
  )
}

export default Home