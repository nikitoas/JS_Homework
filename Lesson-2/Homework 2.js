//Задание 1.Решение:

var first = +prompt('Enter first number: ');
var add = +prompt('How much to add to the current number?');
var substract = +prompt('How much to subtract to the current number?');
var multiply = +prompt('How much to multiply  to the current number?');
var divide = +prompt('How much to divide to the current number?');

var result = (first + add - substract) * multiply / divide;

var formula = 'Формула:' + first + ' + ' + add + ' - '+ substract + ' * ' + multiply + ' / ' + divide;

alert(formula + '\n' + 'Результат:' + result);
// alert(`Формула: (${first} + ${add} - ${substract}) * ${multiply} / ${divide}` + '\n' + `Результат: ${result}`);

//Задание 2.Решение:

var login = prompt('Введите свой логин пожалуйста');

if (login === 'Админ') {

  var password = prompt('Введите свой пароль пожалуйста'); 
  
  if (password === 'Чёрный Властелин') {
    alert('Добро пожаловать!');
  } else if (password === '' || password === null) {
    alert('Вход отменён!');
  } else { 
    alert('Пароль неверен!');
  }  
  
} else if (login === '' || login === null) {
  alert('Вход отменён!');
} else {
  alert('Я вас не знаю!');
}    


//Задание 3.Решение:

var massage = (login === 'Вася') ? 'Привет'
    : (login == 'Директор') ? 'Здравствуйте'
    : (login == '') ? 'Нет логина' : '';



//Задание 4 *. Решение: Что-то пытался сделать(
var surname = prompt('Введите свою фамилию');

do {
  alert( 'введите пожуйста данные заново!' );
  surname++;
} while (!surname);

var name = prompt('Введите своё имя');

do {
    alert( 'введите пожуйста данные заново!' );
    name++;
  } while (!name);

var patronymic = prompt('Введите своё отчество');

do {
    alert( 'введите пожуйста данные заново!' );
    patronymic++;
  } while (!patronymic);

var ageYears = parseInt(prompt('Введите свой возраст в годах'));

do {
    alert( 'введите пожуйста данные заново!' );
    ageYears++;
  } while (!ageYears);

var ageDays = ageYears * 365;

do {
    alert( 'введите пожуйста данные заново!' );
    ageDays++;
  } while (!ageDays);

var gender = confirm('Ваш пол - мужской?');

// var retiree =  (gender === true && ageYears > 65) ? 'Вы на пенсии': (retiree) ? 'Вы ещё не на пенсии'; не понимаю что тут с синтаксисом не так?

do {
    alert( 'введите пожуйста данные заново!' );
    retiree++;
  } while (!retiree);


alert(`'Ваше ФИО:' ${surname} + ${name} + ${patronymic} 
        + '\n' + 'Ваш возраст в годах:' ${ageYears}
        + '\n' + 'Ваш возраст в днях:' ${ageDay}
        + '\n' + 'Ваш пол:' ${gender}
        + '\n' + ${retiree} `);

