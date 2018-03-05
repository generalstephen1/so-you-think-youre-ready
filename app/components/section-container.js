import Component from '@ember/component';

export default Component.extend({
    actions: {
        loadPoint(whatPoint) {
          this.set('currentContentID', whatPoint)
        }
      }
});
