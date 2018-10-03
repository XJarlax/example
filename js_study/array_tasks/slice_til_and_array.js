
function slice(a, from) {
    const t = a.slice(from);
    return t
}

function my_slice(a, from) {
    let t = [];
    for (from; from < a.length; from++) {
        t.push(a[from]);
    }

    return t
}
