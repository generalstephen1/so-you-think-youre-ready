import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(thing){
        if (thing.intent.url === '/web-dev/'){
            this.transitionTo('web-dev.item', 'well-structured-html');
        }
    }
});
