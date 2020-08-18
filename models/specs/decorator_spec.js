const assert = require('assert');

const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe("Paint Can tests", function(){
    
    it("can is empty",function(){
        const new_can = new PaintCan(0);
        const actual = new_can.litres;
        assert.strictEqual(actual,0);
    })

    it("empty can by amount",function(){
        const new_can = new PaintCan(6);
        new_can.emptyByAmount(4);
        const actual = new_can.litres;
        assert.strictEqual(actual,2);
    })

})

describe("Room testing",function(){
    it("check room area", function(){
        const a_room = new Room(10,0);
        const actual = a_room.area;
        assert.strictEqual(actual,10);
    })
    it("check room is not painted", function(){
        const a_room = new Room(10,0);
        const actual = a_room.painted_area;
        assert.strictEqual(actual,0);
    })
    it("should be able to be painted", function(){
        const a_room = new Room(10,4);
        const actual = a_room.painted();
        assert.strictEqual(actual,true);
    })

describe("Decorator testing", function(){
    it("start with empty paint stock")
})
})

