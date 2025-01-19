document.getElementById('Button').addEventListener('click', function() {
    let password = prompt("Введите пароль ");
    const vallitPassword = ["Step", "Web", "JavaScript", "DDOs"];

    if (vallitPassword.includes(password)){
        if (password === "DDOs") {
            let pashalka = prompt("На кого кидаем ддос?")
            if (pashalka) {
                alert('DDOS successfully activated')
            } else {
                alert('Ну и зачем ты вводил DDOS если им не воспользовался?')
            }
        } else {
            alert("Пароль правильный не буду на тебя кидать ддос")
        }
    } else {
        alert("Ну ты конечно шляпа, жди ддос");
    }
});