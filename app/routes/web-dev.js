import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        this.transitionTo('web-dev.item', 'well-structured-html');
    }
});
