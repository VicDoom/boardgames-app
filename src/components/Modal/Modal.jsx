import './Modal.styles.scss'
import {useEffect} from "react";

export const Modal = ({open, onClose, children}) => {
    return (
        <div className={`modal-message ${open && 'modal-message--visible'}`}>
            <div className="modal-message__layout" onClick={onClose} />
            <div className="modal-message__content">
                {children}
            </div>
        </div>
    )
}