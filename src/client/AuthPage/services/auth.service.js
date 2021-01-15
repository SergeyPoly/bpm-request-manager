import axios from 'axios';
import BaseHttpService from '../../../services/base-http.service';

export default class AuthService extends BaseHttpService {
    async login({ username, password }) {
        const accessToken = `${btoa(`${username.toString()}:${password.toString()}`)}`;
        const options = {
            headers: {
                'Authorization': `Basic ${accessToken}`,
            },
        };
        const { data } = await axios.get(`${this.BASE_URL}/tenant?userMember=${username}`, options);
        const tenantId = data[0].id;
        this.saveTenantData(username, tenantId, accessToken);
        return data[0];
    }

    logout() {
        this.removeTenantData();
    }
};
