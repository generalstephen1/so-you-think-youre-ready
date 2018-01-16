import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'route-entrypoint',

    model(){
        return {
            title: `Knowledge of IG`,
            points: [
                {
                    'title': 'I am an intersting thing',
                    'content-type': 'text',
                },{
                    'title': 'I am another interesting thing',
                    'content-type': 'text',
                },
            ]
        }
    }
});
