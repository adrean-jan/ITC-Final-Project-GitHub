var count = 0;
function move() {
    document.getElementById("num").innerHTML = " " + ++count;
    if (count == 2)
    {
        document.getElementById("p").innerHTML = "<br><br> <h2>Congratulations! We will" + 
        " provide more courses in the future. Keep up with Us!<h2> ";
    }
}
function Warning() {
    alert("The forms didn't save any data and has no database to function.");
}
function Warning2() {
    alert("Not yet available due to maintenance. Don't worry we will get it back soon.");
}
function Alert() {
    alert("Congratulations! You completed this course!");
}