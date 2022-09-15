var time = new Date().getHours();

if(time >= 6 && time <= 12 ) {
    alert("Sabahiniz xeyir")
    document.body.style.backgroundColor = "black";
}
else if (time > 12 && time <= 18) {
    alert("Gunortaniz xeyir")
    document.body.style.backgroundColor = "blue";
}
else{
    alert("Axsaminiz xeyir")
    document.body.style.backgroundColor = "purple";
}

