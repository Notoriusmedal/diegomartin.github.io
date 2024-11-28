document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const toggleButton = document.getElementById("verpass");

    toggleButton.addEventListener("click", () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            toggleButton.textContent = "Ocultar Contraseña";
        } else {
            passwordField.type = "password";
            toggleButton.textContent = "Mostrar Contraseña";
        }
    });
});
