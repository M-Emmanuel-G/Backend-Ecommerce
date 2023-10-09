import moment from "moment"

export abstract class DateDelivery {
    static generateDate = ()=>{
        
        
        return moment().add(15,'days').format('DD/MM/YYYY')
    }
}