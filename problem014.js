var Vectors = {
    sum(a, b) {
        if(a.length != b.length) return false;
        var wynik = [];
        for(var i = 0; i < a.length; i++) {
            wynik.push(a[i]+b[i]);
        }
        return wynik;
    },
    mulByScalar(a, b) {
        if(b == 0 || Array.isArray(b)) return false;
        var wynik = [];
        for(var i = 0; i < a.length; i++) {
            wynik.push(a[i]*b);
        }
        return wynik;
    }
}