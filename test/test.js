var assert = require("assert"); // node.js core module
var C = require('../index');

describe('ChangeCalculator', function(){
  describe('Basic Test', function(){
    it('getChange(210,300) should equal [50,20,20]', function(){
      assert.deepEqual(C.getChange(210,300), [50, 20, 20]);
    })
  })
})

it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
        assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
})

 it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
        assert.deepEqual(C.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
})

 it('getChange("random","str") to return [] (empty array)', function(){
        // assert.throw(C.getChange("random","str"), Error, "totalPayable and cashPaid MUST both be numbers");
        assert.deepEqual(C.getChange("random","str"), []);

    })
