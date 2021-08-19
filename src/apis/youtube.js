import axios from 'axios';
const KEY = 'AIzaSyAQ_bqAsYafFkT3T5vOTfdPj04P_2StAwg';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

