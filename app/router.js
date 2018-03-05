import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ember', function(){
    this.route('item', { path: '/:slug' }, function() {
      this.route('comments', {resetNamspace: true});
    });
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


  this.route('404', {
    path: '*'
  });
});

export default Router;
