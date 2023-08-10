const textField = document.querySelectorAll(".input");
const submitButton = document.querySelector(".btn-submit");
const errorMessage = document.querySelectorAll(".error");

textField.forEach((element, index) => {
  element.addEventListener("keyup", () => {
    if (
      element.value !== "" ||
      element.classList.contains("denied") ||
      errorMessage[index].classList.contains("active")
    ) {
      element.classList.remove("denied");
      errorMessage[index].classList.remove("active");
      element.classList.add("accepted");
    } else {
      element.classList.remove("accepted");
    }
  });
});

submitButton.addEventListener("click", () => {
  textField.forEach((element, index) => {
    console.log(element)
    if (element.value === "") {
      element.classList.add("denied");
      errorMessage[index].classList.add("active");
    } else {
      element.classList.remove("denied");
      errorMessage[index].classList.remove("active");
    }
  });
});

// submitButton.addEventListener("click", () => {
//   let validFields = 0;
//   for (let i = 0; i <= textField.length; i++) {
//     if (textField[i].value !== "") {
//       validFields++;
//       if (validFields === textField.length) {
//         alert("Sua mensagem foi enviada com sucesso.");
//       }
//     }
//   }
// });