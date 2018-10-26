function triangleArea(a,b,c){
    var p;
    var P;
    if(a<=0 || b<=0 || c<=0) return (-1);
    else if ((a+b) < c && (a+c) < b && (b+c) <a ) return (-1);
    else{
    p = (a+b+c)/2;
    P = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    
    return (Math.round(P*100)/100);
    }  
  }