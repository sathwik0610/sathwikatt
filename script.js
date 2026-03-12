let present = localStorage.getItem("present") || 182;
let total = localStorage.getItem("total") || 257;

present = parseInt(present);
total = parseInt(total);

function update(){

let absent = total - present;
let percent = (present/total)*100;

document.getElementById("present").innerText = present;
document.getElementById("absent").innerText = absent;
document.getElementById("total").innerText = total;
document.getElementById("percent").innerText = percent.toFixed(2)+"%";

localStorage.setItem("present",present);
localStorage.setItem("total",total);

}

function markPresent(){

present++;
total++;
update();

}

function markAbsent(){

total++;
update();

}

update();
