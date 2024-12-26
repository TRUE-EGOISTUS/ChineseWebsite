// Обработчик события click на кнопке
document.getElementById("change-practices").onclick = function() {
    const newPractices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений"
    ];
    const table = document.getElementById("lection");
    table.innerHTML = ""; // Очищаем таблицу
    newPractices.forEach(practice => {
        const row = table.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = practice;
    });
    console.log("Темы практик обновлены: ", table); // Вывод для отладки
};