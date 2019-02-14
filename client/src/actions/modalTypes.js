import ModalActions from './modalActions';

// Show the modal
export const showModal = ({modalProps, modalType}) => dispatch => {
    dispatch({
        type: ModalActions.SHOW_MODAL,
        modalProps,
        modalType
    });
}

// Hide the modal
export const hideModal = () => dispatch => {
    dispatch({
        type: ModalActions.HIDE_MODAL
    });
}