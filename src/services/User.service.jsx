import axios from "axios"

export const getUser = () => {
    return axios.get("http://localhost:8080/v1/user");
}