(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-buy-close]'),
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  document.addEventListener('click', e => {
    if (e.target.matches('[data-modal-buy-open]')) {
      toggleModal();
    }
  });
})();
