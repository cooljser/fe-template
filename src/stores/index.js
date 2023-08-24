import {fisrtToLowercase} from '~/utils/tools';

const stores = {};

function getStores(context) {
  const keys = context.keys();
  keys.forEach(k => {
    if (k !== './index.js') {
      const match = k.match(/\.\/([a-zA-Z]*)*\./);
      if (!!match && match.length >= 1) {
        const storeName = fisrtToLowercase(match[1]);
        stores[storeName] = context(k).default || context(k);
      }
    }
  });
}

getStores(require.context('./', false, /Store\.(js|ts)$/));

export default stores;
