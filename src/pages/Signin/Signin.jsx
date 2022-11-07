import { useState } from 'react';
import Modal from '../../layout/Modal/Modal';

function Signin() {
    const [showModal, setShowModal] = useState();

    const handleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <form action="">
                <div className="custom-input">
                    <label htmlFor="name">
                        <input
                            type="text"
                            className="input"
                            name="name"
                            id="name"
                            placeholder="Name"
                        />
                        <span className="label">Name</span>
                    </label>
                </div>
            </form>
            <button type="button" className="btn primary" onClick={handleModal}>
                Sign in
            </button>
            <Modal show={showModal} onClose={handleModal}>
                <div className="content">Esto es una prueba de que si funciona</div>
            </Modal>
        </div>
    );
}

export default Signin;
