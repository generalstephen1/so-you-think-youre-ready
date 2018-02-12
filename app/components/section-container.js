import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        loadPoint(whatPoint) {
          this.set('currentContentID', whatPoint)
        }
      }
});
