import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        this.transitionTo('ig-knowledge.item', 'asset-classes-and-markets');
    }
});
