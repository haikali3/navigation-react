import React from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = React.useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Modal</Button>
      {showModal && <Modal />}
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
