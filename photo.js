document.getElementById("infLogo").onclick = function() {
    alert("Вы кликнули на заголовок - так держать!");
    console.log("Заголовок нажат");
};
// Обработчик события click для параграфа
document.getElementById("textParagraph").addEventListener("click", function() {
    this.classList.toggle("clicked"); // Переключение цвета фона
    console.log("Фон параграфа изменён"); // Вывод для отладки
});
// Обработчик события click для параграфа
document.getElementById("textParagraph_2").addEventListener("click", function() {
    this.classList.toggle("clicked"); // Переключение цвета фона
    console.log("Фон параграфа изменён"); // Вывод для отладки
});
// Обработчик события click для параграфа
document.getElementById("textParagraph_3").addEventListener("click", function() {
    this.classList.toggle("clicked"); // Переключение цвета фона
    console.log("Фон параграфа изменён"); // Вывод для отладки
});
const photo = document.getElementById("Mao");
const teacherPhotoUrl = "funny-klev-club-fc52-p-smeshnie-kartinki-mao-tszedun-31.jpg";
photo.onclick = function() {
    photo.src = teacherPhotoUrl;
    photo.style.width = "480px";
    photo.style.height = "270px";
    console.log("Изображение заменено"); // Вывод для отладки
};


// Обработчик события dblclick на фотографии
photo.ondblclick = function() {
    alert("Не налегать, а то будет -100 социальный рейтинг");
    console.log("Показано сообщение при двойном клике"); 
};

