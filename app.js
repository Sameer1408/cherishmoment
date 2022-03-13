console.log("hello")
const menuBtn = document.getElementById('navbtn');
const phoneMenu = document.getElementById('phoneMenu');
const whatsappicon = document.getElementById('whatsappicon')
const chatdiv = document.getElementById('chatdiv')

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
        whatsappicon.style.display = "none"
        phoneMenuOpen = true;

    } else {
        phoneMenu.style.display = "none"
        line1.style.transform = "rotate(0deg)"
        line2.style.transform = "rotate(0deg)"
        line1.style.transition = "400ms ease"
        line2.style.transition = "400ms ease"
        line3.style.display = "block"
        line3.style.transition = "400ms ease"
        whatsappicon.style.display = "block"
        phoneMenuOpen = false;

    }
})

var date = new Date().getFullYear();
console.log(date)

const year = document.getElementById('year');
year.innerText = `${date}-${date+1}`


const servicesDiv = document.getElementById('servicesDiv');
const cross = document.getElementById('cross');
const services = document.getElementById('services');

services.addEventListener('click', () => {
    servicesDiv.style.display = 'block';
})

cross.addEventListener('click', () => {
    servicesDiv.style.display = 'none';
})


var visible = false;
var chats = ['Order Now!', 'How can I help you!', 'Hello!']
var index = 0;

function chatDivVisibility() {
    if (visible == false) {
        chatdiv.style.visibility = 'visible';
        chatdiv.style.opacity = '1';
        chatdiv.style.transform = 'visibility 0s linear 0s,opacity 500ms';
        chatdiv.innerHTML = chats[index]
        if (index == 2) {
            index = 0;
        } else {
            index = index + 1;
        }

        visible = true
    } else {
        chatdiv.style.visibility = 'hidden';
        chatdiv.style.opacity = '0';
        chatdiv.style.transform = 'visibility 0s linear 0s, opacity 500ms';
        visible = false;
    }
}

function showWhatsappIcon() {
    setTimeout(() => {
        whatsappicon.style.visibility = "visible";
        whatsappicon.style.opacity = '1';
        whatsappicon.style.transform = 'visibility 0s linear 0s,opacity 500ms';
    }, 2000);
}

window.onload = function() {
    showWhatsappIcon();
    setInterval(chatDivVisibility, 5000);
};

// whatsappicon.addEventListener('mouseover', () => {
//     setInterval(chatDivVisibility, 2000)
// })


var c = document.getElementById('c')
var review1 = document.getElementById('review1');
var readmore1 = document.getElementById('readmore1');
readmore1.addEventListener('click',()=>{
  if(readmore1.innerHTML == "read more"){
    review1.style.height="300px"  
    review1.style.position="relative"
    review1.style.marginTop="-140px"
    review1.style.backgroundColor = "white"
    readmore1.innerText="read less"}
    else{
        review1.style.height="130px"  
        readmore1.innerText="read more"
        review1.style.marginTop="0px"
    }

})



var review2 = document.getElementById('review2');
var readmore2 = document.getElementById('readmore2');
readmore2.addEventListener('click',()=>{
  if(readmore2.innerHTML == "read more"){
    review2.style.height="300px"  
    review2.style.position="relative"
    review2.style.marginTop="-160px"
    review2.style.backgroundColor = "white"
    readmore2.innerText="read less"}
    else{
        review2.style.height="130px"  
        readmore2.innerText="read more"
        review2.style.marginTop="0px"
    }

})


var review3 = document.getElementById('review3');
var readmore3 = document.getElementById('readmore3');
readmore3.addEventListener('click',()=>{
  if(readmore3.innerHTML == "read more"){
    review3.style.height="300px"  
    review3.style.position="relative"
    review3.style.marginTop="-50px"
    review3.style.backgroundColor = "white"
    readmore3.innerText="read less"}
    else{
        review3.style.height="130px"  
        readmore3.innerText="read more"
        review3.style.marginTop="0px"
    }

})
