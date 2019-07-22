/* import axios from 'axios'; */

const axios = require('axios');


    /* axios.get('https://api.coincap.io/v2/assets')
    .then(console.log)
    .catch(console.log) */


    async function fetchCoins(){
        const result = await axios.get('https://api.coincap.io/v2/assets')
        console.log(result.data.data)
    }

    fetchCoins();