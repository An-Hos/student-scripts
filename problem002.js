function stringRotate(a,b){
    var c;
    var d;
    if (b < 0) return ('');
    else{
    c = a.substring(0,b);
    d = a.substring(b,a.length);  
    a = d +c;
    return a;
    }  
  }