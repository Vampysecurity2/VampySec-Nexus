function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;
    if (user && pass) {
        localStorage.setItem(user, pass);
        alert("Registro exitoso 🎉");
        window.location.href = "inicio.html"; // Redirección tras registro
    } else {
        alert("Completa todos los campos");
    }
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;
    let savedPass = localStorage.getItem(user);
    if (savedPass === pass) {
        alert("Bienvenido, " + user);
        window.location.href = "inicio.html"; // Redirección tras login
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
