/**
 * Created by rusakov on 27/07/2017.
 */

var currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function(name){
    var hour = currentDate.getHours();
    if(hour > 16)
        return "Добрый вечер, " + name;
    else if(hour > 10)
        return "Добрый день, " + name;
    else
        return "Доброе утро, " + name;
};

module.exports.name = "Alice";