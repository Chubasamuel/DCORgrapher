/*********************************
This free script is provided by Jeremiah Chuba Samuel. 

If you have any complaint on this work, calling for amendment or advice, kindly contact me through chubasamuel@gmail.com

If you appreciate this work, give all glory to God Almighty, not man !
************************************/


var InixValues;
var IniyValues; 
var Xscale;
var Yscale;
var xValues;
var yValues;



var canvas= document.getElementById("canvas");
var ctx= canvas.getContext("2d");
var xl= canvas.width;
var yl= canvas.height;
var xc=canvas.width/2;
var yc=canvas.height/2;
var mg=15;
var xm= xl-mg;
var x0=8;
var y0=8;
var Ctx=ctx;


var Xwidth=((xl+x0+2)-(2*26.5))-((xl+x0+2)-(4*26.5));

var Ywidth=((yl+y0+2)-(2*26.5))-((yl+y0+2)-(4*26.5));

var alpha="+ Y axis ";
var alphaWidth= ctx.measureText("+Y axis ").width;



document.getElementById("xValues").style.width= 700+"px";
document.getElementById("yValues").style.width= 700+"px";

document.getElementById("Xscale").style.width=70+"px";
document.getElementById("Yscale").style.width=70+"px";






function init() {


hideTable();
hideInstructions();
FsS();
 InixValues= document.getElementById("xValues").value;

var userTypedClear=/clear/gi;
	if(InixValues.search(userTypedClear)>-1){
	document.getElementById("xValues").value="";
	InixValues="";}
	
IniyValues= document.getElementById("yValues").value;   
	
	if(IniyValues.search(userTypedClear)>-1){
	document.getElementById("yValues").value="";
	IniyValues="";}
	
Xscale= document.getElementById("Xscale").value;
Yscale= document.getElementById("Yscale").value;




xValues= InixValues.split(",");
 yValues= IniyValues.split(",");  

}


function F1(y) { 
var msY= document.getElementById("msY").selectedIndex; 
switch(msY){ 
	case -1:{ return y; }
		break;
	case 0: { return y; }
		break;
	case 1:{ return cosineThem(y); }
		break;
	case 2:{ return sineThem(y); }
		break;
	case 3:{ return logThem(y); }
		break;
	case 4:{ return tanThem(y); } 
		break;
	case 5:{ return acosThem(y); }
		break;
	case 6:{ return asineThem(y); }
		break;
	case 7:{ return atanThem(y); }
		break;
	case 8:{ return sqrtThem(y); }
		break;
	case 9:{ return squareThem(y); }
		break;
	case 10:{ return invThem(y); }
		break;
	default:{ alert("An internal error occurred while trying to process your request"); }
}
}


function F2(x) { 
var msX= document.getElementById("msX").selectedIndex; 
if(msX==-1) { return x; }
else if(msX==0) { return x; }
else if(msX==1) { return cosineThem(x); }
else if(msX==2) { return sineThem(x); }
else if(msX==3) { return logThem(x); }
else if(msX==4) { return tanThem(x); } 
else if(msX==5) { return acosThem(x); }
else if(msX==6) { return asineThem(x); }
else if(msX==7) { return atanThem(x); }
else if(msX==8) { return sqrtThem(x); }
else if(msX==9) { return squareThem(x); }
else if(msX==10) { return invThem(x); } 

else { alert("An internal error occurred while trying to process your request"); }}



