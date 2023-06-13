// Цикл While

//Приклад
/*let num = 0;
while (num < 5){
    console.log(num);
    num++;
}

let num = 0;
for (; num < 5; num++) {
    if(num == 2) continue;
    console.log(num);
}
*/

//Метки
firstFor: 
for(let num = 0; num < 2; num++){
    for (let size = 0; size < 3; size++) {
        if (size == 2){
            continue firstFor;
        }
        console.log(size);
    }
}
