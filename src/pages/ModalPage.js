import React from 'react';
import Modal from '../components/Modal';

function ModalPage() {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Modal Page</h1>
      <button onClick={handleShowModal}>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default ModalPage;
