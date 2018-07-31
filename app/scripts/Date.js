export default class DateFormat {
    
    static correctNumOfDate(num){
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }

    constructor(date){
        if(date){
            this.date = new Date(date);
        }else{
            this.date = new Date();
        }
    }

    getDate(){
        var yyyy = this.date.getFullYear();
        var mm = DateFormat.correctNumOfDate(this.date.getMonth()+1);
        var dd = DateFormat.correctNumOfDate(this.date.getDate());
        var hh = DateFormat.correctNumOfDate(this.date.getHours());
        var min = DateFormat.correctNumOfDate(this.date.getMinutes());

       return dd + "." + mm + "." + yyyy + " " + hh + ":" + min;
    }

}