const cvtBtn = document.getElementById("cvt-btn");
let uniInput = document.getElementById("uni-input");
const lengthDiv = document.getElementById("length-box");
const volumeDiv = document.getElementById("volume-box");
const massDiv = document.getElementById("mass-box");

function calcConversion(numbConvert) {
  numbConvert = Number(uniInput.value);

  lengthImp = numbConvert * 3.28084; // pega o valor do INPUT e transforma de Metrico -> Imperial
  lengthMet = numbConvert / 3.28084; // pega o valor do INPUT e transforma de Imperial -> Metrico

  volumeImp = numbConvert * 0.264172; // pega o valor do INPUT e transforma de Metrico -> Imperial
  volumeMet = numbConvert / 0.264172; // pega o valor do INPUT e transforma de Imperial -> Metrico

  massImp = numbConvert * 2.20462; // pega o valor do INPUT e transforma de Metrico -> Imperial
  massMet = numbConvert / 2.20462; // pega o valor do INPUT e transforma de Imperial -> Metrico

  lengthDiv.innerHTML = `<h3>Length (Meter/Feet)</h3> <p> ${Number(uniInput.value)} meters = ${lengthImp.toFixed(3)} feet | ${Number(uniInput.value)} feet = ${lengthMet.toFixed(3)} meters</p>`;

  volumeDiv.innerHTML = `<h3>Volume (Liters/Gallons)</h3> <p> ${Number(uniInput.value)} liters = ${volumeImp.toFixed(3)} gallons | ${Number(uniInput.value)} gallons = ${volumeMet.toFixed(3)} liters</p>`;

  massDiv.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3> <p> ${Number(uniInput.value)} kilos = ${massImp.toFixed(3)} pounds | ${Number(uniInput.value)} pounds = ${massMet.toFixed(3)} kilos</p>`;
}

cvtBtn.addEventListener("click", calcConversion);
uniInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calcConversion();
});
