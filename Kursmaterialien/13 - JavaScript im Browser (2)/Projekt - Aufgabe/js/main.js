"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]");
  for(const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const helpText = helpElement.attributes["data-help"].value;
      alert(helpText);
    });
  }
//Begin Aufagaben Code
const cards = document.getElementsByClassName("card");


for(const card of cards){
    const clickFunction = () => {
    card.children[1].classList.toggle("d-none");
    card.children[0].children[0].children[0].classList.toggle("fa-angle-double-down");
    card.children[0].children[0].children[0].classList.toggle("fa-angle-double-right");
};
        clickFunction();
    card.addEventListener("click", clickFunction);
}
//Ende Aufagben Code

});