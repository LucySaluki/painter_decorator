const assert = require('assert');

//const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
//const Room = require('../room.js');

describe("Paint Can tests", function(){

    it("can is empty",function(){
        const new_can = new PaintCan(0);
        const actual = new_can.litres;
        assert.strictEqual(actual,0);
    })
})

