function animateit1(){
    document.getElementById("anim-btn1").classList.add("animate");
    console.log(document.getSelection.toString());

    setTimeout(function(){ 
        document.getElementById("anim-btn1").classList.remove("animate");
    }, 1000);
}

function animateit2(){
    document.getElementById("anim-btn2").classList.add("animate");
    console.log(document.getSelection.toString());

    setTimeout(function(){ 
        document.getElementById("anim-btn2").classList.remove("animate");
    }, 1000);
}

function animateit3(){
    document.getElementById("anim-btn3").classList.add("animate");
    console.log(document.getSelection.toString());

    setTimeout(function(){ 
        document.getElementById("anim-btn3").classList.remove("animate");
    }, 1000);
}