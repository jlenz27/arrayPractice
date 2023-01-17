function getForm() {
    const favState = document.getElementById("favState").value;
    const favColor = document.getElementById("favColor").value;
    const favAnimal = document.getElementById("favAnimal").value;
    const FavSport = document.getElementById("favSport").value;

    const formArray = [favState, favColor, favAnimal, FavSport];
    return formArray;
}

function setFormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        getForm();
        const test = getForm();
        console.log(test);
        let returnArray = document.createElement("ul");
        test.forEach(function (thing) {
            let newValue = document.createElement("li")
            newValue.innerText = thing;
            returnArray.append(newValue);
            document.body.append(returnArray);
        });
    
   
   
   
   
   
    });
  
}
window.onload = function () {

    setFormSubmissionEventHandler();
};

