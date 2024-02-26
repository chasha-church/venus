enum MONTHS {
    JANUARY = "января",
    FEBRUARY = "февраля",
    MARCH = "марта",
    APRIL = "апреля",
    MAY = "мая",
    JUNE = "июня",
    JULY = "июля",
    AUGUST = "августа",
    SEPTEMBER = "сентября",
    OCTOBER = "октября",
    NOVEMBER = "ноября",
    DECEMBER = "декабря",
};

export const getMonthName = (monthNumber: number): string => {
    switch (monthNumber) {
        case 1: {
            return MONTHS.JANUARY
        }
        case 2: {
            return MONTHS.FEBRUARY
        }
        case 3: {
            return MONTHS.MARCH
        }
        case 4: {
            return MONTHS.APRIL
        }
        case 5: {
            return MONTHS.MAY
        }
        case 6: {
            return MONTHS.JUNE
        }
        case 7: {
            return MONTHS.JULY
        }
        case 8: {
            return MONTHS.AUGUST
        }
        case 9: {
            return MONTHS.SEPTEMBER
        }
        case 10: {
            return MONTHS.OCTOBER
        }
        case 11: {
            return MONTHS.NOVEMBER
        }
        case 12: {
            return MONTHS.DECEMBER
        }
        default: {
            return "";
        }
    }
}