function PLOT() { 

Ctx.clearRect(0, 0, xl, yl);

for(i=1; i<=148; i++) { 
Ctx.beginPath();
Ctx.lineWidth=2;
Ctx.strokeStyle="red";
Ctx.moveTo( ((xl-x0+ctx.lineWidth)-(i*26.5/5)),  y0);
Ctx.lineTo(((xl-x0+ctx.lineWidth)-(i*26.5/5)), yl-y0);

Ctx.moveTo(x0, ( yl-y0+ctx.lineWidth)-(i*26.5/5));
Ctx.lineTo( xl-15, (yl-y0+ctx.lineWidth)-(i*26.5/5));


Ctx.stroke();

}
for(i=1; i<=30; i++) 
{ Ctx.beginPath();
Ctx.lineWidth=2;
Ctx.strokeStyle="green";
Ctx.moveTo( ((xl-x0+ctx.lineWidth)-(i*26.5)),  y0);
Ctx.lineTo(((xl-x0+ctx.lineWidth)-(i*26.5)), yl-y0);

Ctx.moveTo(x0, ( yl-y0+ctx.lineWidth)-(i*26.5));
Ctx.lineTo( xl-15, (yl-y0+ctx.lineWidth)-(i*26.5));


Ctx.stroke();

}

Ctx.beginPath();
Ctx.lineWidth=2;
Ctx.strokeStyle="black";
Ctx.moveTo( x0, y0);
Ctx.lineTo( x0, yl-y0);
Ctx.moveTo( x0, yl-y0);
Ctx.lineTo( xm, yl-y0);
Ctx.moveTo( xm, y0);
Ctx.lineTo( xm,yl-y0);
Ctx.moveTo( xm, y0);
Ctx.lineTo( x0,y0);
/* y and x axis starts respectively */ 

Ctx.moveTo( xc-4, y0)
Ctx.lineTo( xc-4, yl-y0);

Ctx.moveTo( x0, yc-4-Xwidth);
Ctx.lineTo( xm, yc-4-Xwidth);


/* x and y axis ends */

Ctx.stroke();

/*axis  y striker*/
for(i=1; i<=29; i++) { 
Ctx.beginPath();
Ctx.lineWidth=2;
Ctx.strokeStyle="black";
Ctx.moveTo(xc-8, (yl-y0+ctx.lineWidth)-(i*26.5));
Ctx.lineTo( xc-4,  (yl-y0+ctx.lineWidth)-(i*26.5));
Ctx.stroke(); 
}
/*axis x striker */
for(i=1; i<=29; i++) {ctx.beginPath();
Ctx.lineWidth=2;
Ctx.strokeStyle="black";
Ctx.moveTo((xl-x0+ctx.lineWidth)-(i*26.5), yc-4-Xwidth);
Ctx.lineTo(( xl-x0+ctx.lineWidth)-(i*26.5), yc-Xwidth+2);
Ctx.stroke();

}


Ctx.beginPath(); 
Ctx.fillStyle="black";
Ctx.font=25+'px Tahoma';
Ctx.fillText("+Y axis", xc-(3*alphaWidth), y0+30);
Ctx.fill();

Ctx.beginPath(); 
Ctx.fillStyle="black";
Ctx.font=25+'px Tahoma';
Ctx.fillText("-Y axis", xc-(3*alphaWidth), yl-30);
Ctx.fill();

Ctx.beginPath(); 
Ctx.fillStyle="black";
Ctx.font=25+'px Tahoma';
Ctx.fillText("+X axis", xl-(3*alphaWidth),    yc-20-Xwidth);
Ctx.fill();

Ctx.beginPath(); 
Ctx.fillStyle="black";
Ctx.font=25+'px Tahoma';
Ctx.fillText("-X axis", x0+5, yc-20-Xwidth);
Ctx.fill();




for(i=0; i<=xValues.length-1; i++) {
Ctx.beginPath(); 
//Ctx.fillStyle="#33ff66";
Ctx.fillStyle="black";
Ctx.lineWidth=3;
Ctx.strokeStyle="#99000";

Ctx.arc(-4.125+ xc+(F2(xValues[i])/(Xscale/Xwidth)),-Ywidth-2.5+ (yc-(F1(yValues[i])/(Yscale/Ywidth) )), 1, 0, Math.PI*2, true); 

Ctx.stroke();

Ctx.fill();
}

for(i=-14; i<=14; i++) { 
if(i==0) {continue; }

Ctx.beginPath(); 
Ctx.fillStyle="black";
Ctx.font='bold 10px Tahoma';
Ctx.fillText( (i*Xscale).toFixed(2), xc+( i*Xwidth)-8, yc-y0-25);
Ctx.fill();
var txtwidt= (i*Yscale).toFixed(5); 
var rtxtwidt= Ctx.measureText(txtwidt).width; 
 Ctx.beginPath(); 
Ctx.fillStyle="black";
Ctx.font='bold 10px Tahoma';
Ctx.fillText((i*Yscale).toFixed(2),  xc-rtxtwidt ,  yc-Ywidth-(i*Ywidth));
Ctx.fill();
}

var Acx=0;



for(i=0; i<=xValues.length-1; i++)
{ Acx+=1; 
Ctx.beginPath(); 
Ctx.lineWidth=0.8;
Ctx.strokeStyle="black";

Ctx.moveTo( xc-4.25+(F2(xValues[i])/(Xscale/Xwidth)),  -Ywidth-2.5+(yc-( F1(yValues[i])/(Yscale/Ywidth) ) ) );

Ctx.lineTo(xc-4.25+( F2(xValues[Acx])/(Xscale/Xwidth)),  -Ywidth-2.5+(yc-( F1(yValues[Acx])/(Yscale/Ywidth) ) ) );
Ctx.stroke();
}
}

