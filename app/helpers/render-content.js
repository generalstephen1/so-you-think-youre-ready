import { helper } from '@ember/component/helper';

export function renderContent(params/*, hash*/) {
  const activeModule = params[0][params[1]];

  return activeModule;
}

export default helper(renderContent);
