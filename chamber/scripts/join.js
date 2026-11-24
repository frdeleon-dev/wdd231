document.addEventListener("DOMContentLoaded", () => {
    // 1. Llenar el campo oculto timestamp con la fecha y hora actual al cargar la página
    const timestampInput = document.querySelector("#timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toLocaleString();
    }

    // 2. Abrir y cerrar los modales HTML (<dialog>) de membresía
    const openButtons = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll(".close-modal");

    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal && typeof modal.showModal === "function") {
                modal.showModal();
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            if (modal) {
                modal.close();
            }
        });
    });

    // Cerrar el modal al hacer clic fuera del cuadro de diálogo (en el backdrop)
    const modals = document.querySelectorAll("dialog");
    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });
    });
});