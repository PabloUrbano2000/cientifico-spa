import router from "./routes";

// cuando carga el navegador
window.addEventListener("load", router);

// para cuando hay un cambio en un hash
window.addEventListener("hashchange", router);
