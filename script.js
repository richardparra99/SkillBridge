const form = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");
const registerCount = document.getElementById("registerCount");

function loadRegisters() {
  const data = JSON.parse(localStorage.getItem("skillbridge_registers")) || [];
  registerCount.textContent = data.length;
  return data;
}

function saveRegister(register) {
  const data = loadRegisters();
  data.push(register);
  localStorage.setItem("skillbridge_registers", JSON.stringify(data));
  registerCount.textContent = data.length;
}

loadRegisters();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const interes = document.getElementById("interes").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !interes) {
    formMessage.textContent = "Por favor completa los campos obligatorios.";
    formMessage.style.color = "#f87171";
    return;
  }

  const register = {
    nombre,
    correo,
    interes,
    mensaje,
    fecha: new Date().toLocaleString()
  };

  saveRegister(register);

  formMessage.textContent = "Registro enviado correctamente.";
  formMessage.style.color = "#22c55e";

  form.reset();

  console.log("Registros guardados:", JSON.parse(localStorage.getItem("skillbridge_registers")));
});