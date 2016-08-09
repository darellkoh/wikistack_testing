var chai = require('chai'); 
var expect = chai.expect; 
var spies = require('chai-spies'); 
chai.use(spies); 
var users = require('../routes/users'); 
var models = require('../models');
var Page = models.Page;


describe('Page model', function () {
  var page; 
  beforeEach(function(){
    page = Page.build(); 
  }); 

  describe('Virtuals', function () {
    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function(){
        console.log(page.title); 
        expect(page.urlTitle.substring(0, 6)).to.be.equal('/wiki/'); 
      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML', function(){

      });
    });
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});