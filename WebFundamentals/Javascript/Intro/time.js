var HOUR = 7;
var MINUTE = 16;
var PERIOD = "PM";

if (HOUR == 8 && MINUTE == 50)
{
    console.log("It's almost 9 in the morning");
}
else if (HOUR == 7 && MINUTE == 15 && PERIOD == "PM")
{
    console.log("It's just after 7 in the evening");
}
else    
{
    console.log("It's a different time");
}