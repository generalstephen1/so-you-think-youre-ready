import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(thing){
        if (thing.intent.url === '/ig-knowledge/'){
            this.transitionTo('ig-knowledge.item', 'asset-classes-and-markets');
        }
    }
});
