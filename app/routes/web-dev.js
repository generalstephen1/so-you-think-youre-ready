import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        this.transitionTo('web-dev.item', 'well-structured-html');
    }
});
