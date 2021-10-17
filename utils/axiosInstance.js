import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://2c6d-2409-4043-2115-50aa-81bb-11ec-b133-980c.ngrok.io',
    timeout: 3000,
    timeoutErrorMessage: 'Server down...Please try again.',
});

export default axiosInstance;
// json-server db.json -m ./node_modules/json-server-auth
//open ngrok enter: ngrok http 3000