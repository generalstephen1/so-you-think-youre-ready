import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        this.transitionTo('ember.item', 'url-mapping-decoupled-folder-structure');
    }
});