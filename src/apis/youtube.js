import axios from 'axios';
const KEY = 'AIzaSyDuiDpUIJiS07g4gLcMlP1RlTLXVRoEpaY'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})