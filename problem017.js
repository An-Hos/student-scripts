function compose(...fns) { 
    return fns.reduceRight((poprzFn, nastFn) => (...args) => nastFn(poprzFn(...args)), a => a);
}