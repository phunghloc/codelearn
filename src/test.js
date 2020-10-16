const axios = require('axios');

const url = 'https://my-burger-phl.firebaseio.com/';

axios.get(url + 'allpractice/-MJm_TjXnqsOJ3WqEGIB.json')
    .then(res => console.log(res.data))
    .catch(() => console.log('error'));