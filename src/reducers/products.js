import types from '../actions/types'

import Frames from '../components/products/frames'
import Fcs from '../components/products/fcs'
import Motors from '../components/products/motors'
import Esc from '../components/products/esc'
import Cams from '../components/products/camera'
import Vtx from '../components/products/vtx'
import Props from '../components/products/props'
import Pdb from '../components/products/pdb'
import Antenna from '../components/products/antenna'
import Receiver from '../components/products/receiver'

const initialState = {
  products: []
}

const presetMasterList = {
  'uav_futures_100': [
    'Lisam LS-210',
    'SP Racing F3',
    '4X Racerstar 2205 2300KV',
    'Racerstar RS20Ax4 20A 4 in 1',
    "600TVL 2.8mm Lens 1/3\" Super Had II CCD",
    "Eachine TX526 5.8G 40CH 25MW/200MW/600MW",
    "Realacc 5.8G 5dBi Pagoda",
    "Flysky 2.4G 6CH FS-iA6B",
    "Matek Systems PDB-XT60"
  ],
  '30a_alien': [
    'ImpluseRC Alien',
    'SP Racing F3 with OSD',
    'Hypetrain 2306 2450kv Motor',
    'Speedix ES30A HV',
    "RunCam Swift 2 1/3 CCD 600TVL",
    "Eachine TX526 5.8G 40CH 25MW/200MW/600MW",
    "Realacc 5.8G 5dBi Pagoda",
    "FrSky XSR 2.4GHz 16CH"
  ],
  '30a_cheapo': [
    'Martian II 220',
    'SP Racing F3',
    'Emax RS2205S 2600KV',
    'Makerfire 4pcs 30A',
    "RunCam Swift 2 1/3 CCD 600TVL",
    "Eachine TX526 5.8G 40CH 25MW/200MW/600MW",
    "Realacc 5.8G 5dBi Pagoda",
    "FrSky XSR 2.4GHz 16CH"
  ],
  'liftoff_obsession': [
    'DQuad Obsession V2 210',
    'Hypetrain 2306 2450kv Motor',
    'Speedix ES30A HV',
    'Betaflight Omnibus F3 Pro with OSD',
    "RunCam Swift 2 1/3 CCD 600TVL",
    "ImmersionRC 600MW 5.8 GHz",
    "Realacc 5.8G 5dBi Pagoda",
    "FrSky XSR 2.4GHz 16CH",
    "XSoul Tri-Blades 5040 Propeller",
    "Matek Systems PDB-XT60"
  ],
  'mr_steele_alien': [
    "MR STEELE EDITION 5\" ALIEN FRAME",
    "Flyduino KISS",
    "Flyduino - KISS ESC 2-5S 24A",
    "TBS MR STEELE 2345KV SILK",
    "RunCam Swift2 Rotor Riot",
    "Team BlackSheep TBS UNIFY PRO 800 mw",
    "Team BlackSheep TBS TRIUMPH",
    "HQ Prop DP 5x4.3x3 V1S Tri-Blade",
    "FrSky X4RSB 3/16 Channel"
  ]
}

const allProducts = [Frames, Fcs, Motors, Esc, Cams, Vtx, Props, Pdb, Antenna, Receiver]

function selectForPreset(presetName) {
  const productList = presetMasterList[ presetName ]
  const productsSelected = []
  allProducts.forEach((productType) => {
    Object.keys(productType).forEach((productKey) => {
      const product = productType[ productKey ]
      if(productList.indexOf(product.name) !== -1) {
        productsSelected.push(product)
      }
    })
  })

  return productsSelected
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
    case types.PRODUCT_PRESET:
      const selected = selectForPreset(action.name)
      return Object.assign({}, state, {
        products: selected
      })
    case types.PRODUCT_REMOVE_ALL:
      return Object.assign({}, state, { products: [] })
    default:
      return state
  }
}


export default productsReducer;
