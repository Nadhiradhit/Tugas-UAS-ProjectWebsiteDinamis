const hamburger = document.querySelector(".hamburger")
const closeburger = document.querySelector(".closeburger")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    closeburger.classList.toggle("active")
})

document.querySelectorAll(".Nav").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    closeburger.classList.remove("active")
}))