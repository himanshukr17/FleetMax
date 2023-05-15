
const initialState = {
    deliveryDetails: [],
    fastagDetails: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DELIVERY_DETAILS':
            return { ...state, deliveryDetails: action.payload }
        case 'FASTAG_DETAILS':
            return { ...state, fastagDetails: action.payload }

        default:
            return state
    }

}