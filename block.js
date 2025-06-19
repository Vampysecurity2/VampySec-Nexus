document.addEventListener("contextmenu", e => {
    e.preventDefault();
    alert("❌ Rata Detectada!!!.");
});

document.addEventListener("keydown", e => {
    if (e.ctrlKey || e.key.startsWith("F")) {
        e.preventDefault();
        alert("❌ Rata Detectada!!!.");
    }
});