suite('Array', function(){
  setup(function(){
    // ...
  });

  teardown(function(){
    // ...
  });

  suite('#indexOf()', function(){
    test('should return -1 when not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    test('should be pending');

    test('should return the correct index when the value is present', function(){
      var arr = [1,2,3];
        assert.equal(0, arr.indexOf(1)); // just to test indentation
      assert.equal(1, arr.indexOf(2));
    });
  });
  
  suite('#pop()', function(){
    test('should remove and return the last value', function(done){
      var arr = [1,2,3];
      assert.equal(arr.pop(), 3);
      setTimeout(function(){
        doesNotExist();
      }, 0);
    });

    test('should adjust .length', function(){
      var arr = [1,2,3];
      arr.pop();
      assert.equal(arr.length, 2);
    });
  });
  
});
