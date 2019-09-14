/*********************************
This free script is provided by Jeremiah Chuba Samuel. 

If you have any complaint on this work, calling for amendment or advice, kindly contact me on drchubasco@yahoo.com

If you appreciate this work, give all glory to God Almighty, not man !
************************************/



function cosineThem(a) {

var b= Math.PI/180;
var c= a*b;
return Math.cos(c).toFixed(4); }


function sineThem(a) {
var b= Math.PI/180;
var c=a*b;
return Math.sin(c).toFixed(4); } 

function tanThem(a)  { var b= (Math.PI/180)*a;
 if(a==90) { return (1.6331*Math.pow(10, 16)).toExponential(4); } 
else if(a==-90) { return (-1.6331*Math.pow(10, 16)).toExponential(4); } 
else if(a==270) { return (5.4437*Math.pow(10, 15)).toExponential(4); } 
else if(a==-270) { return (-5.4437*Math.pow(10, 15)).toExponential(4); } 
else if(a==180||a==-180)  { return 0; }  
else {
 return Math.tan(b).toFixed(4); } }

function acosThem(a) { 
var b= Math.acos(a); 
return ((b*180)/Math.PI).toFixed(4); }

function asineThem(a) { 
var b= Math.asin(a); 
return ((b*180)/Math.PI).toFixed(4); }

function atanThem(a) { 

var b= Math.atan(a); 
return ((b*180)/Math.PI).toFixed(4); }

function sqrtThem(a) {
return Math.sqrt(a).toFixed(4); }

function squareThem(a) {  
return Math.pow(a, 2).toFixed(4); }

function invThem(a) { 
return (1/a).toFixed(4); }





function logThem(a) { var b= Math.log(a);
var c=b*0.43429;
return c.toFixed(4); }