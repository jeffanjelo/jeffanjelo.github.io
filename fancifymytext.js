document.getElementById("bigger").addEventListener("click",bigger);
document.getElementById("fancyshmancy").addEventListener("click",fancify);
document.getElementById("boringbetty").addEventListener("click",borify);
document.getElementById("moo").addEventListener("click",moo);

//This is to test if javascript is functioning properly
function alertBox(){
    alert("Hello, world!");
}

function bigger(){
    document.getElementById("fancy_text").style.fontSize= "24pt";
}

function fancify(){
    alert("Fancification mode enabled");
    document.getElementById("fancy_text").style.fontWeight= "bold";
    document.getElementById("fancy_text").style.color= "blue";
    document.getElementById("fancy_text").style.textDecoration= "underline";
    document.getElementById("boringbetty").checked= false;
}

function borify(){
    document.getElementById("fancy_text").style.fontWeight= "normal";
    document.getElementById("fancy_text").style.color= "black";
    document.getElementById("fancy_text").style.textDecoration= "none";
    document.getElementById("fancyshmancy").checked= false;
}

function moo(){
    var text = document.getElementById("fancy_text").value;
    var result = text.toUpperCase();
    document.getElementById("fancy_text").value = result;
    
    var parts = result.split(" ");

    var i;
    for(i=0; i < parts.length;i++){
        var tmp = parts[i].toUpperCase();
        parts[i] = tmp;

        if(parts[i].includes(".")){
            tmp = parts[i].slice(0, -1);
            parts[i] = tmp.concat("-Moo.");
        }
    }

    var str = parts.join("_");
    document.getElementById("fancy_text").value = str;
}