fetch('assets/dino-trex.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("curiosidades").innerHTML = `
      <strong>${data.nombre}</strong> (${data.periodo})<br>
      ${data.descripcion}<br><br>
      <ul>${data.datos_curiosos.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
  });

  document.addEventListener("DOMContentLoaded", () => {
    const btnRugido = document.getElementById("btn-rugido");
  
    if (btnRugido) {
      const audio = new Audio("audio/trex_roar.mp3");
  
      btnRugido.addEventListener("click", () => {
        audio.currentTime = 0; // Reinicia si ya se ha reproducido
        audio.play().catch(error => {
          console.error("Error al reproducir el rugido:", error);
        });
      });
    }
  });