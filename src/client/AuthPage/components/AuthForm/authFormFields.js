import { v4 } from 'uuid';

export const authFormFields = {
    loginForm: {
        fields: [
            {
                type: "text",
                name: "username",
                label: "Ім'я користувача",
                id: v4(),
            },
            {
                type: "password",
                name: "password",
                label: "Пароль",
                id: v4(),
            },
        ],
        submitText: "Увійти"
    },
    reminderForm: {
        fields: [
            {
                type: "text",
                name: "username",
                label: "Ім'я користувача",
                id: v4(),
            },
            {
                type: "email",
                name: "email",
                label: "Email",
                id: v4(),
            },
        ],
        submitText: "Нагадати",
    },
};
