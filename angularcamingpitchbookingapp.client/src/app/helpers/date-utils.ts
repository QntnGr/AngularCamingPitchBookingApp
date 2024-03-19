export default class DateUtils {

    static addOneMonthToDate(date: Date): Date {
        
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + 1);

        return newDate;
    }
    
}