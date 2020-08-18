const Room = function(area, isPainted){
    this.area = area;
    this.isPainted = false;
}

Room.prototype.painted = function(){
    this.isPainted = true;
}

Room.prototype.paintedByAmount = function(amount){
    this.area += amount;
}


module.exports = Room;

