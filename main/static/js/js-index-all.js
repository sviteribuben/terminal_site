// Initialize variables
let outMsg = "";
let i = 0;
let lineNo = 1;
let timerDM = null;
const ScreenLine = [
    "Pentium 66Mhz Processor",
    "Memory Test: 1024B OK",
    " ",
    "Floppy Disk Fail",
    "",
    "Fail...",
    "Fail...",
    "FATAL ERROR",
    " ",
    "Press Any Key to Load Setup...",
    "",
    "",
    ""
];

let msgNum = 0; // Start from the first message
const msgCnt = ScreenLine.length; // Total number of messages
const typeSpeed = 1; // Typing speed in milliseconds
const pageLen = 10; // Number of rows in the textarea
let delay = typeSpeed;
let cr = "\n";

function displayMsg() {
    if (i >= ScreenLine[msgNum].length || ScreenLine[msgNum].charAt(i) === "\f") {
        i = 0;
        changeMsg();
    }
    outMsg += ScreenLine[msgNum].charAt(i);
    i++;

    if (ScreenLine[msgNum].charAt(i) === "\f" || (lineNo === pageLen && i === ScreenLine[msgNum].length)) {
        delay = 4000; // Pause before next message
    } else {
        delay = (ScreenLine[msgNum].charAt(i) === cr && ScreenLine[msgNum] !== " " + cr) ? 2000 : typeSpeed;
    }

    document.forms[0].elements[0].value = outMsg;
    timerDM = setTimeout(displayMsg, delay);
}

function changeMsg() {
    msgNum = (msgNum + 1) % msgCnt; // Loop back to the first message
    lineNo++;
    if (lineNo > pageLen || ScreenLine[msgNum].charAt(0) === "\f") {
        outMsg = ScreenLine[msgNum].charAt(i);
        i++;
        lineNo = 1;
    }
}

function quitDisplay() {
    document.forms[0].elements[0].value = "Loading Setup...";
}

function url() {
    location.href = "/nextdoor/"; // Redirect to the nextdoor page
}

let m = 0;
let t;
let go;

function show() {
    m++;
    document.body.style.opacity = m / 100;
    t = setTimeout(show, 3);
    if (m >= 100) clearTimeout(t);
}

function hide() {
    m--;
    document.body.style.opacity = m / 100;
    t = setTimeout(hide, 5);
    if (m <= 0) {
        clearTimeout(t);
        location.href = go;
    }
}

function goTo(url) {
    clearTimeout(t);
    go = url;
    hide();
}

show();