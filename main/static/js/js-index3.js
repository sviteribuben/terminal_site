 
var m = 0;
var t;
var go;
 
function show() {
 
m++;
document.body.style.opacity = m/100;
document.body.style.filter="alpha(opacity="+m+")";
t = setTimeout("show()",3);
if (m>=100) clearTimeout(t);
 
}
 
 
function hide() {
 
m--;
document.body.style.opacity = m/100;
document.body.style.filter="alpha(opacity="+m+")";
t = setTimeout("hide()",5);
if (m<=0) {
 
clearTimeout(t);
location.href = go;
 
}
 
}
 
function go_to(url) {
 
clearTimeout(t);
go = url;
hide();
 
}
 
show();
 