import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(thing){
        if (thing.intent.url === '/testing/'){
            this.transitionTo('testing.item', 'unit-integration-acceptance');
        }
    }
});
