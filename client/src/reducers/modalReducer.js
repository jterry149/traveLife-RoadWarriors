import ModalActions from '../actions/modalActions';

// Set the initial state
const initialState = {
    modalType: null,
    modalProps: {}
}

// Export the state
export default (state = initialState, action) => {
    switch (action.type) {
        case ModalActions.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case ModalActions.HIDE_MODAL:
            return initialState
        default:
            return state
    }
}