import { chashaChurchInstance } from './chashaChurchInstance';

export const authAPI = {
    async signin(login: string, password: string) {
        return chashaChurchInstance.post(`/auth/signin`, {
            login,
            password,
        });
    },
};
