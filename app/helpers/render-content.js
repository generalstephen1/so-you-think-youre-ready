import Ember from 'ember';

export function renderContent(params/*, hash*/) {
  const activeModule = params[0][params[1]];

  return activeModule;
}

export default Ember.Helper.helper(renderContent);
