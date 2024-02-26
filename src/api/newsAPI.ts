import { chashaChurchInstance } from './chashaChurchInstance';

export const newsAPI = {
    async getNews(pageSize: number, page: number) {
        return chashaChurchInstance.get(`/news/?page_size=${pageSize}&page=${page}`)
    },
}
