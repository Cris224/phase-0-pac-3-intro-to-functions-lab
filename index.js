function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){ 
    console.log(string.toUpperCase());
    console.log("hello");
}
function logWhisper(string){ 
    console.log(string.toLowerCase());
    console.log("HELLO");
}
function sayHiToGrandma(string){
    const input = string;
    if (input === string.toLowerCase()){
     return `I can\'t hear you!`;}
    if (input === string.toUpperCase()){
     return "YES INDEED!";}  
    if (string === "I love you, Grandma."){
     return "I love you, too.";}
}