import axios from 'axios'
import { apiKey } from '../secret/keys';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: apiKey,
        language: 'es-ES'
    }
});

export default movieDB;