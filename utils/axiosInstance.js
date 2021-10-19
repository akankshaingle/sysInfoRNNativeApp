import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ca9c-2409-4043-2115-50aa-38b8-379f-653c-d8e1.ngrok.io',
    timeout: 3000,
    timeoutErrorMessage: 'Server down...Please try again.',
});

export default axiosInstance;
// json-server db.json -m ./node_modules/json-server-auth
//open ngrok enter: ngrok http 3000