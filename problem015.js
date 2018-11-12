var Stack = { 
    stack: [],
    push(a, b = 1) {
        for(var i = 0; i < (b-1); i++){
             this.stack.push(null);
        }
        this.stack.push(a);
    },
    pop(a = 1) {
        for(var i = 0; i < (a - 1); i++){
            delete this.stack.pop();
        }
        return this.stack.pop();
    }
}