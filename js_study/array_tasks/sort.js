
function min_ind_from(a, from) {
    let less = a[from];
    let min_ind = from;
    for (let i = from; i < a.length; i++) {
        if (less > a[i]) {
            less = a[i];
            min_ind = i;
        }
    }
    return min_ind
}
function my_sort_array(a) {
    for (let from = 0; from < a.length; from++) {
        let min_ind_from_result = min_ind_from(a, from);
        let t = a[from];
        a[from] = a[min_ind_from_result];
        a[min_ind_from_result] = t;
    }
    return a;
}

function sort_array(a) {
    const t = a.sort();
    return t;
}
