document.getElementById("Button").addEventListener('click', function() {
    const bit = prompt("Здесь ты можешь ввести цифру");
    const nums = ["1", '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    if (nums.includes(bit)) {
        if (bit == 0) {
            alert("ноль");
        };
        if (bit == 1) {
            alert("еденица");
        };
        if (bit == 2) {
            alert("двойка");
        };
        if (bit == 3) {
            alert("тройка");
        };
        if (bit == 4) {
            alert("четвёрка");
        };
        if (bit == 5) {
            alert("пятёрка");
        };
        if (bit == 6) {
            alert("шестёрка");
        };
        if (bit == 7) {
            alert("семёрка");
        };
        if (bit == 8) {
            alert("восьмёрка");
        };
        if (bit == 9) {
            alert("девятка");
        };
    } else {
        alert("Слышь, довай нормально а то DDOS кину")
    }
})