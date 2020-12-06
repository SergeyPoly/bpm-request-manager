import axios from "axios";
import {
    loginCreator,
    setErrorMessageCreator,
} from '../../../app/store/action-creators';

export const getUserThunkCreator = ({username, password}) => {
    const authBasicHeader = `Basic ${btoa(`${username.toString()}:${password.toString()}`)}`;
    const options = {
        headers: {
            'Authorization': authBasicHeader,
            'Content-Type': 'application/json'
        }
    };

    return (
        async (dispatch) => {
            try {
                const response = await axios.get(`https://bpm.codot.pro:443/engine-rest/tenant?userMember=${username}`, options);
                response.data[0].authorization = authBasicHeader;
                const localTenantData = JSON.stringify(response.data[0]);
                localStorage.setItem('tenantId', localTenantData);
                dispatch(loginCreator(username));
            } catch (e) {
                dispatch(setErrorMessageCreator('wrong login or password!'));
            }
        }
    )
};

