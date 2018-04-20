import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel(thing){
        if (thing.intent.url === '/tooling/'){
            this.transitionTo('tooling.item', 'cloneforkcreate');
        }
    }
});
