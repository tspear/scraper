const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://artuk.org/discover/artworks/david-pye-19141993-147111';

axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
               const masonry = $('.masonry-item > h5');
               console.log(masonry.length);
             })
      .catch(console.error);
