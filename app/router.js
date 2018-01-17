import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ig-knowledge', function(){
    this.route('ig-knowledge', { path: '/:point' })
  });
  this.route('ember', { path: 'ember' }, function(){
    this.route('ember', { path: '/:point' });
  });
  this.route('testing', { path: 'testing' }, function(){
    this.route('testing', { path: '/:point' });
  });
  this.route('web-dev', { path: 'web-dev' }, function(){
    this.route('web-dev', { path: '/:point' });
  });
  this.route('general-js', { path: 'general-js' }, function(){
    this.route('general-js', { path: '/:point' });
  });
  this.route('tooling');
});

export default Router;
