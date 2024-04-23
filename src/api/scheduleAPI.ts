import { chashaChurchInstance } from './chashaChurchInstance';

export const scheduleAPI = {
    async getWeekSchedule(week: number) {
        return chashaChurchInstance.get(`/schedule/?week=${week}`);
    },
};
