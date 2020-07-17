function feetToMile(feet) {
    if(feet < 0) {
        return "Distance cannot be negative.";
    }

    var mile = feet / 5280;
    return mile;
}

function woodCalculator(chair, table, bed) {
    if(chair < 0 || table < 0 || bed < 0) {
        return "quantity cannot be negative.";
    }

    var woodForChair = chair;
    var woodForTable = 3 * table;
    var woodForBed = 5 * bed;
    var total = woodForChair + woodForTable + woodForBed;
    return total;
}

function brickCalculator(floor) {
    if(floor < 0) {
        return "number of floors cannot be negative.";
    }

    var brick = 0;
    for(var i = floor; i > 0; i--) {
        if(floor >= 21) { 
            brick += 10; 
        }
        else if(floor >= 11) { 
            brick += 12; 
        }
        else { 
            brick += 15; 
        }
    }

    brick *= 100;
    return brick;
}

function tinyFriend(names) {
    if(names.length == 0) {
        return "friend list is empty.";
    }

    var smallestFriend = names[0];
    for(var i = 1; i < names.length; i++) {
        if(names[i].length < smallestFriend.length) {
            smallestFriend = names[i];
        }
    }

    return smallestFriend;
}
