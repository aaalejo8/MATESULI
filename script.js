const carrito = [];

document.addEventListener("DOMContentLoaded", () => {
const botones = document.querySelectorAll(".agregar-carrito");

    botones.forEach((btn) => {
        btn.addEventListener("click", () => {
            const nombre = btn.getAttribute("data-nombre");
            const precio = parseFloat(btn.getAttribute("data-precio"));

            carrito.push({ nombre, precio });
            alert(`Agregaste "${nombre}" al carrito.`);
            console.log("Carrito actual:", carrito);
        });
    });
});