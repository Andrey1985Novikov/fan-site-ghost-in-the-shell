$(document).ready(function(){
    
//    стартовый баннер
        $('.popup_close').click(function(){
            $('.popup').fadeOut();
        })
    });

//    карточки с текстом 
let flag = true;
$('.bt1').click(function AddDelete(){
    if (flag){
        $('.text').hide(5000);
    } else {
        $('.text').show(5000);
    }
    flag = !flag;
})


let flag2 = true;
$('.bt2').click(function AddDelete(){
    if (flag2){
        $('.text2').hide(5000);
    } else {
        $('.text2').show(5000);
    }
    flag2 = !flag2;
})


let flag3 = true;
$('.bt3').click(function AddDelete(){
    if (flag3){
        $('.text3').hide(5000);
    } else {
        $('.text3').show(5000);
    }
    flag3 = !flag3;
})

// футер
// const hamb = document.querySelector('#hamb');
const popupnav = document.querySelector('#popupnav');
const menu = document.querySelector('#menu').cloneNode(1);

// hamb.addEventListner("click",hambHandler);

// function hambHandler(e){
//     e.preventDefault();
//     popupnav.classList.togglr("open");
//     hamb.classList.toggle("active");
//     renderPopupnav();
// }
// function renderPopupnav(){
//     popupnav.appendChild(menu);
// }
$('#hamb').click(function hambHandler (e){
    $('#menu').show(1000);
})
