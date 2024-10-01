import { createAsyncThunk, createSlice, buildCreateSlice } from "@reduxjs/toolkit";
import axios from "axios";
// First, create the thunk
export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
    //api call in js : using fetch/axios
    const result = await axios.get("https://dummyjson.com/product")
    //console.log(result);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        loading: false,
        error: ""
    },
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, apiResult) => {
            state.allProducts = apiResult.payload
            state.loading = false
            state.error = " "
        })
        builder.addCase(fetchAllProducts.pending, (state, apiResult) => {
            state.allProducts = []
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchAllProducts.rejected, (state, apiResult) => {
            state.allProducts = []
            state.loading = false
            state.error = "API call failed. Please try after sometime!!!"
        })
    }
});

export default productSlice.reducer