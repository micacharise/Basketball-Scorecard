//HOME - + 1

let scorecardNumber = document.getElementsByClassName("scorecard-number")
let homeScoreBtnOne = document.getElementById("home-button-one")
let homeScore = 0

function homeAddByOne() {
    homeScore =+ 1
    scorecardNumber.textContent = homeScore
}