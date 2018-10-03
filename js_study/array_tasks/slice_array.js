
function slice(a, from, to){
    const t = a.slice(from, to);
    return t
}

function my_slice(a, from, to){
    let t = [];
    for (from; from < to; from++){
    t.push(a[from]);
     }

    return t
}
