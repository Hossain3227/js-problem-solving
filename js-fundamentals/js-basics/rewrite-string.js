// rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
// Sample input text
var sampleText = "Hello World!";

// Create a span element dynamically
var span = document.createElement("span");

// Set an ID so we can target it later
span.id = "animatedText";

// Set the initial text content
span.textContent = sampleText;

// Append the span to the body
document.body.appendChild(span);


function animate_string(id){
    var element = document.getElementById(id);
    // Get the text inside the element
    var textNode = element.childNodes[0];
     var text = textNode.data;

    //  setup interval to rotate

    setInterval(function(){
        // moving the last character to the begining of the string
        text = text[text.length-1]+text.substring(0,text.length-1);
        textNode.data = text;
    },100);
}

// Start animation
animate_string("animatedText");