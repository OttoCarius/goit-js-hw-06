const totalCategories = document.querySelectorAll("li.item");
console.log(`В списке ${totalCategories.length} категории.`);

const ul = document.querySelectorAll("#categories>li");
ul.forEach((el) => {
  console.log(
    `Категория: ${el.firstElementChild.textContent}, Количество элементов: ${el.lastElementChild.children.length}`
  );
});

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
