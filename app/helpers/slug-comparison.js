import Ember from 'ember';

export function slugComparison(curData, slug) {
  let activeContent = curData.points.filter((datum) => { return datum.slug === slug })[0];
  const rawNavData = [
    {FN: 'JS',      route: 'general-js',  slug:'inheritance'         ,         classes: 'mdl-tabs__tab'},
    {FN: 'Web',     route: 'web-dev',     slug:'well-structured-html',         classes: 'mdl-tabs__tab'},
    {FN: 'Ember',   route: 'ember',       slug:'url-mapping-decoupled-folder-structure',           classes: 'mdl-tabs__tab'},
    {FN: 'Tooling', route: 'tooling',     slug:'cloneforkcreate',              classes: 'mdl-tabs__tab'},
    {FN: 'IG',      route: 'ig-knowledge',slug:'asset-classes-and-markets',    classes: 'mdl-tabs__tab'},
    {FN: 'Testing', route: 'testing',     slug:'unit',                         classes: 'mdl-tabs__tab'},
  ]

  if (!activeContent && curData) {
    activeContent = curData[0];
  }

  let activeNavItem = rawNavData.filter(navItem => navItem.route === activeContent.cat)[0]

  if (activeNavItem) {
      activeNavItem.classes = ('mdl-tabs__tab mdl-tabs__tab--active')
  }

  return {
      data: curData.points,
      activeContent,
      navData:rawNavData,
  }
}

export default Ember.Helper.helper(slugComparison);
