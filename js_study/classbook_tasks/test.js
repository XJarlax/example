'use strict';
/*
const password = '123';
let try_pass = '';
const task = prompt('Who are you?', '');
if (task === 'Admin') {
    try_pass = prompt('Write password!', '');
} else {
    if (task === null) {
        alert('Enter was canceled')
    } else {
        alert('I dont recognize you!')
    }
}
if (try_pass === password) {
    alert('welcome!');
} else {
    if (try_pass === null) {
        alert('Enter was canceled')
    } else {
        alert('wrong pass!')
    }

}

var userName = prompt('Кто пришёл?', '');

if (userName == 'Админ') {

    var pass = prompt('Пароль?', '');

    if (pass == 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (pass == null) { // (*)
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }

} else if (userName == null) { // (**)
    alert('Вход отменён');

} else {

    alert('Я вас не знаю');

}
*/



const a = prompt('writer a', '');
const b = prompt('writer b', '');



const comparison_1 = function (a, b) {
    let result = '';
    if (++a + ++b < 4 + 2) {
        result = 'less';
    } else {
        result = 'more';
    }

    return result
}

const comparison_2 = function (a, b) {
    let result = '';
    ++a + ++b < 4 + 2 ? result = 'less' : result = 'more';
    return result
}


if (comparison_1(a, b) === comparison_2(a, b)) {
    alert('okay!')
} else {
    alert('omg!')
}

