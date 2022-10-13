(() => {
  const refs = {
    openModalButton: document.querySelector('[data-modal-franchise-open]'),
    closeModalButton: document.querySelector('[data-modal-franchise-close]'),
    modalButton: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalButton.addEventListener('click', toggleModal);
  refs.closeModalButton.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modalButton.classList.toggle('is-hidden');
  }
})();