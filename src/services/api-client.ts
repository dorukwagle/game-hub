import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "435cd1df7f3c43ec837a2aaec02bd31c",
    },
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (requestConfig?: AxiosRequestConfig) => 
        apiClient
            .get<FetchDataResponse<T>>(this.endpoint, { ...requestConfig })
            .then((res) => res.data);
    
}

export default ApiClient;
