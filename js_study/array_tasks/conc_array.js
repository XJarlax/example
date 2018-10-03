function concatenation(a, b) {
    const t = a.concat(b);
    return t
}

function my_concatenation(a, b) {
    let t = [];
    for (let i = 0; i < a.length; i++) {
        t.push(a[i]);
    }
    for (let i = 0; i < b.length; i++) {
        t.push(b[i]);
    }


    return t
}