const PaintCan = function(litres) {
    this.litres = litres;
}

PaintCan.prototype.checkEmpty = function(){
    if (this.litres == 0){
        return true;
    }
}

PaintCan.prototype.emptyByAmount = function(amount){
    // maybe add a check empty condition
    this.litres -= amount;
}


module.exports = PaintCan;

// A paint can should:

// have a number of litres of paint
// be able to check if it is empty
// be able to empty itself of paint