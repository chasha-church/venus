export const DateHelper = {
    getWeekNumber() {
        return Math.floor(this.getDaysFromYearStart() / 7) + 1;
    },
    getDaysFromYearStart() {
        const date = new Date();

        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        const currentDay = date.getDate();

        /* Constructor: new Date(year, month, day) */
        const startDate = new Date(currentYear, 0, 1); // January 1st
        const currentDate = new Date(currentYear, currentMonth, currentDay);

        const dateDif = Number(currentDate) - Number(startDate);

        return Math.floor(dateDif / (24 * 60 * 60 * 1000));
    },
}
