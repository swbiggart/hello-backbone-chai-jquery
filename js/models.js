//var Backbone = require('backbone');

var App = {};

App.Item = Backbone.Model.extend({
  defaults: {
    part1: 'hello',
    part2: 'world'
  }
});