//setup for App

//creating a document is needed for the View.make private method in Backbone
global.document = require('jsdom').jsdom('<html><body></body></html>');

//if we need a window object, this is how you create it
//global.window = global.document.createWindow();

//attach necessary global objects to be used by our code
global.$ = global.jQuery = require('jquery');
global._ = require('underscore');

//serverside backbone needs some extra help to see the jQuery library 
global.Backbone = require('backbone');
global.Backbone.setDomLibrary(global.$);

//pull in backbone app
global.App = require('../js/app');

//setup for testing framework
global.sinon = require("sinon");
global.chai = require("chai");
global.assert = chai.assert;
global.should = require("chai").should();
global.expect = require("chai").expect;
global.AssertionError = require("chai").AssertionError;

//add sinon assertion types
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var chai_jquery = require('./lib/chai-jquery.js');
chai.use(chai_jquery);