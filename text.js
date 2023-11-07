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