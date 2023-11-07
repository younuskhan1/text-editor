const textArea = document.getElementById("textarea");
function f1(event) {
    // console.log(event);
    // we used value attribute to get the number because it is input field. 
    let value = event.value;
    textArea.style.fontSize = value + "px";
}

function f2(event) {
    // console.log(event.style);
    // fontWeight's value bold is not existed at event trigger 
    // therefore bold is passed from outside by event handler.

    if (textArea.style.fontWeight === "bold") {
        textArea.style.fontWeight = "normal"
        event.classList.remove("active");
    } else {
        textArea.style.fontWeight = "bold";
        event.classList.add("active");
    }
}
function f3(event) {

    if (textArea.style.fontStyle === "italic") {
        textArea.style.fontStyle = "normal";
        event.classList.remove("active");
    } else {
        textArea.style.fontStyle = "italic";
        event.classList.add("active");
    }
}

function f4(event) {

    if (textArea.style.textDecoration == "underline") {
        textArea.style.textDecoration = "none";
        event.classList.remove("active");
    } else {
        textArea.style.textDecoration = "underline";
        event.classList.add("active");
    }
}

function f5(event) {
    textArea.style.textAlign = "left";
}
function f6(event) {
    textArea.style.textAlign = "center";
}
function f7(event) {
    textArea.style.textAlign = "right";
}

function f8(event) {

    if (textArea.style.textTransform == "uppercase") {
        textArea.style.textTransform = "none";
        event.classList.remove("active");
    } else {
        textArea.style.textTransform = "uppercase";
        event.classList.add("active");
    }
}

function f9() {
    textArea.style.fontWeight = "normal";
    textArea.style.fontStyle = "normal";
    textArea.style.textAlign = "left";
    textArea.style.textTransform = "capitalize";
    textArea.value = "";
}

function f10(event) {
    let value = event.value;
    textArea.style.color = value;
}

window.addEventListener("load"), () => {
    textArea.value = "";
}