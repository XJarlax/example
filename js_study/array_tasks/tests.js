function test() {
    var odd = [0, 1, 2, 3, 4, 5];
    var t = odd.slice(1, 3); // срез с 1 до 3 элемента 
    console.log(t); // [1, 2] 
    t = odd.slice(1); // срез с 1 до конца 
    console.log(t); // [1, 2] 
    t = odd.concat([6, 7]); // конкатенация массивов 
    console.log(t); // [0, 1, 2, 3, 4, 5, 6, 7] 
    t = odd.splice(2, 2); // odd === [0, 1, 4, 5], t === [2, 3] функция-мудак вырезает из массива 
    console.log(t); // [2, 3] 
    t = odd.pop(); // odd === [0, 1, 4], t === 5 
    console.log(t); // 5 
    t = odd.reverse(); // odd === [4, 1, 0], t === [4, 1, 0] переворачивает массив 
    console.log(t); // 5 
    t = odd.sort(); // odd === [0, 1, 4], t === [0, 1, 4] сортирует 
    console.log(t); // 
    t = odd.indexOf(1); // ищет в массиве, если нашёл - вернёт индекс найденного, если не нашёл, то вернёт -1 
    console.log(t); // 1 
    t = odd.indexOf("1");
    console.log(t); // -1 
}
