const redDots = document.querySelectorAll('.red-dot');
const marcarTodasLeidas = document.querySelector('#mark-all-read');
const unreadNotis = document.querySelectorAll('.unread');
const cantidadUnread = document.querySelector('.notifications-amount');

function marcarComoLeidas(){
    unreadNotis.forEach(notificaion => {
        notificaion.classList.remove('unread');
    });
    redDots.forEach(dot => {
        dot.classList.add('none');
    });
    cantidadUnread.innerHTML = '0';
}

marcarTodasLeidas.addEventListener('click',marcarComoLeidas);