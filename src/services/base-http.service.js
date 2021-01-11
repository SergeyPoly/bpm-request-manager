import axios from "axios";

export default class BaseHttpService {

    BASE_URL = "https://bpm.codot.pro:443";

    _accessToken = null;

    _tenantId = null;

    _username = null;

    async get(endpoint = "", options = {}) {
        Object.assign(options, this._getCommonOptions());
        return axios
            .get(`${this.BASE_URL}/${endpoint}`, options)
            .then((res) => res.data)
            .catch((error) => this._handleHttpError(error));
    }

    async post(endpoint = "", data = {}, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return axios
            .post(`${this.BASE_URL}/${endpoint}`, data, options)
            .then((res) => {
                return {data: res.data, status: res.status}
            })
            .catch((error) => this._handleHttpError(error));
    }

    async put(endpoint = "", data = {}, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return axios
            .put(`${this.BASE_URL}/${endpoint}`, data, options)
            .catch((error) => this._handleHttpError(error));
    }

    async delete(endpoint = "", options = {}) {
        Object.assign(options, this._getCommonOptions());
        return axios
            .delete(`${this.BASE_URL}/${endpoint}`, options)
            .then((res) => res.data)
            .catch((error) => this._handleHttpError(error));
    }

    async patch(endpoint = "", data = {}, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return axios
            .patch(`${this.BASE_URL}/${endpoint}`, data, options)
            .catch((error) => this._handleHttpError(error));
    }

    _handleHttpError(error) {
        const { status } = error.response;
        if (status !== 401) {
            throw error;
        } else {
            return this._handle401();
        }
    }

    _handle401 = () => {
        this._accessToken = null;
        this._tenantId = null;
        this._username = null;
        this.removeTenantData();
        window.location.replace("/");
    };

    _getCommonOptions = () => {
        const { accessToken } = this.loadAccessToken();

        return {
            headers: {
                'Authorization': `Basic ${accessToken}`,
            },
        };
    };

    get accessToken() {
        return this._accessToken ? this._accessToken : this.loadAccessToken();
    }

    loadAccessToken() {
        const accessToken = localStorage.getItem("accessToken");
        this._accessToken = accessToken;

        return {
            accessToken,
        };
    }

    get username() {
        return this._username ? this._username : this.loadUsername();
    }

    loadUsername() {
        const username = localStorage.getItem("username");
        this._username = username;

        return {
            username,
        };
    }

    get tenantId() {
        return this._tenantId ? this._tenantId : this.loadTenantId();
    }

    loadTenantId() {
        const tenantId = localStorage.getItem("tenantId");
        this._tenantId = tenantId;

        return {
            tenantId,
        };
    }

    saveTenantData = (username, tenantId, accessToken) => {
        this._username = username;
        this._accessToken = accessToken;
        this._tenantId = tenantId;
        localStorage.setItem("username", username);
        localStorage.setItem("tenantId", tenantId);
        localStorage.setItem("accessToken", accessToken);

        return {
            username,
            tenantId,
            accessToken
        };
    };

    removeTenantData = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("tenantId");
        localStorage.removeItem("accessToken");
    };
}
