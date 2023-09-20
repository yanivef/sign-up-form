const inputs = document.querySelectorAll('.inp')
const input = Array.from(inputs)

input.forEach(inp => inp.addEventListener('input', () => {
    if(inp.value)
        inp.classList.add('validation')
}))