const Decorator = function(paint_stock){
    this.paint_stock = 0;
}

Decorator.prototype.addPaintCan = function(paint_cans) {
    this.paint_stock += paint_cans;
}
Decorator.prototype.calculateTotalPaint = function() {
    return this.paint_stock * PaintCan.litres;
}
// Decorator.prototype.addPaintCan = function(paint_cans) {
//     this.paint_stock += paint_cans;
// }
// Decorator.prototype.addPaintCan = function(paint_cans) {
//     this.paint_stock += paint_cans;
// }

module.exports = Decorator;


// A decorator should:

// start with an empty paint stock
// be able to add a can of paint to paint stock
// be able to calculate total litres paint it has in stock
// be able to calculate whether is has enough paint to paint a room
// be able to paint room if has enough paint in stock