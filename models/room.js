const Room = function(area, painted_area){
    this.area = area;
    this.painted_area = 0;
}

Room.prototype.painted = function(){
    if (this.area - this.painted_area > 0){
        return true;
    } 
    else {
        return false;
    }
}

Room.prototype.paintedByAmount = function(amount){
    this.painted_area += amount;
}


module.exports = Room;