function hideInstructions() { 
insB.value="show instructions"; 
document.getElementById("instructions").style.display="none"; }

function showTable() {
FsS();
xValues= document.getElementById('xValues').value.split(',');
yValues= document.getElementById('yValues').value.split(',');

var nthX="<th>";
var nthY="<th>";
var cthX="</th>";
var cthY="</th>";
var conX=null;
var conY=null;
var otdx="<td>";
var ctdx="</td> ";
var otdy="<td> ";
var ctdy="</td> ";
var conlX=null;
var conlY=null;

var tableButton= document.getElementById('showTable');   var table="<table border='10'> ";  


var msX= document.getElementById("msX").selectedIndex;

 if(msX==2) { conlX="sine(x)"; }
else if(msX==1) {conlX="cos(x)"; }
else if(msX==3) { conlX="log(x)"; }

else if(msX==4) { conlX="tan(x)"; }
else if(msX==5) { conlX="arcos(x)"; }
else if(msX==6) { conlX="arcsin(x)"; }
else if(msX==7) { conlX="arctan(x)"; }
else if(msX==8) { conlX="sqrt(x)"; }
else if(msX==9) { conlX="X^2"; }
else if(msX==10) {conlX="X^-1"; } 


else { nthX="";  conlX=""; cthX=""; otdx=""; ctdx="";} 





var msY= document.getElementById("msY").selectedIndex;

 if(msY==2) { conlY="sine(y)"; }
else if(msY==1) {conlY="cos(y)"; }
else if(msY==3) { conlY="log(y)"; }

else if(msY==4) { conlY="tan(y)"; }
else if(msY==5) { conlY="arcos(y)"; }
else if(msY==6) { conlY="arcsin(y)"; }
else if(msY==7) { conlY="arctan(y)"; }
else if(msY==8) { conlY="sqrt(y)"; }
else if(msY==9) { conlY="Y^2"; }
else if(msY==10) {conlY="Y^-1"; } 



else { nthY="";  conlY=""; cthY=""; otdy=""; ctdy="";} 


table+="<th>" ;
table+=" X Values";
table+="</th>";
table+="<th>";
table+="Y Values";
table+="</th>";
table+= nthX;
table+=conlX;
table+=cthX;
table+=nthY;
table+=conlY;
table+=cthY;


var xas=0;
if(xValues.length-1>yValues.length-1) { xas= xValues.length-1} else { xas=yValues.length-1; }

for(i=0; i<=xas; i++) { 





conX= F2(xValues[i]);
 conY=F1(yValues[i]);

if(undefined==conX||isNaN(conX)) {conX="-"; }

if(undefined==conY||isNaN(conY)) { conY= "-"; }
if(msX==0) { conX=""; }
if(msY==0) { conY=""; }

if(msX!=1&&msX!=2&&msX!=3&&msX!=4&&msX!=5&&msX!=6&&msX!=7&&msX!=8&&msX!=9&&msX!=10) { conX=""; }

if(msY!=1&&msY!=2&&msY!=3&&msY!=4&&msY!=5&&msY!=6&&msY!=7&&msY!=8&&msY!=9&&msY!=10) { conY=""; }

if(undefined==xValues[i]||xValues[i]=="    "||xValues[i]=="") { xValues[i]= "-"; }
if(undefined==yValues[i]||yValues[i]==" "||yValues[i]=="") { yValues[i]="-"; }   


table+="<tr>";
table+="<td>";
table+=xValues[i];
table+="</td> ";
table+="<td> ";
table+=yValues[i];
table+="</td>";
table+=otdx;
table+=conX;
table+=ctdx;
table+=otdy;
table+=conY;
table+=ctdy;
table+="</tr>";
}
table+="</table>"; 

document.getElementById("table").innerHTML= table; 
tableButton.value="Hide Table";


}

function hideTable() { document.getElementById("table").innerHTML=null;
 document.getElementById("showTable").value="show Table";
}

function showOrHideTable() { var Tbutton= document.getElementById("showTable"); 
if(Tbutton.value=="show Table") {showTable(); hideInstructions(); } else { hideTable() ; } }

