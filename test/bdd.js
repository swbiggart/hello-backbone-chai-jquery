describe('Should', function(){
  describe('Models', function(){
    describe('Item', function(){
      it('should have default values when created empty', function(){
        var item = new App.Item();
        item.get('part1').should.equal('hello');
        item.get('part2').should.equal('world');
      });
    
      it('should have set values when created non-empty', function(){
        var item = new App.Item({part1: 'HOWDY', part2: 'EARTH'});
        item.get('part1').should.equal('HOWDY');
        item.get('part2').should.equal('EARTH');
      });
    });
  });

  describe('Views', function(){
    describe('Item', function(){
      var item = {},
          itemView = {};
    
      beforeEach(function(){
        this.item = new App.Item({part1: 'HOWDY', part2: 'EARTH'});
        this.itemView = new App.ItemView({
          model: this.item
        });
      });
    
      it('should swap values', function(){
        this.itemView.swap();
        this.itemView.model.get('part1').should.equal('EARTH');
        this.itemView.model.get('part2').should.equal('HOWDY');
        //swap again
        this.itemView.swap();
        this.itemView.model.get('part1').should.equal('HOWDY');
        this.itemView.model.get('part2').should.equal('EARTH');
      
      
      });

    });
  
    describe('List', function(){
      var listView = {};
    
      beforeEach(function(){
        this.listView = new App.ListView();
      });
    
      it('should add an item', function(){
        this.listView.addItem();
        this.listView.counter.should.equal(1);
        this.listView.collection.should.have.length(1);
      });

    });
  
  });
  describe('Spies', function(){

    before(function(){
      sinon.spy($, "ajax");
    });
    
    after(function(){
      $.ajax.restore(); // Unwraps the spy
    });
    
    it('test should inspect jQuery.getJSON\'s usage of jQuery.ajax', function(){
      $.getJSON("/some/resource");

      $.ajax.should.have.been.calledOnce;
      
      $.ajax.getCall(0).args[0].url.should.equal("/some/resource");
      $.ajax.getCall(0).args[0].dataType.should.equal("json");
      
    });
    
  });
});

describe('Assert', function(){
  describe('Models', function(){
    describe('Item', function(){
      it('should have default values when created empty', function(){
        var item = new App.Item();
        assert.equal(item.get('part1'), 'hello');
        assert.equal(item.get('part2'), 'world');

      });
    
      it('should have set values when created non-empty', function(){
        var item = new App.Item({part1: 'HOWDY', part2: 'EARTH'});
        assert.equal(item.get('part1'), 'HOWDY');
        assert.equal(item.get('part2'), 'EARTH');
      });
    });
  });

  describe('Views', function(){
    describe('Item', function(){
      var item = {},
          itemView = {};
    
      beforeEach(function(){
        this.item = new App.Item({part1: 'HOWDY', part2: 'EARTH'});
        this.itemView = new App.ItemView({
          model: this.item
        });
      });
    
      it('should swap values', function(){
        this.itemView.swap();
        assert.equal(this.itemView.model.get('part1'), 'EARTH');
        assert.equal(this.itemView.model.get('part2'), 'HOWDY');
        //swap again
        this.itemView.swap();
        assert.equal(this.itemView.model.get('part1'), 'HOWDY');
        assert.equal(this.itemView.model.get('part2'), 'EARTH');
      
      });

    });
  
    describe('List', function(){
      var listView = {};
    
      beforeEach(function(){
        this.listView = new App.ListView();
      });
    
      it('should add an item', function(){
        this.listView.addItem();
        //assert
        assert.equal(this.listView.counter, 1);
        assert.length(this.listView.collection, 1);
      });

    });
  
  });
});

describe('Expect', function(){
  describe('Models', function(){
    describe('Item', function(){
      it('should have default values when created empty', function(){
        var item = new App.Item();
        expect(item.get('part1')).to.equal('hello');
        expect(item.get('part2')).to.equal('world');
      });
    
      it('should have set values when created non-empty', function(){
        var item = new App.Item({part1: 'HOWDY', part2: 'EARTH'});

        //OR expect style
        expect(item.get('part1')).to.equal('HOWDY');
        expect(item.get('part2')).to.equal('EARTH');
      
      });
    });
  });

  describe('Views', function(){
    describe('Item', function(){
      var item = {},
          itemView = {};
    
      beforeEach(function(){
        this.item = new App.Item({part1: 'HOWDY', part2: 'EARTH'});
        this.itemView = new App.ItemView({
          model: this.item
        });
      });
    
      it('should swap values', function(){
        this.itemView.swap();
        expect(this.itemView.model.get('part1')).to.equal('EARTH');
        expect(this.itemView.model.get('part2')).to.equal('HOWDY');
        //swap again
        this.itemView.swap();
        expect(this.itemView.model.get('part1')).to.equal('HOWDY');
        expect(this.itemView.model.get('part2')).to.equal('EARTH');
      });

    });
  
    describe('List', function(){
      var listView = {};
    
      beforeEach(function(){
        this.listView = new App.ListView();
      });
    
      it('should add an item', function(){
        this.listView.addItem();
        //expect
        expect(this.listView.counter).to.equal(1);
        expect(this.listView.collection).to.have.length(1);
      });

    });
  
  });
});