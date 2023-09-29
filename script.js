 
 
 const daysE1 = document.getElementById('days');
 const hoursE1 = document.getElementById('hours');
 const minsE1 = document.getElementById('mins');
 const secsE1 = document.getElementById('secs');

const newYears="1 Jan 2024";

function countdown() {
    const newYearDate= new Date (newYears);
    const currentDate= new Date();

    const totalSeconds= (newYearDate- currentDate)/1000;

    const days= Math.floor(totalSeconds/3600/24);
    const hours= Math.floor(totalSeconds/3600)%24;

    const minutes= Math.floor(totalSeconds/60)%60;
    const seconds= Math.floor(totalSeconds)%60;
    console.log(days, hours, minutes, seconds);

    daysE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    minsE1.innerHTML=minutes;
    secsE1.innerHTML=seconds;
    
    

    
}
countdown();
// 18881953184 milisaneye az tarich )//
setInterval(countdown,1000);
// پارامتر اول در متد setInterval نام تابعی که دستور رفرش را در خود دارد گرفته و پارامتر دوم زمان اجرای این تابع می باشد. این زمان بر حسب میلی ثانیه می باشد.
function formatTime(item){
    return time<10 ? `0${time}` : time;
}