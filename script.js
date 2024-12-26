// Часть 1: Работа с DOM

// 1. Измените текст заголовка H1
const h1 = document.querySelector('h1');
if (h1) {
  h1.textContent = 'Добро пожаловать на наш сайт!';
  h1.style.color = 'yellow';
}

// 2. Измените цвет текста заголовка H2
const h2 = document.querySelector('h2');
if (h2) {
  h2.style.color = 'red';
}

// 3. Измените текст первого параграфа
const firstParagraph = document.querySelector('p:first-of-type');
if (firstParagraph) {
  firstParagraph.textContent = 'Это новый текст параграфа.';
  firstParagraph.style.color = 'yellow';
}

// 4. Скрыть встроенное видео
const video = document.querySelector('video');
if (video) {
  video.style.display = 'none';
}


// Часть 2: Работа с объектами

const formData = {};

function submitForm() {
  // Собираем данные из формы
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const comment = document.getElementById('comment').value;

  // Проверки
  if (!name || !email || !comment) {
    alert('Поля "Имя", "E-mail" и "Комментарий" обязательны для заполнения!');
    return;
  }

  if (!/^\d+$/.test(phone)) {
    alert('Поле "Телефон" должно содержать только цифры!');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Некорректный адрес электронной почты!');
    return;
  }

  // Записываем данные в объект formData
  formData.name = name;
  formData.email = email;
  formData.phone = phone;
  formData.date = date;
  formData.comment = comment;

  // Выводим данные в консоль
  formData.printData();
}


formData.printData = function() {
  console.log('Имя:', this.name);
  console.log('E-mail:', this.email);
  console.log('Телефон:', this.phone);
  console.log('Дата:', this.date);
  console.log('Комментарий:', this.comment);
};


// Часть 3: Обработчик формы

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    submitForm();
  });
}

