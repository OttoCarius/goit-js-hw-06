const { input } = {
  input: document.querySelector("#validation-input"),
};

function onInputBlur(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}

input.addEventListener("blur", () => {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    onInputBlur("valid", "invalid");
  } else {
    onInputBlur("invalid", "valid");
  }
});

// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
