// Display the current day and time in a specific format

var today = new Date();

var day = today.getDay();

var daylist= ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// current day

console.log("Today is: "+daylist[day]+".");


var hour = today.getHours();
var minutes = today.getMinutes();
var second = today.getSeconds();

// check am or pm

var pre = (hour>=12)? "PM":"AM";

// convert 24 hr to 12 hr

hour = (hour>=12) ? hour-12:hour;

// check special case when hr is 0

if(hour ===0 && pre === 'PM'){
    if(minutes === 0 && second ===0){
        hour=12;
        pre='Noon';
    } else{
        hour = 12;
        pre = 'PM';
    }
}


if(hour ===0 && pre === 'AM'){
    if(minutes === 0 && second ===0){
        hour=12;
        pre='Midnight';
    } else{
        hour = 12;
        pre = 'AM';
    }
}

// current time
console.log("Current Time: " + hour + pre + " : " + minutes + " : " + second);