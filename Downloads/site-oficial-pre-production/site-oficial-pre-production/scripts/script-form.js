var button = document.getElementById("button-form");
var contador = document.getElementById("contador");
var section = document.querySelectorAll(
  "form#form-1, form#form-2, form#form-3, form#form-4, form#form-5, form#form-6"
);
var i = 0;
button.addEventListener("click", function (event) {
  event.preventDefault();
  if (i < 5) {
    section[i].style.display = "none";
    i = i + 1;
    section[i].style.display = "flex";
    console.log(i);
  }
  if (i === 5) {
    button.textContent = "Concluir";
    button.addEventListener("click", function () {
      console.log("enviado");
    });
  }
  contador.textContent = i + 1 + "/6";
});
