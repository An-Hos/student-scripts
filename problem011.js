function deepFindAndCount(a, b) {
    var licz = 0;
    var tab = (a.toString()).split(',');
    for(var i=0; i<tab.length; i++){
      if(tab[i] == b) licz++;
    }
    return licz;
}