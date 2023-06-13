// Цикл While

//Приклад
/*let num = 0;
while (num < 5){
    console.log(num);
    num++;
}*/

let num = 0;
for (; num < 5; num++) {
    if(num == 2) continue;
    console.log(num);
}