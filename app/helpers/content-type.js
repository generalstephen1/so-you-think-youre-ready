import Ember from 'ember';

export function contentType(params/*, hash*/) {
  const activeModule = params[0][params[1]];
  return activeModule.content || `Still working on ${activeModule.title}`;
}

export default Ember.Helper.helper(contentType);
