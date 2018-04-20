import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(thing){
        if (thing.intent.url === '/general-js/'){
            this.transitionTo('general-js.item', 'inheritance');
        }
    }
});
