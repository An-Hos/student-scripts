function getTotalNumberOfNewYaersEveSundays(a,b){
    var c = 0;
      for(var i = a; i <= b; i++){
        if(new Date(i, 0, 1, 1).getUTCDay() == 0) c++;
      }  
    return c;
  }