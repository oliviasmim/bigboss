import axios from 'axios';

//Alterar quando fizer deploy da API
const api = axios.create({
	baseURL: "http://localhost:3001",
});

export default api;