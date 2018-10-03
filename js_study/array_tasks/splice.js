function lowfull_splice(array, from, size) {

    var new_a_1 = array.slice(0, from);
    var new_a_2 = array.slice(from + size, array.l);
    var new_array = new_a_1.concat(new_a_2);

    return new_array;
}







function splice_good(array, from, size) {
    var new_array = [];
    for (var i = 0; i < array.length; i++) {
        if (i < from) {
            new_array.push(array[i]);
        }
        if (i >= from + size) {
            new_array.push(array[i]);
        }
    }
    return new_array;
}