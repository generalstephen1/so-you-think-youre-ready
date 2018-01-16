import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        loadPoint(index){
            this.get('loadPoint')(index)
        }
    }
});
