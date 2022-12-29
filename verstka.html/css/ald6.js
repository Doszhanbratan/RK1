function superFuncia() {
    let n1 = +prompt("введите первое число: ");
    let n2 = +prompt("введите второе число: ");

    if (n1 > n2){
        fact = n1
    } else {
        fact = n2
    }

    function factorial(a) {
        return a ? a * factorial(--a) : 1
    }
    console.log(`Факториал наибольшего числа равен: ${factorial(fact)}`);

    function uslovie () {
        let zn = prompt("введите знак: ");  
    
        if (zn == '+') {
            res = n1 + n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(zn == '-') {
            res = n1 - n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(zn == '*') {
            res = n1 * n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(zn == '/') {
            res = n1 / n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else {
            return uslovie()
            let zn = prompt("введите знак заново: "); 
        }
    }
    uslovie()

    
}


superFuncia()