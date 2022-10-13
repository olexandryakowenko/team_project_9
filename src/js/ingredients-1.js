(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-icecream-open]"),
    closeModalBtn: document.querySelector("[data-modal-icecream-close]"),
    modal: document.querySelector("[data-modal-icecream]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();