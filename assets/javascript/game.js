let team1ShootButton = document.querySelector("#teamone-shoot-button");
let team2ShootButton = document.querySelector("#teamtwo-shoot-button");

let team1shotsTaken = document.querySelector("#teamone-numshots");
let team2shotsTaken = document.querySelector("#teamtwo-numshots");

let team1goals = document.querySelector("#teamone-numgoals");
let team2goals = document.querySelector("#teamtwo-numgoals");

let ResetButton = document.querySelector("#reset-button");

let numberOfresets = document.querySelector("#num-resets");


ResetButton.addEventListener("click", function() {
    console.log("reset button clicked")
    let NewNumberOfresets = Number (numberOfresets.innerHTML) + 1;
    numberOfresets.innerHTML = NewNumberOfresets; 
    team1shotsTaken.innerHTML = 0; 
    team1goals.innerHTML = 0;
    team2shotsTaken.innerHTML = 0;
    team2goals.innerHTML = 0; 
})

team1ShootButton.addEventListener("click", function() {
    console.log("Team 1 shoot button clicked")
    let newTeam1ShotsValue = Number (team1shotsTaken.innerHTML) + 1;
    team1shotsTaken.innerHTML = newTeam1ShotsValue;     

    if(Math.random() < 0.5){
        let newTeam1goals = Number (team1goals.innerHTML) + 1;
        team1goals.innerHTML = newTeam1goals;
    }
    
})

team2ShootButton.addEventListener("click", function() {
    console.log(" Team 2 shoot button clicked");
    let newTeam2ShotsValue = Number (team2shotsTaken.innerHTML) + 1;
    team2shotsTaken.innerHTML = newTeam2ShotsValue;

    if(Math.random() < 0.5){
        let newTeam2goals = Number (team2goals.innerHTML) + 1;
        team2goals.innerHTML = newTeam2goals;
    }
})
 

