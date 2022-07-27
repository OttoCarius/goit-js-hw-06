const textInput = document.querySelector("#name-input");
const outInput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  outInput.textContent = event.currentTarget.value;
});
