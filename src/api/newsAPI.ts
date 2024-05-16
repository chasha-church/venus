import { chashaChurchInstance } from './chashaChurchInstance';

export const newsAPI = {
    async getNews(pageSize: number, page: number) {
        return chashaChurchInstance.get(
            `/news/?page_size=${pageSize}&page=${page}`
        );
    },
    async getNewsDetails(newsContentId: string) {
        return chashaChurchInstance.get(`/news/${newsContentId}/`);
    },
};
