import axios from 'axios';

const YOUTUBE_API_KEY = "AIzaSyD6elR6uz7DaN0F0GKdn4UIv-x_ibicOtA";

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_API_KEY
    }
});

export default youtube;
