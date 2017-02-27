$(document).ready(function()
{
function randomquote()
{	
	var arr=["\"Arise,awake and stop not till the goal is reached.\"","\"Great things are done by a series of small things brought together.\"","\"The power of imagination makes us infinite.\"",
	"\"Don’t wait. The time will never be just right.\"","\"Never Stop Dreaming.\"","\"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better\"",
	"\"Be not afraid of going slowly, be afraid only of standing still.\"","\"The best revenge is massive success.\"","\"God couldn’t be everywhere, so he created mothers.\"",
	"\"To be the best, you must be able to handle the worst\"","\" That's one small step for a man, one giant leap for mankind. \"","\"It is never too late to be what you might have been.\"","\"If you cannot do great things, do small things in a great way. \"","\"If opportunity doesn’t knock, build a door.\"","\"I haven’t failed. I’ve just found 10,000 ways that won’t work.\"","\"When the need to succeed is as bad as the need to breathe, then you’ll be successful.\"","\"If the facts don’t fit the theory, change the facts.\""];
	var colours=["rgba(255,255,0,0.34)","rgba(192,192,192,0.5)","rgba(0,255,0,0.2)","rgba(0,255,255,0.3)","rgba(255,255,128,0.2)","rgba(173,255,47,0.2)","rgba(255,255,102,0.2)",
"rgba(255,255,51,0.3)","rgba(255,218,185,0.34)","	rgba(250,250,210,0.2)"];
    var a= arr[Math.floor(Math.random() * 17)];
	var b=colours[Math.floor(Math.random() * 10)];
	$("#gef").html(a);
	$("#abc").css("background",b);
	$("#button").css("background",b);
	//$("#gef").css("color",b);
	
}

	$("#button").click(function()
	{
	     randomquote();
	});
});