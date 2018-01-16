import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'route-entrypoint',

    model(){
        return {
            title: 'Testing',
            points: [
                {
                    'title': 'I am an intersting thing',
                    'content-type': 'text',
                },{
                    'title': 'I am another intersting thing',
                    'content-type': 'text',
                },
            ]
        }
    }
});
