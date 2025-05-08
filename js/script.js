console.log("Welcome to WDDM 130")

document.getElementById("para1").style.color = "yellow"
var tags = document.getElementsByTagName("h2")

for(var i = 0; i < tags.length; i++) 
{
    tags[i].style.color = "pink"
    tags[i].style.textAlign = "center"
} 