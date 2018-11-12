function objectsDiff(a, b) {
    var tab1 = Object.getOwnPropertyNames(a);
    var tab2 = Object.getOwnPropertyNames(b);
    var tab3 = tab1.concat(tab2);
    var wynik = [];
    var ile;
    for(var i = 0; i < tab3.length; i++) {
        ile = 0;
        for(var j = 0; j < tab3.length; j++) {
            if(tab3[i] == tab3[j]) ile++;
        }
        if(ile == 1) wynik.push(tab3[i]);
    }
    return wynik;
}