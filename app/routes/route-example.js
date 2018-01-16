import Route from '@ember/routing/route';

// https://alexdiliberto.com/posts/ember-route-hooks-a-complete-look/

export default Route.extend({
    /*
    WHEN:   Fired with the transmission argument when Ember starts constructing
            the route transmission
    USE:    Stop the transmission from occurring
    EXAMPLE:Display a prompt if the user navigates away from a form with
            unsubmitted data.
    */
    willTransition() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - willTransition')

    },

    /*
    WHEN:   Triggered with a single transition argument BEFORE execution of the
            current routes model.
    USE:    Primarily to redirect to another route before model instantiation OR
            for triggering some async operations before model is resolved.
    EXAMPLE:if an unauthenticated user attempts an auth route we can save the
            transistion at this point and trigger a login.
    */
    beforeModel() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - beforeModel')

    },

    /*
    WHEN:   Once we have confirmed that this is the correct model for the route
    USE:    Called with params and transition args to convert the URL into the
            correct model for the context.
    EXAMPLE:
    */
    model() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - model')

    },

    /*
    WHEN:   Immediately after the routes model has been resolved
    USE:    Good place to run logic that requires info from the current model
    EXAMPLE:Routing to a child route that requires the ID from the model,
            eg. path: '/:post_id'
    */
    afterModel() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - afterModel')

    },

    /*
    WHEN:   Called with the model and transition args.
            Nearly identical to afterModel(), The main difference is that at the
            point redirect() is called the route should be considered "active"
    USE:    Good place to run logic that requires info from the current model
    EXAMPLE:same as afterModel()
    */
    redirect() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - redirect')

    },

    /*
    WHEN:   Triggered when the router completely exits a route
    USE:    Any work needed immediately before exiting a route
    EXAMPLE:Trigger analytics
    */
    deactivate() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - deactivate')

    },

    /*
    WHEN:   Triggered when the router enters a new route
    USE:    Any work needed immediately on a route being triggered
    EXAMPLE:Trigger analytics
    */
    activate() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - activate')

    },

    /*
    WHEN:   Called with the current route controller and the current model.
    USE:    Sole use is to set the model property of the controller to the
            corresponding template property named 'model'
    EXAMPLE:
    */
    setupController() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - setupController')

    },

    /*
    WHEN:   Called with the current route controller and the current model.
    USE:    Renders the routes template, configured with the current controller
            for the route.
    EXAMPLE:
    */
    renderTemplate() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - renderTemplate')

    },

    /*
    WHEN:   When the transistion has successfully completed.
    USE:    Logic running immediately after transistion has completed
    EXAMPLE:Analytics, setting/resetting component state
    */
    didTransistion() {
        this._super(...arguments);
        console.log('[ROUTE-HOOK] - didTransistion')

    },
});
