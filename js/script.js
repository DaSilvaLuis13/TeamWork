document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const totalImages = 24; // El número de imágenes que se tienen en la carpeta

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement("img");
        // Se asume que las imágenes están en la carpeta images
        img.src = `images/sh${i}.png`;
        img.alt = `Imagen de galería ${i}`;
        img.loading = "lazy"; // Optimiza la carga de la página
        
        gallery.appendChild(img);
    }
});