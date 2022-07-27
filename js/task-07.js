// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const { fontSize, text } = {
  fontSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

fontSize.addEventListener("input", () => {
  text.style.fontSize = fontSize.value + "px";
});
