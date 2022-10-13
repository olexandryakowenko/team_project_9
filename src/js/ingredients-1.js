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

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-icecoffee-open]"),
    closeModalBtn: document.querySelector("[data-modal-icecoffee-close]"),
    modal: document.querySelector("[data-modal-icecoffee]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-milkshake-open]"),
    closeModalBtn: document.querySelector("[data-modal-milkshake-close]"),
    modal: document.querySelector("[data-modal-milkshake]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
