// Write your JavaScript code here.

window.addEventListener("load", function(){
    let status = document.getElementById("flightStatus");
    let bkGround = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");

    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function(event){        
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
            status.innerHTML = "Shuttle in flight.";
            bkGround.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }      
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The Shuttle has landed.";
        bkGround.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function(){
        let response = confirm("Confirm that you want to abort the mission.");
        if (response){
            status.innerHTML = "Mission aborted.";
            bkGround.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    });
    let imgContainer = document.getElementById("img-container");

    let upButton = document.getElementById("up");
    upButton.addEventListener("click", function(){
        let imgStyle = window.getComputedStyle(imgContainer);
        let topValue = imgStyle.getPropertyValue("top").replace("px","");
        imgContainer.style.top = (Number(topValue)-10)+"px"; 
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    });

    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function(){
        let imgStyle = window.getComputedStyle(imgContainer);
        let topValue = imgStyle.getPropertyValue("top").replace("px","");
        imgContainer.style.top = (Number(topValue)+10)+"px"; 
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    });

    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function(){
        let imgStyle = window.getComputedStyle(imgContainer);
        let leftValue = imgStyle.getPropertyValue("left").replace("px","");
        imgContainer.style.left = (Number(leftValue)+10)+"px"; 
    });

    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function(){
        let imgStyle = window.getComputedStyle(imgContainer);
        let leftValue = imgStyle.getPropertyValue("left").replace("px","");
        imgContainer.style.left = (Number(leftValue)-10)+"px"; 
    });
});
// Remember to pay attention to page loading!let 