(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-location-open]'),
    closeModalBtn: document.querySelector('[data-modal-location-close]'),
    modal: document.querySelector('[data-modal-location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-franchise-open]'),
    closeModalBtn: document.querySelector('[data-modal-franchise-close]'),
    modal: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
