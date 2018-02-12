import Ember from 'ember';

export function slugify(params/*, hash*/) {
    return params.toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
}

export default Ember.Helper.helper(slugify);
