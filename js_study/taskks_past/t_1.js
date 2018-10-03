function main(a) {
    var im = 0;
    var more = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > more) {
            more = a[i];
            im = i;
        };
    };
    return im;
};
