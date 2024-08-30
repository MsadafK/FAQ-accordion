const toggleButtons = document.querySelectorAll(".show-or-hide-answer-icon");
const answerBoxes = document.querySelectorAll(".answer");

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener("click", function () {
    console.log("clicked");

    // Toggle the display of the associated answer
    if (answerBoxes[index].classList.contains("hide-answer")) {
      answerBoxes[index].classList.remove("hide-answer");
      answerBoxes[index].classList.add("show-answer");

      // Change the icon to another image when the answer is shown
      toggleButton.src = "./assets/images/icon-minus.svg"; // Path to the "minus" icon
    } else {
      answerBoxes[index].classList.remove("show-answer");
      answerBoxes[index].classList.add("hide-answer");

      // Revert the icon back to the original image when the answer is hidden
      toggleButton.src = "./assets/images/icon-plus.svg"; // Path to the "plus" icon
    }
  });
});
