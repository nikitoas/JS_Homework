var user = {
    age : 30,
    name : 'Mikita'
}

function isEmpty(user) {
    for (var key in user ) {
        return false;   
    }
    return true;
}  
console.log(isEmpty(user));





alert('Welcome to pow(x, n), which returns x to the power of n!')

function pow(x, n) {
    return x**n;
}

var x = +prompt('x?', 'enter a number x');
var n = +prompt('n?', 'enter a number n');
    
if (n < 1) {
    alert('You entered not a natural number!');
} else {
    alert(pow(x, n));
}





function sumToСycle(n) {
    var sum = 0;
        for (var i = 1; i <= n; i++) {
            sum += i;
        }
    return sum;
}

function sumToRecursion(n) {
    if (n === 1);
    return n + sumTo(n - 1);
}

function sumToProgression(n) {
 return n * (n + 1) / 2;
}  

//самый быстрый способ - это 2-ой через формулу, т.к.идет прямое выполнение нужной операции.,
//в остальных вариантах нужно время на выполнение цикла(for) и в рекурсии на выполения условия и сложение частей ...
//мне кажется что при помощи рекурсии посчитать sumTo(100000) очень сложно,слишком емкий процесс для памяти...





var arr = [
            5, 7, 
            [4, [2], 8, [1, 3], 2],
            [9, []],
             1, 8
            ];
var sumNumber = 0; 

function treeSum (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      sumNumber += arr[i];
    } else (typeof arr[i] !== 'string' && arr[i].length)  //} else (typeof arr[i] instanceof Array);
    treeSum(arr[i]);
  }
}
treeSum(arr);
console.log(sumNumber);

