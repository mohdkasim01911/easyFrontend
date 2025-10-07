import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_category = createAsyncThunk(
    'product/get_category',
    async (_, { fulfillWithValue }) => {
        try {
            const { data } = await api.get('/home/get_categorys')
            return fulfillWithValue(data);
        } catch (error) {
            console.log(error.response)
        }

    }
)

// end method

export const get_products = createAsyncThunk(
    'product/get_products',
    async (_, { fulfillWithValue }) => {
        try {
            const { data } = await api.get('/home/get_products')
            return fulfillWithValue(data);
        } catch (error) {
            console.log(error.response)
        }

    }
)

export const price_range_products = createAsyncThunk(
    'product/price_range_products',
    async (_, { fulfillWithValue }) => {
        try {
            const { data } = await api.get('/home/price-range-latest-product')
            return fulfillWithValue(data);
        } catch (error) {
            console.log(error.response)
        }

    }
)

// end method

export const homeReducer = createSlice({
    name: 'home',
    initialState: {
        categorys: [],
        products: [],
        latest_product: [],
        topRated_product: [],
        discount_product: [],
        priceRange : {
            low : 0,
            high : 100,
        },
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(get_category.fulfilled, (state, { payload }) => {
                state.categorys = payload.categorys
            })

            .addCase(get_products.fulfilled, (state, { payload }) => {
                state.products = payload.products;
                state.latest_product = payload.latest_product;
                state.topRated_product = payload.topRated_product;
                state.discount_product = payload.discount_product;
            })

            .addCase(price_range_products.fulfilled, (state, { payload }) => {
                state.latest_product = payload.latest_product;
                state.priceRange = payload.priceRange;
            })



    }
})

export default homeReducer.reducer