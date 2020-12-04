import axios from "axios";
import { loginCreator } from '../../../app/store/action-creators';

const options = {
    headers: {
        'Authorization': 'Basic dGVzdFVzZXI6dGVzdFBhc3N3b3Jk',
        'Content-Type': 'application/json'
    }
};

export const getUserThunkCreator = ({username, password}) => {
    return (
        async (dispatch) => {
            try {
                const response = await axios.post("https://bpm.codot.pro/engine-rest/identity/verify", {
                    username: username,
                    password: password
                }, options);
                if (response.data.authenticated) {
                    dispatch(loginCreator(response.data.authenticatedUser));
                } else {
                    console.log(`wrong password!`);
                }
            } catch (e) {
                console.log(`Axios request failed: ${e}`);
            }}
    )
};

