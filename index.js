function signUp() {
    document.getElementById("myForm").style = "display: block";
    document.getElementById("overlay").style = "display: block";
}

function cancelSign() {
    document.getElementById("myForm").style = "display: none";
    document.getElementById("overlay").style = "display: none";
}

function submit() {
    console.log('Hi');
    document.getElementById("myForm").style = "display: none";
    document.getElementById("overlay").style = "display: none";
    document.getElementById("side__nav__section").style = "display: block";
}