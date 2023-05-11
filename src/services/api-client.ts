import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "435cd1df7f3c43ec837a2aaec02bd31c",
    },
});