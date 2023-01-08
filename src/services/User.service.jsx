import axios from "axios"

export const getUser = () => {
    return axios.get("https://api.chucknorris.io/jokes/categories");
}