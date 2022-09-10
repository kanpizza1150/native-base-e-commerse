import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  categories: [],
  activeCategory: 'All',
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.list = action.payload
    },
    setAllCategories: (state, action) => {
      state.categories = ['All', ...action.payload]
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
  },
})

export const { setAllProducts, setActiveCategory, setAllCategories } =
  productsSlice.actions
export const selectProducts = (state) => state.products.list
export const selectCategory = (state) => state.products.categories
export const selectActiveCategory = (state) => state.products.activeCategory

export default productsSlice.reducer
