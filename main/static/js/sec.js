
function lib_bwcheck(){ //Browsercheck (needed)

	this.ver=navigator.appVersion

	this.agent=navigator.userAgent

	this.dom=document.getElementById?1:0

	this.opera5=this.agent.indexOf("Opera 5")>-1

	this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom && !this.opera5)?1:0; 

	this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom && !this.opera5)?1:0;

	this.ie4=(document.all && !this.dom && !this.opera5)?1:0;

	this.ie=this.ie4||this.ie5||this.ie6

	this.mac=this.agent.indexOf("Mac")>-1

	this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0; 

	this.ns4=(document.layers && !this.dom)?1:0;

	this.bw=(this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.opera5)

	return this

}

var bw=new lib_bwcheck()

if(document.layers){ //NS4 resize fix...

	scrX= innerWidth; scrY= innerHeight;

	onresize= function(){if(scrX!= innerWidth || scrY!= innerHeight){history.go(0)} }

}

msgFont= "terminal"	// The font for the message

msgFontSize= 18				// Set the fontSize in px

msgFontColor="#ffffff"		// Set the fontColor

msgWidth= "300"				// Set the width of the messageblock here for netscape 4



//Set the text you want to display on mouseover here.

messages=new Array()

messages[0]="" //This is the default text that appears when you mouse out.

messages[1]="Time, Date, Hard Disk Type..."

messages[2]="Link nr 2 (this one) is even better!"

messages[3]="This link however, nr3, isn't that good..."

messages[4]="Maybe you should try this one?<br>I'll write some more text to show that it wraps correctly to several lines."

messages[5]="<img src=\"changetext_image.gif\" width=\"56\" height=\"54\" alt=\"\" border=\"0\"><br>As you see, you can put html in here too, like an image."

messages[6]="Later all.."




function makeChangeTextObj(obj){

   	this.css = bw.dom?document.getElementById(obj).style:bw.ie4?document.all[obj].style:bw.ns4?document.layers[obj]:0;	

   	this.writeref = bw.dom?document.getElementById(obj):bw.ie4?document.all[obj]:bw.ns4?document.layers[obj].document:0;	

	this.writeIt = b_writeIt;					

}

function b_writeIt(text,num){

	if (bw.ns4){

		this.writeref.write(text)

		this.writeref.close()

	}

    else this.writeref.innerHTML = messages[num]

}



//The mouoseover function. Calls the writeIt method to write the text to the div.

function changeText(num){

	if(bw.bw) oMessage.writeIt('<table width="'+msgWidth+'" border="0" cellpadding="0" cellspacing="0"><tr><td><span style="font-size:'+msgFontSize+'px; font-family:'+msgFont+'; color:'+msgFontColor+'">'+messages[num]+'</span></td></tr></table>', num)

}



//The init function. Calls the object constructor and initiates some properties.

function changeTextInit(){

	//Fixing the browsercheck for opera... this can be removed if the browsercheck has been updated!!

	bw.opera5 = (navigator.userAgent.indexOf("Opera")>-1 && document.getElementById)?true:false

	if (bw.opera5) bw.ns6 = 0

	

	oMessage = new makeChangeTextObj('divMessage')

	oLinks = new makeChangeTextObj('divLinks')

	//Setting the style properties of the text layer.

	if(bw.dom || bw.ie4){

		with(oMessage.writeref.style){fontFamily=msgFont; fontSize=msgFontSize+"px"; color=msgFontColor}

	}

	//Both layers are hidden by default to prevent users from mousing over them and creating errors while the page loads.

	oMessage.css.visibility= "visible"

	oLinks.css.visibility= "visible"

}



//If the browser is ok, the init function is called on pageload. 

if (bw.bw) onload = changeTextInit
