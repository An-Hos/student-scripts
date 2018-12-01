function Square(a) {
    this.b = a;
}
Square.prototype.getArea = function() {
    return this.b * this.b;
}
Square.prototype.getPerimeter = function() {
    return 4 * this.b;
}