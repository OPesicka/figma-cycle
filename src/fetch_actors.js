const algoliasearch = require('algoliasearch/lite');
const dotenv = require('dotenv');
dotenv.config();

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);

const index = client.initIndex(process.env.ALGOLIA_PROD_INDEX_NAME);

const objectIDs = ['moJRLRc85AitArpNN', 'nFJndFXA5zjCTuudP'];

const attributesToRetrieve = [
    'title',
    'name',
    'username',
    'userFullName',
    'stats',
    'description',
    'pictureUrl',
    'userPictureUrl',
    'notice',
    'currentPricingInfo',
];

const searchOptions = {
    attributesToRetrieve,
}

const results = index.search()
    .then(response => {
        console.log(response.hits)
    })
    .catch(err => {
        console.log('err', err);
    });

console.log('results', results)
