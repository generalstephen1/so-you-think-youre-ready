import Ember from 'ember';

export default Ember.Component.extend({
    currentContentID: 0,
    actions: {
        loadPoint(whatPoint) {
          this.set('currentContentID', whatPoint)
        }
      }
});
