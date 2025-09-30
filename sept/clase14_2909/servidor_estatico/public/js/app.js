document.addEventListener("DOMContentLoaded", () => {
  const testBtn = document.getElementById("testBtn");
  const resultado = document.getElementById("resultado");

  testBtn.addEventListener("click", () => {
    const ahora = new Date().toLocaleString();
    resultado.innerHTML = `
      <h3>JavaScript Funcionando</h3>
      <p>Hora actual: ${ahora}</p>
      <p>El servidor está sirviendo archivos JS correctamente.</p>
    `;
    resultado.style.display = "block";
  });
});
