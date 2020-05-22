import { productList } from '../product';

const randomProduct = () => {
    let newProduct = productList()
    for(let i = newProduct.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i )
        const temp = newProduct[i]
        newProduct[i] = newProduct[j]
        newProduct[j] = temp
    }
    return newProduct
}

const bestSeller = () => {
    let rel = []
    productList().map( (val, index) => (
        index < 4 && val.tags.includes('best-seller')) && rel.push(val)
    )
    return rel
}

const initialState = {
    allProduct: productList(),
    feature: randomProduct(),
    best: bestSeller(),
    total: 0,
    cart: [],
    option: 'all'
}

const cartHandler = (cart, prod, type) => {
    type === 'add' && cart.find(val => val.product.id === prod.product.id) ? cart = checkCart(cart, prod) : cart.push(prod) 
    type === 'sub' && ( cart = cart.filter(val => val.product.id !== prod.product.id) )
    return cart
}

const checkCart = (cart, prod) => {
    let index = cart.findIndex(val => val.product.id === prod.product.id)
    let no = parseInt(cart[index].Qty)
    cart[index].Qty = parseInt(prod.Qty) + no
    return cart
}

const calcTotal = (state) => {
    if(state) {
        return state.map( prod => { 
            return prod.product.price * prod.Qty })
       .reduce((prev, nxt) => { return prev + nxt }, 0)}
}

const prdReducer = ( state = initialState, action ) => {
    let act = action.product
    let newState = null
    switch ( action.type ) {
        case 'Addtocart':
            newState = { ...state, cart: cartHandler(state.cart, act, 'add') }
            newState['total'] = calcTotal(newState.cart)
            return newState
        case 'Removefromcart':
            newState = { ...state, cart: cartHandler(state.cart, act, 'sub') }
            newState['total'] = calcTotal(newState.cart)
            return newState
        case 'HydrateState':
            newState = { ...state, cart: act}
            newState['total'] = calcTotal(newState.cart)
            return newState
        case 'SetTotal':
            newState = { ...state, cart: act}
            newState['total'] = calcTotal(newState.cart)
            return newState
        case 'SetOption':
            newState = { ...state, option: act}
            return newState
        default:
            return state;
    }
}

export default prdReducer;