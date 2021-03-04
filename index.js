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

let saveForm = document.getElementById("saveForm");

saveForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let nameText = saveForm.elements[0].value;
    let addressText = saveForm.elements[1].value;
    let ageText = saveForm.elements[2].value;
    let hasPets = saveForm.elements[3].checked;
    let petText = "No Pets";
    if(nameText == "") {
        alert("Please enter a name");
        return;
    }
    if(addressText == "") {
        alert("Please enter your address");
        return;
    }
    if(ageText == "") {
        alert("Please enter your age");
        return;
    }
    if(hasPets) {
        petText = saveForm.elements[4].value;
    }
    if(petText == "Dog") {
        alert("Sorry, our dog capacity is full");
        return;
    }
    alert("Booking saved! Info:\n" + nameText + "\n" + addressText + "\n" + ageText + "\n" + petText);
});