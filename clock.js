
var clock = setInterval(function(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var period = 'AM';
    if(hour >= 12)
    {
        period = 'PM';
    }
    if(hour > 12){hour= hour-12};
    var time = addZero(hour) +":" +addZero(min)+":"+addZero(sec)+" "+period;
    document.getElementById('digital-time').textContent = time;
    setInterval(clock,1000);
},1000);


function addZero(time) {

    if(time<10)
    {
        return "0" + time;
    }
    return time;
}

document.getElementById('delete-all').addEventListener('click' , function(){
    document.getElementById("print-box").textContent = "";
})


function alarmSet() {

    var hourValue = document.getElementById("hour").value;
    var minuteValue = document.getElementById('min').value;
    var secondValue = document.getElementById('sec').value;
    var periodValue = document.getElementById('period').value;

    if(hourValue == "" || minuteValue == "" || secondValue == "")
    {
        alert("PLEASE ENTER CORRECT TIME FORMAT");
        return;
    }

    if(periodValue == "")
    {
        alert("PLEASE AM OR PM");
        return;
    }

    var alarmTime = addZero(hourValue) + ":" + addZero(minuteValue) + ":" + addZero(secondValue) + " "+periodValue;


    var node = document.createElement("div");
    var textnode = document.createTextNode(alarmTime);
    node.style.marginTop = " 2%";
    node.appendChild(textnode);
    node.style.borderBottom = "2px solid black;"
    
    document.getElementById("print-box").appendChild(node);

    var deleteButton = document.createElement("button");
    var deleteButtonText = document.createTextNode("DELETE");
    deleteButton.style.fontSize = "1.0rem";
    deleteButton.style.marginLeft = "90%";
    deleteButton.style.marginTop = "-3%";
    deleteButton.style.marginBottom = "1.5%";
    deleteButton.style.backgroundColor = "white";
    deleteButton.appendChild(deleteButtonText);
    document.getElementById("print-box").appendChild(deleteButton);

    deleteButton.onmouseover = function(){
        deleteButton.style.backgroundColor = "#414d44";
        deleteButton.style.color = "white";
        deleteButton.style.opacity = "0.9";
    }
    deleteButton.onmouseout = function(){
        deleteButton.style.backgroundColor = "white";
        deleteButton.style.color = "black";
    }

    deleteButton.addEventListener('click' , function(){

        node.remove();
        deleteButton.remove();
        turnButton.remove();
        line.remove();
        clearInterval(timer);
    })


    var turnButton = document.createElement("button");
    var tunrButtonText = document.createTextNode("TURN OFF");
    turnButton.foc
    turnButton.style.fontSize = "1.0rem";
    turnButton.style.marginLeft = "75%";
    turnButton.style.marginTop = "-4.5%";
    turnButton.style.backgroundColor = "white";
    turnButton.appendChild(tunrButtonText);
    document.getElementById("print-box").appendChild(turnButton);

    turnButton.onmouseover = function(){
        turnButton.style.backgroundColor = "#207a50";
        turnButton.style.color = "white";
        turnButton.style.opacity = "0.9";
    }
    turnButton.onmouseout = function(){
        turnButton.style.backgroundColor = "white";
        turnButton.style.color = "black";
    }


    turnButton.addEventListener('click', function(event){

        if(turnButton.textContent == "TURN OFF")
        {
            alarmTime = " ";
            turnButton.textContent = "TURN ON";
        }
        else{
            alarmTime = node.textContent;
            turnButton.textContent = "TURN OFF";
        }
        
    });


    var line = document.createElement("div");
    line.style.borderBottom = "2px solid black";
    line.style.marginTop = "1%"
    document.getElementById("print-box").appendChild(line);

    var h2 = document.getElementById('digital-time');

    


    
    

    var timer = setInterval(function(){
        
        var currentTime = h2.textContent ;
        if (alarmTime == currentTime) {
            alert("HEY TIME IS " + alarmTime );
            turnButton.textContent = "TURN ON";
            clearInterval(timer);
        }
    },1000);

}
