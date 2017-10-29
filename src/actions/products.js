import types from './types'

function productSelected(product) {
  return {
    type: types.PRODUCT_SELECTED,
    product: product
  }
}

function productDeSelected(product) {
  return {
    type: types.PRODUCT_DESELECTED,
    product: product
  }
}

function selectPreset(name) {
  return {
    type: types.PRODUCT_PRESET,
    name: name
  }
}

function removeAllItems() {
  return {
    type: types.PRODUCT_REMOVE_ALL
  }
}

export default {
  productSelected,
  productDeSelected,
  selectPreset,
  removeAllItems
}
