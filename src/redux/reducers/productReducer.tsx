import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType, GetStateMethodType } from '../store';
import { RootState } from '@reduxjs/toolkit/query';
import axios from 'axios';
import { ProductDetailModelType } from '../../models/ProductDetailModelType';
import { httpClient } from '../../util/util';
export interface ProductModelType {
    id:               number;
    name:             string;
    alias:            string;
    price:            number;
    description:      string;
    size:             string;
    shortDescription: string;
    quantity:         number;
    deleted:          boolean;
    categories:       string;
    relatedProducts:  string;
    feature:          boolean;
    image:            string;
    imgLink:          null;
}
export interface ProductStateType {
    arrProduct: ProductModelType[],
    productDetail :  ProductDetailModelType | null
}


const initialState: ProductStateType = {
    arrProduct: [],
    productDetail: null
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrProductAction: (state:ProductStateType , action:PayloadAction<ProductModelType[]>) => {
        state.arrProduct = action.payload;
    },
    setProductDetailAction: (state:ProductStateType,action:PayloadAction<ProductDetailModelType>) => {
        state.productDetail = action.payload;

    }
  }
});
export const {setArrProductAction,setProductDetailAction} = productReducer.actions
export default productReducer.reducer
// action asycn call api get all product
export const getAllProductActionApi = () => {
    return async (dispatch:DispatchType,getState:GetStateMethodType ) => {
        //Call api
        const res = await httpClient.get('/api/Product');
        //Sau khi lấy dữ liệu từ api về thì dispatch action payload
        const action:PayloadAction<ProductModelType[]> = setArrProductAction(res.data.content);
        dispatch(action);
    }
}

export const getDetailProductActionApi = (id:string) => {

    return async(dispatch:DispatchType) => {
        const res = await httpClient.get(`/api/Product/getbyid?id=${id}`);
        //Sau khi có dữ liệu từ api dùng action payload đẩy lên redux
        const action: PayloadAction<ProductDetailModelType> = setProductDetailAction(res.data.content);
        dispatch(action);
    }
}

/*
    + Tạo giao diện detail
    + tạo state của productDetail
    + tạo actionPayload cho productStateState
    + tạo actionAsync cho getDetail api
    + bindingState tại detail Page
    + dispatch actionAsync tại detailPage

*/