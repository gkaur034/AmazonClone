export const initialState = {
    basket: [],
    user: null,
};

// Selector

export const getBasketTotal = ({ basket }) =>
 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.title === action.title
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index,1);
            } else {
                console.warn('Cant remove this product as it is not in the basket!')
            }

            return {
                ...state,
                basket: newBasket
            };

            case 'SET_USER':
                return {
                    ...state,
                    user: action.user
                }

        default:
            return state;
    }
};

export default reducer;