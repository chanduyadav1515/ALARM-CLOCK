
// digital clock
var clock = setInterval(function(){
    var date = new Date();
    // getting hour
    var hour = date.getHours();
    // getting minute
    var min = date.getMinutes();
    // getting second
    var sec = date.getSeconds();
    // getting period value by checking hour
    var period = 'AM';
    if(hour >= 12)
    {
        period = 'PM';
    }
    // printing in 12 hrs format
    if(hour > 12)
    {
        hour= hour-12;
    }
    //adding hour, min, sec and period 
    var time = addZero(hour) +":" +addZero(min)+":"+addZero(sec)+" "+period;
    // displaying time
    document.getElementById('digital-time').textContent = time;
    // interval for every one second
    setInterval(clock,1000);
},1000);

// adding zeros before hour, min, sec if there values are less than 10
function addZero(time) {
    if(time<10 )
    {
        return "0" + time;
    }
    return time;
}

var timer = null;
//this will remove all displayed alarms and also deletes alarm time;
var deleteAll = document.getElementById('delete-all');
deleteAll.addEventListener('click' , function(){
    clearInterval(timer);
    document.getElementById("print-box").textContent = "";
})

// sets alarm, it creates turn on/off button, delete button, alarm time for every alarm
function alarmSet() {

    //getting hour, minute, second values from input boxes
    var hourValue = document.getElementById("hour").value;
    var minuteValue = document.getElementById('min').value;
    var secondValue = document.getElementById('sec').value;
    var periodValue = document.getElementById('period').value;

    //if values are not defined or 1>hour>24 or 0>minute>59 or 0>second>59 then alert window by this message
    if(hourValue == "" || minuteValue == "" || secondValue == "" || hourValue <= 0 || hourValue >24 || minuteValue < 0 || minuteValue >59 || secondValue < 0 || secondValue >59 )
    {
        alert("PLEASE ENTER CORRECT TIME FORMAT");
        return;
    }

    // if hour value is in 24hrs format tell them to write in 12hrs format
    if(hourValue >12)
    {
        alert("PLEASE ENTER TIME IN 12hrs FORMAT");
        return;
    }

    //if period value is not mentioned alert this message
    if(periodValue == "")
    {
        alert("PLEASE ENTER AM OR PM");
        return;
    }

    //adding alarm time
    var alarmTime = addZero(hourValue) + ":" + addZero(minuteValue) + ":" + addZero(secondValue) + " "+periodValue;

    // ..............................CREATING DIV.................................
    //creating a div for displaying the alarm time
    var alarmValue = document.createElement("div");
    //adding innertext value
    var textnode = document.createTextNode(alarmTime);
    alarmValue.appendChild(textnode);
    //styling div
    alarmValue.style.marginTop = " 2%";
    alarmValue.style.borderBottom = "2px solid black;"
    //appending div to print-box
    document.getElementById("print-box").appendChild(alarmValue);

    //...............................CREATING DELETE BUTTON....................
    //creating a button for deleting div 
    var deleteButton = document.createElement("button");
    //adding innertext value
    var deleteButtonText = document.createTextNode("DELETE");
    deleteButton.appendChild(deleteButtonText);
    //styling delete button
    deleteButton.style.fontSize = "1.0rem";
    deleteButton.style.marginLeft = "90%";
    deleteButton.style.marginTop = "-3%";
    deleteButton.style.marginBottom = "1.5%";
    deleteButton.style.backgroundColor = "white";
    //appending button to print-box
    document.getElementById("print-box").appendChild(deleteButton);

    //hover effect for delete button
    //when mouse is on delete button
    deleteButton.onmouseover = function(){
        deleteButton.style.backgroundColor = "#414d44";
        deleteButton.style.color = "white";
        deleteButton.style.opacity = "0.9";
    }
    //when mouse is outside delete button
    deleteButton.onmouseout = function(){
        deleteButton.style.backgroundColor = "white";
        deleteButton.style.color = "black";
    }

    //when button is clicked alarm box will be deleted and alarm time also will not work
    deleteButton.addEventListener('click' , function(){
        alarmValue.remove();
        deleteButton.remove();
        turnButton.remove();
        line.remove();
        clearInterval(timer);
    })

    //...............................CREATING TURN ON/OFF BUTTON....................
    //creating button for turn on/off
    var turnButton = document.createElement("button");
    //adding innertext value
    var tunrButtonText = document.createTextNode("TURN OFF");
    turnButton.appendChild(tunrButtonText);
    //styling turn on/off button
    turnButton.style.fontSize = "1.0rem";
    turnButton.style.marginLeft = "75%";
    turnButton.style.marginTop = "-4.5%";
    turnButton.style.backgroundColor = "white";
    //appending button to print box
    document.getElementById("print-box").appendChild(turnButton);

    //hover effect for turn on/off button
    //when mouse is on turn on/off button
    turnButton.onmouseover = function(){
        turnButton.style.backgroundColor = "#207a50";
        turnButton.style.color = "white";
        turnButton.style.opacity = "0.9";
    }
    //when mouse is outside button
    turnButton.onmouseout = function(){
        turnButton.style.backgroundColor = "white";
        turnButton.style.color = "black";
    }

    //when turn off is clicked alarm time will not work but not deleted, if you click turn on then again alarm time will start
    turnButton.addEventListener('click', function(event){
        //if turn off
        if(turnButton.textContent == "TURN OFF")
        {
            alarmTime = " ";
            turnButton.textContent = "TURN ON";
        }
        else{
            alarmTime = alarmValue.textContent;
            turnButton.textContent = "TURN OFF";
        }      
    });

    //...............BORDER LINE................
    //creating a div for border bottom line
    var line = document.createElement("div");
    //styling div
    line.style.borderBottom = "2px solid black";
    line.style.marginTop = "1%"
    //appending to print box
    document.getElementById("print-box").appendChild(line);


    //checking alarm time and current time to alert user 
    var checkTime = document.getElementById('digital-time');
     timer = setInterval(function(){
         //getting current time
        var currentTime = checkTime.textContent ;
        //comparing if yes alert will generated and alarm time will stop working
        if (alarmTime == currentTime) {
            alert("HEY TIME IS " + alarmTime );
            turnButton.textContent = "TURN ON";
            clearInterval(timer);
        }
    },1000);

}

