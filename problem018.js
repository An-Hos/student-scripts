function reverse(a) {
    return function() { 
      var tab = Array.from(arguments).reverse();
      return a.apply(null, tab);
    }
}