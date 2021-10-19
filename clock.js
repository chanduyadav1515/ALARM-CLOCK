
function clock(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = 'AM';
    if(hour >= 12)
    {
        period = 'PM';
    }
    if(hour > 12){hour= hour-12};
    let time = hour +":" +min+":"+sec+" "+period;
    document.getElementById('digitalTime').innerHTML = time;
    setInterval(clock,1000);
}
clock();