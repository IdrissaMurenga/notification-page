const readBtn = document.querySelector("#readBtn");
const notif1 = document.querySelector("#notif1");
const notif2 = document.querySelector("#notif2");
const notif3 = document.querySelector("#notif3");

const emoji1 = document.querySelector("#emoji1");
const emoji2 = document.querySelector("#emoji2");
const emoji3 = document.querySelector("#emoji3");
const num = document.querySelector("#num")

const readAll = () =>{
    notif1.classList.remove('bg_notif');
    notif2.classList.remove('bg_notif');
    notif3.classList.remove('bg_notif');

    emoji1.style.display = 'none';
    emoji2.style.display = 'none';
    emoji3.style.display = 'none';
    num.textContent = 0

}
readBtn.addEventListener("click", ()=>{
    readAll();
})