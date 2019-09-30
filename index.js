// 4 Crystals
// Every crystal has a Number
// The number for each crystal is dynamically created for each Game
// When a crystal is clicked, it should add that dynamic number to the present ScopedCredential, until the total score is achieved or overpassed
// the game should re-start upon this condition, WITHOUT refreshing the page!
// if the score is equal, wins +1
// if score goes over amount, losses +1

var random_result;
var lost;
var win;


for (var i = 0; i < 4; i++){
    
    var crystal = $("<div>");
        crystal.addClass("crystal");
        $(".crystals").append(crystal);
}