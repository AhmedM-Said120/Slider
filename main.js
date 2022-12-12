let arrayImg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg"]
const next = document.querySelector(".next")
const last = document.querySelector(".last")
const img = document.querySelector(".img img")
const imgShow = document.querySelector(".imgShow")
let i = 0
arrayImg.forEach((img,s)=>{
    imgShow.innerHTML += `<img class="allImg" src="img/${img}">`
})
let allImg = document.querySelectorAll(".allImg")
allImg.forEach((imgs,id)=>{
    imgs.onclick = ()=>{
        allImg.forEach((d)=>{
            d.classList.remove("active")
        })
        img.src = imgs.src
        i = id
        imgs.classList.add("active")
    }
})
allImg[0].classList.add("active")
next.onclick = () => {
    if (i >= 0) {
        i++
        img.src = `img/${arrayImg[i]}`
        if (i == arrayImg.length) {
            i = 0
            img.src = `img/${arrayImg[0]}`
        }
        allImg.forEach((d)=>{
            d.classList.remove("active")
        })
        allImg[i].classList.add("active")
    }
}
last.onclick = () => {
    if (i < arrayImg.length) {
        i--
        img.src = `img/${arrayImg[i]}`
        if (i == 0 - 1) {
            img.src = `img/${arrayImg[arrayImg.length - 1]}`
            i = arrayImg.length - 1
        }
        allImg.forEach((d)=>{
            d.classList.remove("active")
        })
        allImg[i].classList.add("active")
    }
}