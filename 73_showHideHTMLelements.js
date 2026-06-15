const JOJOButton = document.querySelector("#pic")

const JOJOImage = document.querySelector("#JOJO")

JOJOButton.addEventListener("click", ()=>{
    JOJOImage.style.display == "none" ? JOJOImage.style.display = "block" : JOJOImage.style.display = "none"
});