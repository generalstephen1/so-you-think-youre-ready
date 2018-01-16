import Component from '@ember/component';

export default Component.extend({
    /*
    WHEN:   Runs once on instatiation of this component
    USE:
    EXAMPLE:
    */
    init() {
        this._super(...arguments);

    },

    /*
    WHEN:   Runs after init and on subsequent re-renders (unless this has been
            triggered internally) if the components attributes have changed.
    USE:    Can be thought of as an observer, runs logic every time an attribute
            changes.
    EXAMPLE:If you have some data in an attr that may change type but should be
            internally consistent within the component, checks and conversion can
            happen here.
    */
    didReceiveAttrs() {
        this._super(...arguments);

    },

    /*
    WHEN:   Called during both render and re-render after template has rendered
            and DOM has updated.
    USE:    Usually used to perform post processing on the DOM after it's been
            updated.
    EXAMPLE:After causing a re-render on a long list, finding the currently
            selected option and scrolling to that position.
    */
    didRender() {
        this._super(...arguments);

    },

    /*
    WHEN:   Called once the component has finished updating itself
    USE:    (Re)enable fields that relied on a component updating
    EXAMPLE:A submit button is desabled on action, enabled once the
            return from submission updates a field on the form.
    */
    didUpdate() {
        this._super(...arguments);

    },

    /*
    WHEN:   Prior to a re-render that is triggered by an attr change (not a
            forced re-render via `component.rerender`).
    USE:    To execute code when a specific attr changes, can be an effective
            alternative to an observer.
    EXAMPLE:Useful for fixing validation UI notifications, IE an invalid input
            warning that then becomes valid.
    */
    didUpdateAttrs() {
        this._super(...arguments);

    },

    /*
    WHEN:   Once the component's element has been inserted into the DOM
            AND is accessible via the components $() method
    USE:    Initialising anything that requires a DOM node to bind to.
    EXAMPLE:Adding a third party date picker to a form.
    */
    didInsertElement() {
        this._super(...arguments);

    },

    /*
    WHEN:   After component is destroyed
    USE:
    EXAMPLE:
    */
    didDestroyElement() {
        this._super(...arguments);

    },

    /*
    WHEN:   On both render and re-render this is called when
    USE:
    EXAMPLE:
    */
    willRender() {
        this._super(...arguments);

    },

    /*
    WHEN:   On re-render this is called before the component updates
    USE:
    EXAMPLE:
    */
    willUpdate() {
        this._super(...arguments);

    },

    /*
    WHEN:   When a component detects that it should remove itself from the DOM
    USE:    Run teardown logic for that component.
    EXAMPLE:Removing listeners for elements within a component before it is
            destroyed. Updating UI based on elements existing/being destroyed.
    */
    willDestroyElement() {
        this._super(...arguments);

    },

    /*
    WHEN:   Called when a component is about to re-render but before any teardown
            has occurred.
    USE:    A good time to tear down things that relied on DOM state
    EXAMPLE:Tear down manual observers attached to DOM state.
    */
    willClearRender() {
        this._super(...arguments);

    },
});
