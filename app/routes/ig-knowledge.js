import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        this.transitionTo('ig-knowledge.item', 'asset-classes-and-markets');
    }
});