var notDigit=/[a-z]/gi;
var symbols=/[\*#\+@?!&\`%\/:\;$\_\)(\]\[\>\<|\^]/gi;

function validate() {
var xValuesStr=xValues.toString();
var yValuesStr=yValues.toString();
    
 if(xValuesStr.match(notDigit)||yValuesStr.match(notDigit)) { alert("There's an alphabet among the values, check table!"); showTable(); } 
else if(xValuesStr.match(symbols)||yValuesStr.match(symbols)) { alert("please check your inputs and remove symbols"+"    ["+"yValues: {"+yValuesStr.match(symbols)+" }  ]"+"  ["+"xValues: {"+xValuesStr.match(symbols)+"}  ]"); showTable(); }

 else if(xValues.length!=yValues.length) { alert("Sorry \t xValues points  is \t" +xValues.length+"  whereas, yValues points is "+yValues.length+". Please check table"  ); showTable(); } 
else if(xValuesStr.length<1||yValuesStr.length<1) { alert("input one or more values!"); }   
else if(""==Yscale||""==Xscale||Xscale=="    "||Yscale=="    "||Xscale==0||Yscale==0||isNaN(Xscale)||isNaN(Yscale)) { alert("Please specify your scales correctly"); }
else { PLOT(); } } 
{
var datec= new Date();
var yearc= datec.getFullYear();
var cyear=2016;
var ntyear="";
var hyph=" -"; 
if(cyear<yearc) { ntyear=yearc; hyph=" - "; } else { ntyear=""; hyph="";}
document.getElementById("footer").innerHTML="Jeremiah Chuba Samuel, &copy;"+cyear+hyph + ntyear; }


{ document.getElementById("noscript").style.display="none"; document.getElementById("mbody").style.display="block"; }

function writeRange(vaL1, vaL2, step, box) { var alphaP=[];alphaP[0]=vaL1; var valH=vaL1*1; 
var val2b;
if(vaL2<0){ val2b=-10*vaL2; }
else { val2b=vaL2; }
	if(vaL2<vaL1){
for(i=1;i<=(step*vaL1*4);i++) { valH-=step; alphaP[i]=valH; if(valH<=vaL2) { break;} }}
	else if(vaL2>vaL1){
for(i=1;i<=(step*val2b*4);i++) { valH+=step; alphaP[i]=valH; if(valH>=vaL2) { break;} }}
	else{}
 document.getElementById(box).value=alphaP; 
  }
 function decideWhichRange(b, a) {  
var toStep;
var rangeU2;
var rangeU=b.split('to'); rangeU=rangeU.toString(); 
if(rangeU.match('step')) {rangeU=rangeU.split('step'); rangeU= rangeU.toString(); rangeU= rangeU.split(',');  rangeU2=rangeU[2]*1;    rangeU=rangeU.toString();  }
else {rangeU2=1; } 
rangeU=rangeU.split(",");
var rangeU0= rangeU[0]*1;
var rangeU1= rangeU[1]*1;

writeRange(rangeU0,rangeU1,rangeU2 ,a)}

function generateScale(c, b) {
c=c.toString().split(",");
var arrayOfFuncXY=[];
	if(b=="Yscale"){
	arrayOfFuncXY=c.map((y)=>(F1(y)));}
	if(b=="Xscale"){arrayOfFuncXY=c.map((x)=>(F2(x)));}
let a=arrayOfFuncXY;
var numMax=eval(a.sort((a,b)=>(a-b))[a.length-1]);
var numMin=eval(a.sort((a,b)=>(a-b))[0]); 
if(numMin<0){ numMin=-1*numMin; }
if(numMax<0) { numMax=-1*numMax; }
var scale;
if(numMin>numMax){scale=((numMin)/6).toFixed(2); document.getElementById(b).value=scale;	}
else if(numMax>=numMin){scale=((numMax)/6).toFixed(2); document.getElementById(b).value=scale;
}
else{}
}
var rangeValX;
var rangeValY;
var scaleX;
var scaleY;
function FsS() {  rangeValX=document.getElementById("xValues").value.toLocaleLowerCase();
scaleX=document.getElementById("Xscale").value;
scaleY=document.getElementById("Yscale").value;
rangeValY=document.getElementById("yValues").value.toLocaleLowerCase();
if(rangeValX.match('to')) { decideWhichRange(rangeValX, 'xValues')}
if(rangeValY.match('to')) { decideWhichRange(rangeValY, 'yValues')} }
function Fs() {FsS();
if(scaleY.toLocaleLowerCase().match('scale')) { var bav=document.getElementById("yValues").value;
generateScale(bav, 'Yscale');}
if(scaleX.toLocaleLowerCase().match('scale')) { generateScale(rangeValX, 'Xscale'); }
init();  hideTable(); hideInstructions();   validate(); } 
 ins();
