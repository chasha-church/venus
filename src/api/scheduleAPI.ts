import { chashaChurchInstance } from './chashaChurchInstance';

export const scheduleAPI = {
    async getWeekSchedule(week: number) {
        return chashaChurchInstance.get(`/schedules/?week=${week}`)
    },
}
