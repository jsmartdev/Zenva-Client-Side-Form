/* eslint-disable */

let checkbox = document.getElementById("petCheckbox");
let selectionDiv = document.getElementById("petSelect");
checkbox.addEventListener("change", function(event) {
    if(checkbox.checked == true) {
        selectionDiv.style.display = "Block";
    }
    else {
        selectionDiv.style.display = "None";
    }
});