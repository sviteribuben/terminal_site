var outMsg = "";
var i = 0;
var lineNo = 1;
var timerDM=null;
var msg = " ";
function araVob() {
}
var ScreenLine = new araVob();
ScreenLine[1] = "Pentium 66Mhz Processor"
ScreenLine[2] = "Memory Test: 1024B OK"
ScreenLine[3] = " ";
ScreenLine[4] = "Floppy Disk Fail"
ScreenLine[5] = "";
ScreenLine[6] = "Fail..."
ScreenLine[7] = "Fail...";
ScreenLine[8] = "FATAL ERROR"
ScreenLine[9] = " ";
ScreenLine[10] = "Press Any Key to Load Setup...";
ScreenLine[11] = ""
ScreenLine[12] = "";
ScreenLine[13] = "";

var msgNum = 1; // set to first message to display
var msgCnt = 10; // set to number of last message "page" to display.
var typeSpeed = 1; // the typing rate, in milliseconds. (Higher number is slower)
var pageLen = 10; // set to page size, usually number of ROWS in TEXTAREA
var delay=typeSpeed;
var r = 0;
var cr="\r\n"
if ("3" <=navigator.appVersion.charAt(0)) {
var cr="\n"
}
for (x = 1; x<=(msgCnt); x++) {
ScreenLine[x] = ScreenLine[x] + cr;
}
msg = ScreenLine[1];

function DisplayMsg() {
if (msg.length <= i || msg.charAt(i) == "\f") {
r=i;
i=0;
ChangeMsg();
}
outMsg = outMsg + msg.charAt(i);
i++; 
if (msg.charAt(i) == "\f" || (lineNo == pageLen && i==msg.length)) {
delay = 4000; }
else {
if (msg.charAt(i) == cr && msg != " "+cr) {
delay = 2000; }
else {
delay = typeSpeed; } 
}
self.document.forms[0].elements[0].value=outMsg;
timerDM = setTimeout("DisplayMsg()",delay);
}

function ChangeMsg() {
msgNum++;
if (msgCnt < msgNum) {
msgNum = 0;
}
lineNo++;
if (pageLen < lineNo || msg.charAt(r) == "\f") {
outMsg=ScreenLine[msgNum].charAt(i);
i++;
lineNo = 1;
}
msg = ScreenLine[msgNum];
}

function quitDisplay() {
self.document.forms[0].elements[0].value = "Loading Setup...";
}
