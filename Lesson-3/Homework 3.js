// ДОМАШНЕЕ ЗАДАНИЕ 3 (12.04.2022)
//Задача 1.Решение:

var styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);
var penultimateElement = styles.length -2;
styles[penultimateElement] = 'Классика';
console.log(styles);
alert(styles.shift());
console.log(styles);
styles.unshift('Рэп','Регги');
console.log(styles);

//Задание 2.Решение:

//1)
for (var evens = 2; evens <= 10; evens ++) {
    if (evens % 2 != 0) continue;
         console.log(evens);
}

//2)
for (var evens = 2; evens <= 10; evens += 2) {
    console.log(evens);
}


//Задание 3. Решение

var arr = [];

while(true) {

  var input = prompt('Введите число', 0);
  
  if(input === '' || input === null || isNaN(input)) 
  
  break;   
  
  arr.push(+input);
    
  var sum = 0;

  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }  
}

alert(sum);



//Задание 4*. Решение:

var endEnterval = 10;

modify:for (var i = 2; i <= endEnterval; i++) { 
    var primeNumber = true;
        
    for (var j = 2; j < i; j++) { 
        if (i % j === 0) { 
        var primeNumber = false; 
        continue modify;
        } 
    }
    if (primeNumber) 
    console.log(i);
}

