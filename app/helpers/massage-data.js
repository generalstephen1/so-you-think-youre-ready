import Ember from 'ember';
import {slugify} from './text-helpers';

export function massage(item, category) {
  const newPoints = {
    title: item.title,
    points: Ember.A(),
  };

  item.points.forEach(item => {
      let newItem = Ember.Object.create(item);

      newItem.set('slug', slugify(newItem.get('shortTitle')));
      newItem.set('cat', category);

      newPoints.points.pushObject(newItem);
  });

  return newPoints
}

export default Ember.Helper.helper(massage);
