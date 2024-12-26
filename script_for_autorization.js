const photo = document.getElementById("vorobey");

photo.onmouseover = function() {
    photo.style.width = "330px";
    photo.style.height = "220px";
    console.log("Изображение 1 увеличено");
};

photo.onmouseout = function() {
    photo.style.width = "300px";
    photo.style.height = "200px";
    console.log("Изображение 1 в исходном размере");
};
const photo_1 = document.getElementById("iron");


photo_1.onmouseover = function() {
    photo_1.style.width = "330px";
    photo_1.style.height = "220px";
    console.log("Изображение 2 увеличено");
};

photo_1.onmouseout = function() {
    photo_1.style.width = "300px";
    photo_1.style.height = "200px";
    console.log("Изображение 2 в исходном размере"); // Вывод для отладки
};
const photo_2 = document.getElementById("revolution");


photo_2.onmouseover = function() {
    photo_2.style.width = "330px";
    photo_2.style.height = "220px";
    console.log("Изображение 3 увеличено")
};

photo_2.onmouseout = function() {
    photo_2.style.width = "300px";
    photo_2.style.height = "200px";
    console.log("Изображение 3 в исходном размере"); // Вывод для отладки
 };
