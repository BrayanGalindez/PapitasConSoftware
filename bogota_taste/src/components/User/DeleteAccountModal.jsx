import "../../styles/User/DeleteAccountModal.css"
import React from 'react';

const DeleteAccountModal = ({ handleConfirmDelete, handleCancelDelete }) => {
  return (
    <div className="delete-account-modal">
      <h3>Eliminar cuenta</h3>
      <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
      <p>Todos los datos asociados con tu cuenta se perderán de forma permanente.</p>
      <div className="modal-buttons">
        <button className="delete-account-confirm-button" onClick={handleConfirmDelete}>Confirmar</button>
        <button className="delete-account-cancel-button" onClick={handleCancelDelete}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteAccountModal;