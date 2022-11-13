function Greeting() {
    console.log("it's working");
    var d= new Date;
    var t = d.getUTCHours();
    if (t < 12) {
        document.getElementById("demo").innerHTML="Good morning";
    } else if (t < 18) {
        document.getElementById("demo").innerHTML = "Good afternoon";
    } else {
        document.getElementById("demo").innerHTML = "Good evening"
    };
};