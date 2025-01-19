document.getElementById('Button').addEventListener('click', function() {
    const date = document.getElementById('dateInput').value;
    const message = document.getElementById('message');

    if (message) {
        message.textContent = `Ваш возраст: ${2025 - date}`;
    }else{
        message.textContent = 'Введите ваш год рождения';
    }
});