import { v4 } from 'uuid';

export const authFormFields = {
    loginForm: {
        fields: [
            {
                type: "text",
                name: "username",
                id: v4(),
            },
            {
                type: "password",
                name: "password",
                id: v4(),
            },
        ],
    },
    reminderForm: {
        fields: [
            {
                type: "text",
                name: "username",
                id: v4(),
            },
            {
                type: "email",
                name: "email",
                id: v4(),
            },
        ],
    },
};
