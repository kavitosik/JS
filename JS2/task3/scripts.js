document.getElementById('Button').addEventListener('click', function() {
    let number = prompt("Введите число:");

    if (!isNaN(number) && number >= 0 && number <= 100) {
        alert("Число норм, кидать ддос не буду");
    } else {
        alert("Ну что шляпа, ща за такие числа ддос кину на тебя");
    }
});