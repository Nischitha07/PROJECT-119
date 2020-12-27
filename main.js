var SpeechRecognition = window.webkitSpeechRecognition;
var Display_Speech = new SpeechRecognition();


function preload(){

}

function setup(){

canvas = createCanvas(400 ,380);
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zJaUBylOh/model.json" , modelLoaded);
}
function draw(){
    image(video , 0 , 0 , 400 ,380);
    console.log("Teachable machine has initialized");
classifier.classify(video , gotResult);
}

function next_quote()
{
 var myArray =  ["Learn to be strong then you'll never be wrong" , "Be the light of your lamp, because none will be there to light it up when it blows" , "Burn your ego before it burns you" , "Be yourself , Think wisely , Make the right decision" , "If opportunity does'nt knock, build a door","Silence is golden" , "Life is a melodious song, sing it" , "Life is a adventure, seek it" , "Make it simple but significant" , "You are the artist of you life, dont give the paintbrush to someone else" , "Make failure key to success" , "Always be the key to open the door of success"];
 document.getElementById("quote_ar").innerHTML = random(myArray);
  
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotResult(error , results )
{
    if(error){
        console.error(error);
    }
    
    else{
        console.log(results);
        document.getElementById("object_result").innerHTML = results[0].label;
        document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(4);
    
        
    }
    if(results == "Me")
    {
        window.alert("Hello There, I am  Nischitha, Nice meeting you!! Greetings!!! 👋😊");
        
    }

    if(results == "Father")
    {
        window.alert("Hello Daddu, You are the best!! I ❤ U");
        
    }

    if(results == "Mother")
    {
        window.alert("Hello Amma, You are my lovely mom!! I ❤ U");
        
    }

    if(results == "Sister1")
    {
        window.alert("Hello Kusum Akka, I miss u, you are such a wonderful sister!! I ❤ U");
        
    }
    
    if(results == "Sister2")
    {
        window.alert("Hello Shuchi Akka,You are such a marvellous sister akka!! I miss u!! I ❤ U");
        
    }
}