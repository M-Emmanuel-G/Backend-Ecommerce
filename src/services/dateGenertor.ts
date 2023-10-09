import moment from "moment"

export abstract class DateGenerator {
    static generateDate = ()=>{
        return moment().format('DD/MM/YYYY')
    }
}