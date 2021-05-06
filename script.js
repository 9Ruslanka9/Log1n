

function isInternetExplorer() {             /*===================Проверка на браузер==================*/
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}
console.log(isInternetExplorer());
    if (isInternetExplorer() === false) {
        document.querySelector('.internet').classList.remove('info');
        document.querySelector('.internet').classList.add('non_info');
}   else {
    alert('Вы пользуетесь устаревшим браузером. Для лучшей работы сайта, поменяйте его на более современный');
}



let clock = document.querySelector('.clock') /*===================Часики==================*/

function time(){
let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let day = date.getDay();

let number = date.getDate();
let month = date.getMonth();

let daylist = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]
let Month = ["Января", "Ферваля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

if(hours<10) {hours = '0'+hours};
if(min<10) {min = '0'+min};
if(sec<10) {sec = '0'+sec};

clock.innerHTML = ` ${number} ${Month[month]} ${daylist[day]} 
${hours}:${min}`;
}
setInterval(time,500);

