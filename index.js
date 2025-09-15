/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const cvtBtn = document.getElementById("cvt-btn");
let uniInput = document.getElementById("uni-input");
const lenghtDiv = document.getElementById("length-box");
const volumeDiv = document.getElementById("volume-box");
const massDiv = document.getElementById("mass-box");

cvtBtn.addEventListener("click", function calcConversion(numbConvert) {
  numbConvert = Number(uniInput.value);

  lengthImp = numbConvert * 3.28084; // pega o valor do INPUT e transforma de Metrico -> Imperial
  lengthMet = numbConvert / 3.28084; // pega o valor do INPUT e transforma de Imperial -> Metrico

  volumeImp = numbConvert * 0.264172; // pega o valor do INPUT e transforma de Metrico -> Imperial
  volumeMet = numbConvert / 0.264172; // pega o valor do INPUT e transforma de Imperial -> Metrico

  massImp = numbConvert * 2.20462; // pega o valor do INPUT e transforma de Metrico -> Imperial
  massMet = numbConvert / 2.20462; // pega o valor do INPUT e transforma de Imperial -> Metrico

  lenghtDiv.innerHTML = `<h3>Length (Meter/Feet)</h3> <p> ${Number(uniInput.value)} meters = ${lengthImp.toFixed(3)} feet | ${Number(uniInput.value)} feet = ${lengthMet.toFixed(3)} meters</p>`;

  volumeDiv.innerHTML = `<h3>Volume (Liters/Gallons)</h3> <p> ${Number(uniInput.value)} liters = ${volumeImp.toFixed(3)} gallons | ${Number(uniInput.value)} gallons = ${volumeMet.toFixed(3)} liters</p>`;

  massDiv.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3> <p> ${Number(uniInput.value)} kilos = ${massImp.toFixed(3)} pounds | ${Number(uniInput.value)} pounds = ${massMet.toFixed(3)} kilos</p>`;
});

// function calcConversion (numbConvert) {
//     uniInput.textContent = numbConvert
//     lengthConvert = numbConvert * 3.281
//     volumeConvert = numbConvert * 0.264
//     massConvert = numbConvert * 2.204

//     console.log(lengthConvert)
//     console.log(volumeConvert)
//     console.log(massConvert)
// }
