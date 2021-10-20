import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://0948-2409-4043-2e97-76f7-e1a0-3b0a-e658-d1df.ngrok.io',
    timeout: 3000,
    timeoutErrorMessage: 'Server down...Please try again.',
});

export default axiosInstance;
// json-server db.json -m ./node_modules/json-server-auth
//open ngrok enter: ngrok http 3000