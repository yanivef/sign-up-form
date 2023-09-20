const inputs = document.querySelectorAll(".inp");
const input = Array.from(inputs);
const btn = document.querySelector(".submit-btn");
const pass = document.querySelector("#user-password");
const confirmPass = document.querySelector("#user-confirm-password");
const arr = [pass,confirmPass]


input.forEach((inp) =>
  inp.addEventListener("input", () => {
    if (inp.value && inp.type !== "password") inp.classList.add("validation");
  })
);


arr.forEach(item => item.addEventListener('input', () => {
    btn.disabled = true
    
    if(pass.value === confirmPass.value){
        btn.disabled = false
        item.classList.add('test') // NOW WE NEED TO ADD EFFECT WHEN PASSWORD IS CORRECT
    }

}))

