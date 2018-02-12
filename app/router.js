import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ember', function(){
    this.route('item', { path: '/:slug' });
  });
  this.route('testing', function(){
    this.route('item', { path: '/:slug' });
  });
  this.route('web-dev', function(){
    this.route('item', { path: '/:slug' });
  });
  this.route('ig-knowledge', function(){
    this.route('item', { path: '/:slug' });
  });
  this.route('general-js', function(){
    this.route('item', { path: '/:slug' });
  });
  this.route('tooling', function(){
    this.route('item', { path: '/:slug' });
  });
});

export default Router;
