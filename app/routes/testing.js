import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        this.transitionTo('testing.item', 'unit-integration-acceptance');
    }
});
