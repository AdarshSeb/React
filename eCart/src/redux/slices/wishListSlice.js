import {createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:'wishList',
    initialState:[],
    reducers :{
        addToWishList:(state,productByComponentAction)=>{
            state.push(productByComponentAction.payload)
        },

        removeWishlistItem : (state,productByComponentAction)=>{
            state.filter(item=>item.id!=productByComponentAction.payload)
        }
    }
})

export const {addToWishList,removeWishlistItem} = wishListSlice.actions
export default wishListSlice.reducer