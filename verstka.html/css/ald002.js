let name = prompt('Введите свое имя')
    while (name.length < 4){
        name = prompt('Вы некорректно вывели имя, попробуйте снова')
    }
let age = +prompt('Введите свой возраст')

    while (age <= 14 || age >= 60){
        if (age <=14  ){
             age = prompt('Вы должны быть старше 14 лет, попробуйте еще раз')
        }
        else if (age >= 60 ) {
            age = prompt('Вы должны быть младше 60 лет, попробуйте еще раз')
        }
    }
      
let stud = prompt('Вы студент?')
    while(stud != "Да" && stud != "да" && stud != "Yes" && stud != "yes"){
        if (stud != "Да" && stud != "да" && stud != "Yes" && stud != "yes"){
            stud = prompt('Вы студент?')
        }
    } 