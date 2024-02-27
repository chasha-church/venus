export const DateHelper = {
    date: new Date(),
    getWeekNumber() {
        return Math.floor(this.getDaysFromYearStart() / 7) + 1;
    },
    getDaysFromYearStart() {
        const currentYear = this.date.getFullYear();
        const currentMonth = this.date.getMonth();
        const currentDay = this.getCurrentDay();

        /* Constructor: new Date(year, month, day) */
        const startDate = new Date(currentYear, 0, 1); // January 1st
        const currentDate = new Date(currentYear, currentMonth, currentDay);

        const dateDif = Number(currentDate) - Number(startDate);

        return Math.floor(dateDif / (24 * 60 * 60 * 1000));
    },
    getCurrentDay() {
        return this.date.getDate();
    }
}
