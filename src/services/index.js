import axios from "axios";

const api = axios.create({
    baseURL: '' //inserir aqui a bseURL para utilizar para as requisiçoes
})

export default api