import React, { Component, Fragment } from 'react'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'
import './index.css'

import PropTypes from 'prop-types'

Modal.setAppElement('#root')
class CustomModal extends Component {
    constructor(props) {
        super(props)

        this.getApplicationNode = this.getApplicationNode.bind(this);
    }

    getApplicationNode() {
        return document.getElementById('root');
    }

    createModal() {
        const modal = <Modal
            isOpen={this.props.isOpenModal}
            onRequestClose={this.props.closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="modal-content-body">
                <div className='modal-pop-up_close' onClick={this.props.closeModal}><FaTimes /></div>
                {this.props.children}
            </div>
            <div className='modal-pop-up__filler' onClick={this.props.closeModal} />
        </Modal>

        return (
            <Fragment>
                {modal}
            </Fragment>
        );
    }

    render() {
        return this.createModal();
    }
}

CustomModal.propTypes = {
    // Флаг, открыто ли модальное окно
    isOpenModal: PropTypes.bool.isRequired,
    // Функция для закрытия модального окна
    closeModal: PropTypes.func.isRequired
}

export default CustomModal