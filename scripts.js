//Task 1
console.log('Task 1');
let i = 1;
while (i<=50) {
    console.log(i);
    i++;
}
console.log('Обратный отсчет');
i = 35;
while (i>=8) {console.log(i--);}
//Task 2
console.log('Task 2');
let a = 89;
while (a>=11) {
    console.log(a--);
}
//Task 3
console.log('Task 3');
let sum = 0;
for (let b = 0; b<=100; b++) {
    sum += b;
}
console.log(sum);
//Task 4
console.log('Task 4');
let summa = 0;
for (let c = 1; c<=5; c++) {
    summa = 0;
    for (let d = 1; d<=c; d++) {
       summa += d; 
    }
    console.log('Сумма ' + c + ' = ' + summa);
}
//Task 5
console.log('Task 5');
/*for (let h = 8; h<=86; h++){
    if (h%2==0) {
        console.log(h);
    }
}*/
let h = 8;
while (h<=86) {
    if (h%2==0) {
        console.log(h);
    }
    h++;
}
//Task 6
console.log('Task 6');
for (let f = 2; f<=10; f++) {
    console.log(f);
    for (let g = 2; g<=10; g++) {
        console.log(f + '*' + g + '=' + f*g);
    }
}
//Task 7
console.log('Task 7');
for (var n = 1000, num = 0; n>50; n = n/2, num++) {
}
console.log('Количество итераций: ' + num);
//Task 8
console.log('Task 8');
let p = 1, s = 0, r = 0, t = 0;
while (p!=0) {
    p = +prompt('Введите число');
    r++;
    s += p;
    t = s/(r-1); 
}
console.log('Сумма введенных чисел: ' + s);
console.log('Среднее арифметическое чисел: ' + t);
//Task 9
console.log('Task 9');
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
    m = str.split(' ');
console.log('Минимальное значение: ' + Math.min(...m));
console.log('Максимальное значение: ' + Math.max(...m));