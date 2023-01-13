'use strict';

module.exports = {
  name: require('./package').name,

  contentFor(type) {
    if (type === 'head-footer' && process.env.VERCEL_ENV === 'production') {
      return `<script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="PPQLJJKK" data-excluded-domains="localhost" defer></script>`;
    }
  },
};
