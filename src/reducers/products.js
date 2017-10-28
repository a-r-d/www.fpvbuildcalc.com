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
    case type.PRODUCT_DESELECTED:
      // TODO: actually remove the product here.
      return state
    default:
      return state
  }
}


export default productsReducer;
