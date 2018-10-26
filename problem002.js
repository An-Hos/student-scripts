function stringRotate(a,b){
    var c;
    if (b >= 0){
        c = a.substring(0,b);
        return (a.substring(b)+c); 
    } else return (""); 
  }