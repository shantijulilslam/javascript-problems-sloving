//feetToMile

function feetToMile(feet){
    var feetAbsolute = Math.abs(feet);
    if(feetAbsolute != feet){
        return "Enter a positive value"
    }
    else{
    var mile = feet / 5280;
    return mile;
    }
 }
 var readyToConvert = feetToMile(5280);
 console.log(readyToConvert);


 //Wood Calculator 

 function woodCalcutator(chair, table, bed){
    var chairAbsolute = Math.abs(chair);
    var tableAbsolute = Math.abs(table);
    var bedAbsolute = Math.abs(bed);
    if(chairAbsolute != chair || tableAbsolute != table|| bedAbsolute != bed){
        return " please enter positive value";
    }
     else{

    var woodForFurniture = 1*chair + 3*table + 5*bed;
    return woodForFurniture;
     }
}
var totalWoodForRequiredFurniture = woodCalcutator(5, 4, 5,);
console.log(totalWoodForRequiredFurniture); 


//Brick Calculator

function brickCalculator(floor){
    var floorAbsolute = Math.abs(floor);
    if(floorAbsolute != floor){
        return "Enter valid floor number"
    }
  else  if(floor <= 10){
        var totalFeetFor1_10_floor = floor * 15;
        var totalBrickFor1_10_floor = totalFeetFor1_10_floor * 1000;
        return totalBrickFor1_10_floor;
    }
    else if(floor >= 11 && floor <= 20){
        var totalFeetFor11_20_floor =  (floor - 10) * 12;
        var totalBrickFor11_20_floor = 10*15*1000 + totalFeetFor11_20_floor * 1000;
        return totalBrickFor11_20_floor;
    }
    else if(floor > 20){
        var totalFeetFor20_up_floor =  (floor - 20) * 10;
        var totalBrickFor20_up_floor = 10*15*1000 + 10 * 12 * 1000 + totalFeetFor20_up_floor *1000;
        return totalBrickFor20_up_floor;
    }
}
var totalBrickForBuilding = brickCalculator(23);
console.log(totalBrickForBuilding);


//Find Tiny Friend

var listOfFriend = ["jamal", "rayhan", "shakil", "shantijul","jony"];
var tinyFriendLength = 0;
function tinyFriend(friendList){
    if(friendList == ""){
        return "distance cannot be negative ";
    }else{
    tinyFriendLength = friendList[0].length;
    for(var i = 0; i<friendList.length; i++){
        if(friendList[i].length < tinyFriendLength){
            tinyFriendLength = friendList[i].length;
        }
    }
}
    for(var j=0; j<friendList.length; j++)
    if(friendList[j].length == tinyFriendLength){
        return friendList[j];
    }

}
var readyTinyFriend = tinyFriend(listOfFriend);
console.log(readyTinyFriend);


