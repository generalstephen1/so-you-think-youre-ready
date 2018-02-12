import Ember from 'ember';

export function slugComparison(curData, slug) {
  const activeContent = curData.points.filter((datum) => { return datum.slug === slug });

  return {
      data: curData.points,
      activeContent: activeContent.length === 1 ? activeContent[0] : curData[0],
  }
}

export default Ember.Helper.helper(slugComparison);
