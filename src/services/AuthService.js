import { httpService } from "./HttpService";

class AuthService {

    constructor() {
        this.axiosInstance = httpService.axiosInstance;
        this.setAxiosAuthorizationHeader();
    }

    setAxiosAuthorizationHeader(tokenParam = null) {
        try {
            let token = tokenParam ? tokenParam : localStorage.getItem("token");

            if (token) {
                this.axiosInstance.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${token}`;
            }
        } catch (error) { }
    }
    async register(data) {
        try {
            let response = await this.axiosInstance.post("/register", data);
            console.log(response);
            if (response.data.status === "success") {
                localStorage.setItem("token", response.data.authorization.token);
                this.setAxiosAuthorizationHeader(response.data.authorization.token);
                return response.data;
            }
        } catch (error) {
            console.error(error);
        }
    }

    async login(data) {

        try {
            let response = await this.axiosInstance.post("/login", data);
            if (response.data) {
                localStorage.setItem("token", response.data.authorization.token);
                this.setAxiosAuthorizationHeader(response.data.authorization.token);
                return response.data
            }
        } catch (error) { }
    }


    async logout() {
        let response = await this.axiosInstance.post("./logout");
        if (response.data) {
            localStorage.removeItem("token");
            return response.data;
        }
    }

    async refresh() {
        try {
            const response = await this.axiosInstance.post("/refresh");

            if (response.data) {
                localStorage.setItem("token", response.data.authorization.token);
                this.setAxiosAuthorizationHeader(response.data.authorization.token);
                return response.data;

            }
            throw new Error('No response.data');
        } catch (error) {
            console.error(error);
        }
    }
}

export const authService = new AuthService();