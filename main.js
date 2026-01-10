let calculation = "";
function doCalculation(content) {
  calculation = calculation + content;
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button, index) => {
  if (button.classList.contains("ignore")) return;
  button.addEventListener("click", () => {
    // console.log(button.textContent);
    doCalculation(button.innerHTML);
    document.querySelector(".paragraph2").innerHTML = "";
    document.querySelector(".paragraph3").innerHTML = "";
    document.querySelector(".paragraph4").innerHTML = "";
    document.querySelector(".paragraph1").innerHTML = calculation;
  });
});
const backbtn = document.querySelector(".backbtn");
backbtn.addEventListener("click", () => {
  calculation = calculation.slice(0, -1);
  document.querySelector(".paragraph2").innerHTML = "";
  document.querySelector(".paragraph3").innerHTML = "";
  document.querySelector(".paragraph1").innerHTML = "";
  document.querySelector(".paragraph4").innerHTML = calculation;
});
const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
  calculation = eval(calculation);
  document.querySelector(".paragraph1").innerHTML = "";
  document.querySelector(".paragraph3").innerHTML = "";
  document.querySelector(".paragraph4").innerHTML = "";
  document.querySelector(".paragraph2").innerHTML = calculation;
});
const accButton = document.querySelector(".js-ac-btn");
accButton.addEventListener("click", () => {
  calculation = "";
  document.querySelector(".paragraph1").innerHTML = "";
  document.querySelector(".paragraph2").innerHTML = "";
});
const percentBtn = document.querySelector(".js-percent");
percentBtn.addEventListener("click", () => {
  calculation = calculation / 100;
  document.querySelector(".paragraph3").innerHTML = calculation;
  document.querySelector(".paragraph2").innerHTML = "";
  document.querySelector(".paragraph1").innerHTML = "";
  document.querySelector(".paragraph4").innerHTML = "";
});
