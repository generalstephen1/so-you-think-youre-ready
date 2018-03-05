import { helper } from '@ember/component/helper';

export function slugify(params/*, hash*/) {
    return params.toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
}

export default helper(slugify);
