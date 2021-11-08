let humOpened = false
let humIcon = document.getElementById("humIcon")
let menu = document.getElementById("menu")
let projectInfo = document.querySelector(".Projectinfo")
// let infoBtn = document.querySelector(".fa-info-circle")
let infoIcons = [...document.querySelectorAll(".fa-info-circle")]


infoIcons.forEach(e => {
    console.log(getComputedStyle(e).display)
    if(getComputedStyle(e).display !== "none"){
        e.parentElement.addEventListener("click" , ()=>{
            console.log(e)
            if(getComputedStyle(e.nextElementSibling).display === "none"){
                e.nextElementSibling.style.display = "block"
                console.log("jj")
            }
            else{
                e.nextElementSibling.style.display = "none"
            }
        })
    }
    
})
document.querySelectorAll(".fa-info-circle")

humIcon.addEventListener("click" , ()=>{
    menu.classList.toggle("display")
})

let languages = document.getElementById("languages")

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

let titles = [...document.querySelectorAll("#titles")]

window.addEventListener("scroll" , ()=>{
    if(isInViewport(languages)){
       document.documentElement.style.setProperty("--arabicAnim" , "arabic 1s forwards")
       document.documentElement.style.setProperty("--englishAnim" , "english 1s forwards")
       document.documentElement.style.setProperty("--frenchAnim" , "french 1s forwards")
    }
    })

let whatsappBtn = document.getElementById("sendToWhatsapp")

whatsappBtn.addEventListener("click" , (e)=>{
    let message = document.getElementById("mssg")
    window.open(`https://wa.me/212699229443?text=${message.value}` , "_blank")
    console.log(message.value)
})

