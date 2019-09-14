var insB= document.getElementById("insB");
function ins() {
if(insB.value=="show instructions") {
hideTable();

document.getElementById("instructions").style.display="block"; 
insB.value="hide instructions"; }
else if(insB.value=="hide instructions"){ document.getElementById("instructions").style.display="none"; insB.value="show instructions"; }
else { } }









