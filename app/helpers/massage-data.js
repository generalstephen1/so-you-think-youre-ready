import { A } from '@ember/array';
import Object from '@ember/object';
import { helper } from '@ember/component/helper';

import {slugify} from './text-helpers';

export function massage(item, category) {
  const newPoints = {
    title: item.title,
    points: A(),
    totalPoints: 0,
    completedPoints: 0,
  };

  item.points.forEach(item => {
      let newItem = Object.create(item);
      let newTitle = newItem.get('approved') ? newItem.get('shortTitle') : `${newItem.get('shortTitle')} ✓`;
      const pointValue = item.pointValue || 1;

      newItem.set('slug', slugify(newItem.get('shortTitle')));
      newItem.set('cat', category);
      newItem.set('numberOfStars', new Array(newItem.get('level')));
      newItem.set('menuTitle', newTitle)

      if (newItem.get('approved')) {
        newPoints.completedPoints += pointValue;
      }

      newPoints.totalPoints += pointValue;
      newPoints.points.pushObject(newItem);
  });


  return newPoints
}

export default helper(massage);
