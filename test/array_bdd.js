describe('Array', function(){
  describe('#indexOf()', function(){
    
    before(function(){
      // ...
    });
    
    after(function(){
      // ...
    });
    
    beforeEach(function(){
      // ...
    });
    
    afterEach(function(){
      // ...
    });
        
    it('should return -1 when the value is not present', function(){
      var arr = [1,2,3];
      assert.equal(-1, arr.indexOf(5));
    })

    it('should be pending')

    it('should return the correct index when the value is present', function(){
      var arr = [1,2,3];
        assert.equal(0, arr.indexOf(1)); // just to test indentation
      assert.equal(1, arr.indexOf(2));
    })
  })
})

describe('Array', function(){
  describe('#pop()', function(){
    it('should remove and return the last value', function(done){
      var arr = [1,2,3];
      assert.equal(arr.pop(), 3);
      setTimeout(function(){
        doesNotExist();
      }, 0);
    })

    it('should adjust .length', function(){
      var arr = [1,2,3];
      arr.pop();
      assert.equal(arr.length, 2);
    })
  })
})