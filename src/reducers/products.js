import types from '../actions/types'

const initialState = {
  products: []
}

function productsReducer(state, action) {
  if(typeof state === 'undefined') {
    return Object.assign({}, initialState)
  }
  switch (action.type) {
    case types.PRODUCT_SELECTED:
      return Object.assign({}, state, {
        products: [...state.products, action.product]
      })
    case types.PRODUCT_DESELECTED:
      const products = [...state.products]
      const index = products.findIndex((product) => {
        return product.name === action.product.name
      })
      products.splice(index, 1)
      return Object.assign({}, state, {
        products
      })
    default:
      return state
  }
}


export default productsReducer;
