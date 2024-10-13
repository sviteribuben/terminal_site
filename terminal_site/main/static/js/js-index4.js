var d = new Date();
var day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");
var month=new Array("/ 01 /","/ 02 /","/ 03 /","/ 04 /","/ 05 /","/ 06 /",
"/ 07 /","/ 08 /","/ 09 /","/ 10 /","/ 11 /","/ 12 /");
document.write(d.getDate()+ " " + month[d.getMonth()]
+ " " + d.getFullYear());