console.log("hello")
const menuBtn = document.getElementById('navbtn');
const phoneMenu = document.getElementById('phoneMenu');

const line1 = document.getElementById('l1');
const line2 = document.getElementById('l2');
const line3 = document.getElementById('l3');

var phoneMenuOpen = false;
menuBtn.addEventListener('click', () => {
    if (phoneMenuOpen == false) {
        phoneMenu.style.display = "block"
        line1.style.transform = "rotate(45deg)"
        line2.style.transform = "rotate(135deg)"
        line1.style.transition = "400ms ease"
        line2.style.transition = "400ms ease"
        line3.style.display = "none"
        line3.style.transition = "400ms ease"
        phoneMenuOpen = true;

    } else {
        phoneMenu.style.display = "none"
        line1.style.transform = "rotate(0deg)"
        line2.style.transform = "rotate(0deg)"
        line1.style.transition = "400ms ease"
        line2.style.transition = "400ms ease"
        line3.style.display = "block"
        line3.style.transition = "400ms ease"
        phoneMenuOpen = false;

    }
})

var date = new Date().getFullYear();
console.log(date)

const year = document.getElementById('year');
year.innerText = `${date}-${date+1}`