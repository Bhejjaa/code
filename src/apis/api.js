import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

// creating test api
export const testApi = () => Api.get("/test");
export const testnewApi = () => Api.get("/test_new");

// creating register api
export const registerUserApi = (data) => Api.post("api/user/register", data)