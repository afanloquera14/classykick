window.onscroll = () => {

    document.querySelector(".mountains").style.marginTop = scrollY / 2 + "px";

    document.querySelector(".stars").style.marginBottom = scrollY / 2.5 + "px";

    document.querySelector(".stars").style.marginLeft = -scrollY / 2 + "px";

    document.querySelector(".cave").style.transform = "scale(" + (scrollY / 5000 + 1) + ")";

    document.querySelector(".moon").style.transform = "rotate(-" + (scrollY / 5.5) + "deg)";

    document.querySelector(".Home h1").style.marginTop = scrollY / 1.3 + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;

}






document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los enlaces de navegación
    const links = document.querySelectorAll("nav a");
  
    // Agregar efecto de deslizamiento al hacer clic en un enlace
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        const href = this.href; // Guardar el destino del enlace
  
        // Obtener el contenedor de contenido
        const content = document.querySelector('.content');
        
        // Asegurar que el contenedor tenga un ancho completo y ocultar el desbordamiento
        content.style.width = "100%"; 
        content.style.overflow = "hidden"; 
  
        // Aplicar el efecto de deslizamiento hacia la izquierda
        content.style.transition = "transform 0.6s ease-in-out"; // Añadir la transición
        content.style.transform = "translateX(-100%)"; // Deslizar hacia la izquierda
  
        // Redirigir después de la animación
        setTimeout(() => {
          window.location.href = href; // Redirigir a la nueva página
        }, 600); // Ajustado a la duración de la transición CSS (0.6s)
      });
    });
  
    // Animación de entrada al cargar la página
    window.addEventListener("load", function () {
      const content = document.querySelector('.content');
      
      // Asegurar que el contenido esté fuera de la pantalla inicialmente (a la derecha)
      content.style.transform = "translateX(100%)"; 
      
      // Hacer el deslizamiento hacia el centro
      setTimeout(() => {
        content.style.transition = "transform 0.6s ease-in-out"; // Añadir la transición
        content.style.transform = "translateX(0)"; // Deslizar el contenido al centro
      }, 10); // Pequeño retardo para asegurar que la animación se vea
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".transition-link"); // Selecciona los enlaces con la clase 'transition-link'

    // Agregar el efecto fade al hacer clic en un enlace
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevenir la acción predeterminada del enlace
            const href = this.href; // Guardar el destino del enlace

            // Añadir la clase fade-out al contenedor principal
            document.querySelector('.page-container').classList.add("fade-out");

            // Esperar hasta que la animación termine y redirigir
            setTimeout(() => {
                window.location.href = href; // Ir a la nueva página
            }, 600); // Coincide con la duración de la animación CSS
        });
    });

    // Cuando la página se carga, elimina la clase fade-in para hacer visible el contenido
    window.addEventListener("load", function () {
        const container = document.querySelector('.page-container');
        container.classList.add('loaded');  // Añadir la clase 'loaded'
        container.classList.remove("fade-in");  // Quitar la clase 'fade-in'
    });
});
