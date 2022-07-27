function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const { boxes, number, create, destroy } = {
  boxes: document.querySelector("#boxes"),
  number: document.querySelector('[type="number"]'),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
};

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = (20 + i * 10).toString() + "px";
    div.style.width = (20 + i * 10).toString() + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}
create.addEventListener("click", () => createBoxes(Number(number.value)));
destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// {
//   <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// }

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
