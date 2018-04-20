import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(thing){
        if (thing.intent.url === '/ember/'){
            this.transitionTo('ember.item', 'url-mapping-decoupled-folder-structure');
        }
    }
});