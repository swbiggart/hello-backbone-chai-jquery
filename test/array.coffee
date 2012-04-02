describe 'Array', ->
  describe '#indexOf()', ->
    it 'should return -1 when the value is not present', ->
      arr = [1,2,3]
      assert.equal -1, arr.indexOf(5)

    it 'should be pending'

    it 'should return the correct index when the value is present', ->
      arr = [1,2,3]
      assert.equal 0, arr.indexOf(1)
      assert.equal 1, arr.indexOf(2)


describe 'Array', ->
  describe '#pop()', ->
    it 'should adjust .length', ->
      arr = [1,2,3]
      arr.pop()
      assert.equal arr.length, 2
