function divisible (a){
    for(var i = 1; i < arguments.length; i++){
      if(a % arguments[i] !== 0) return false;
    }
    return true;
  }