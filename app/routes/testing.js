import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        this.transitionTo('testing.item', 'unit-integration-acceptance');
    }
});
