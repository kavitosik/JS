document.getElementById("Button").addEventListener('click', function() {
    const age = document.getElementById('ageInput').value;

    if (age >= 0 && age <= 2) {
        alert("Вы ребёнок")
    }
    if (age > 2 && age < 12) {
        alert("Вы и не ребёнок и не подросток, вы между :)")
    }
    if (age >= 12 && age < 18) {
        alert("Вы подросток")
    }
    if (age >= 18 && age < 60) {
        alert("Вы взрослый")
    }
    if (age >= 60) {
        alert("Вы пенсионер")
    }
    
    // switch (age) {
    //     case age >= 0 && age <= 2:
    //         alert("Вы ребёнок");
    //     case age > 2 && age < 12:
    //         alert("Вы и не ребёнок и не подросток, вы между :)");
    //     case age >= 12 && age < 18:
    //         alert("Вы подросток");
    //     case age >= 18 && age < 60:
    //         alert("Вы взрослый");
    //     case age >= 60:
    //         alert("Вы пенсионер");
    // };
});