import types from '../actions/types'

const initialState = {
  products: []
}

function productsReducer(state, action) {
  if(typeof state === 'undefined') {
    return Object.assign({}, initialState)
  }
  console.log('Got reducer call', state, action)
  switch (action.type) {
    case types.PRODUCT_SELECTED:
      return Object.assign({}, state, {
        products: [...state.products, action.product]
      })
    case types.PRODUCT_DESELECTED:
      // array.splice(index, 1);
      // TODO: actually remove the product here.
      return state
    default:
      return state
  }
}


export default productsReducer;
