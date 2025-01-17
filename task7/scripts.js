document.getElementById('Button').addEventListener('click', function () {
    const flashcardGB = parseFloat(document.getElementById('sizeInput').value);
    const message = document.getElementById('message');

    if (!isNaN(flashcardGB) && flashcardGB > 0) {
        message.textContent = `Кол-во файлов(820Мб) которые помещаются на вашу флешку: ${parseInt((flashcardGB * 1024) / 820)}`
    }else{
        message.textContent = 'Пожалуйста введите кол-во ГБ на вашей флешке'
    }
})