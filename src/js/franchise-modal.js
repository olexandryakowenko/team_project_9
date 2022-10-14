(() => {
  const refs = {
    openModalButton: document.querySelector("[data-modal-open]"),
    closeModalButton: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalButton.addEventListener("click", toggleModal);
  refs.closeModalButton.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();