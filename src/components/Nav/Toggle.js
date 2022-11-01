const element = document.querySelector('#bur')
element.addEventListener('click',myFunction)
const myFunction=()=>{
    element.classList.toggle("active")
}