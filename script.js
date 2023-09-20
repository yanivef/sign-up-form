const inputs = document.querySelectorAll(".inp");
const input = Array.from(inputs);
const btn = document.querySelector(".submit-btn");
const pass = document.querySelector("#user-password");
const confirmPass = document.querySelector("#user-confirm-password");
const incorrectPassSpace = document.querySelector(".incorrect-pass");

input.forEach((inp) =>
  inp.addEventListener("input", () => {
    if (inp.value && inp.type !== "password") inp.classList.add("validation");
  })
);


btn.addEventListener("click", () => {
  if (pass.value !== confirmPass.value ) {
    incorrectPassSpace.textContent = "* Passwords do not match";
    pass.style.border = "solid 2px rgb(255, 0, 50, 0.4)";
    confirmPass.style.border = "solid 2px rgb(255, 0, 50, 0.4)";
  } else if (pass.value === confirmPass.value && pass.value && confirmPass.value) {
    incorrectPassSpace.textContent = "";
    pass.style.border = "solid 2px rgb(0, 100, 255, 0.4)";
    confirmPass.style.border = "solid 2px rgb(0, 100, 255, 0.4)";
    btn.type="submit";
  }
});
