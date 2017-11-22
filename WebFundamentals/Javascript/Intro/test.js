var students = [
    {first_name : "Michael" , last_name : "Jordan"},
    {first_name : "John" , last_name : "Rosales"},
    {first_name : "Mark" , last_name : "Guillen"},
    {first_name : "KB" , last_name : "Tonel"}
]
var instructors = [
    {first_name : "Michael" , last_name : "Choi"},
    {first_name : "Martin" , last_name : "Puryear"}
]
users = [students, instructors];
function userInfo(users){
    console.log("Students:");
    for(var i = 0; i < students.length; i++){
        console.log(i + 1, '-', students[i].first_name , students[i].last_name, students[i].first_name.length + students[i].last_name.length);
    }
    console.log("Instructors:");
    for(var i = 0; i < instructors.length; i++){
        console.log(i + 1, '-', instructors[i].first_name , instructors[i].last_name, instructors[i].first_name.length + instructors[i].last_name.length);
    }
}
userInfo(users);