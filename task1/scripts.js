document.getElementById("Button").addEventListener('click', function() {
    // const name = prompt("Введите своё имя: ") 
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message');

    if (name) {
        message.textContent = `Привет, ${name}!`;
    }else{
        message.textContent = 'Пожалуйста, введите своё имя!'
    }

    // if (name) {
    //     alert(`Привет, ${name}!`);
    // }else{
    //     alert('Пожалуйста, введите своё имя!')
    // }
});