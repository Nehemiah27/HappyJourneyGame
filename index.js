// Function of restart on button click
function resetting() {
    alert("All your selections will be reset")
    if (time == 120) {
        alert("You've not even started the Game but restarted\r\nAny way, Please play again")
    } else {
        alert("Moves Taken by you are: " + movesTaken)
    }
    window.location.reload(true)
}
// movesTaken variable used to comment the Player performance upon his successful close of game
var movesTaken = 0;

// function of movement of values to cab started
function toCab(data) {
    var inLobbyOfficials = parseInt(document.getElementById("fo1").value);
    var inLobbyLuggage = parseInt(document.getElementById("fl1").value);
    var inCabOfficials = parseInt(document.getElementById("fo2").value);
    var inCabLuggage = parseInt(document.getElementById("fl2").value);

    var userPickedOfficialsAtLobby = parseInt(document.getElementById("io1").value);
    var userPickedLuggageAtLobby = parseInt(document.getElementById("il1").value);

    //     General check on the user inputs at Lobby side
    if (userPickedOfficialsAtLobby != 0 && userPickedOfficialsAtLobby != 1 && userPickedOfficialsAtLobby != 2) {
        document.getElementById("warning").innerHTML = "Please make the choice as per the Game rules";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)
    } else if (userPickedLuggageAtLobby != 0 && userPickedLuggageAtLobby != 1 && userPickedLuggageAtLobby != 2) {
        document.getElementById("warning").innerHTML = "Please make the choice as per the Game rules";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)
    } else if (userPickedLuggageAtLobby + userPickedOfficialsAtLobby == 0) {
        document.getElementById("warning").innerHTML = "Please select atleast One entity from the Lobby";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)
    } else if (userPickedLuggageAtLobby + userPickedOfficialsAtLobby > 2) {
        document.getElementById("warning").innerHTML = "Maximum limit for a Single movement is two";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)
    } else if (userPickedLuggageAtLobby > inLobbyLuggage || userPickedOfficialsAtLobby > inLobbyOfficials) {
        document.getElementById("warning").innerHTML = "Your Selection is out of available choices & Rules";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)
    }
    //     actual action upon correct user inputs
    else if (data.movingToCab.onclick) {
        if (userPickedOfficialsAtLobby == 2 || userPickedOfficialsAtLobby == 1) {
            data.leftOfficial.value = inLobbyOfficials - userPickedOfficialsAtLobby;
            data.rightOfficial.value = inCabOfficials + userPickedOfficialsAtLobby;
        }
        if (userPickedLuggageAtLobby == 2 || userPickedLuggageAtLobby == 1) {
            data.leftLuggage.value = inLobbyLuggage - userPickedLuggageAtLobby;
            data.rightLuggage.value = inCabLuggage + userPickedLuggageAtLobby;
        }
        // disabling the buttons after the action performed

        document.getElementById("io1").disabled = true;
        document.getElementById("il1").disabled = true;
        document.getElementById("io2").disabled = false;
        document.getElementById("il2").disabled = false;

        document.getElementById("c").disabled = true;
        document.getElementById("l").disabled = false;
        movesTaken++;
        document.getElementById("counting").innerHTML = movesTaken;


        if (document.getElementById("c").disabled) {
            document.getElementById("l").style.display = 'inline';
            document.getElementById("c").style.display = 'none';
        }

        //         clearing the user inputs after the action performed
        data.leftOI.value = "";
        data.leftLI.value = "";
        data.rightOI.value = "";
        data.rightLI.value = "";

    }
    var a = data.leftOfficial.value;
    var b = data.leftLuggage.value;
    var c = data.rightOfficial.value;
    var d = data.rightLuggage.value;

    //     a check on the balance of rules of the game
    if (b != 0 && a > b) {
        alert("Officals got annoyed, Its an Unhappy Journey\r\nOfficials & Servant are now Helpless!\r\nGame Over!\r\n" + "Moves Taken by you are: " + movesTaken)

        window.location.reload(true)
        document.getElementById("c").disabled = true;
        document.getElementById("l").disabled = true;
    } else if (d != 0 && c > d) {
        alert("Officals got annoyed, Its an Unhappy Journey\r\nOfficials & Servant are now Helpless!\r\nGame Over!\r\n" + "Moves Taken by you are: " + movesTaken)

        window.location.reload(true)
        document.getElementById("c").disabled = true;
        document.getElementById("l").disabled = true;
    } else if (c == 3 && d == 3) {
        if (movesTaken == 11) {
            alert("Congratulations!\r\nYou've played the game Safely & Smartly\r\nHappy Journey & Thanks for Playing the game\r\n" + "Moves Taken by you are: " + movesTaken)
            alert("For more, You can reach out to nehemiah2015s@gmail.com")
            window.location.reload(true)
        } else if (movesTaken > 11) {
            alert("Great!\r\nYou played the game Safely & you completed it but used more number of moves\r\nBe Smart & Be Safe\r\nHappy Journey!\r\n" + "Moves Taken by you are: " + movesTaken)
            window.location.reload(true)
        } else if (movesTaken < 11) {
            alert("Kudos to you!\r\nYou are Super Smart & Amazing\r\nYou've completed the game in most Optimised way\r\nEven, the admin is not able to find such an optimized approach\r\nCan you reach/mail at nehemiah2015s@gmail.com\r\nHe has a surprise for you, He is willing to buy a Coffee for you\r\nSee you Soon!\r\n" + "Moves Taken by you are: " + movesTaken)
            window.location.reload(true)
        }
    }
}

// function to the movement of values to cab ended 

// function to the movement of values back to the lobby started

function toLobby(data) {
    var inLobbyOfficials = parseInt(document.getElementById("fo1").value);
    var inLobbyLuggage = parseInt(document.getElementById("fl1").value);
    var inCabOfficials = parseInt(document.getElementById("fo2").value);
    var inCabLuggage = parseInt(document.getElementById("fl2").value);

    var userPickedOfficialsAtCab = parseInt(document.getElementById("io2").value);
    var userPickedLuggageAtCab = parseInt(document.getElementById("il2").value);

    //     General check on the user inputs
    if (userPickedOfficialsAtCab != 0 && userPickedOfficialsAtCab != 1 && userPickedOfficialsAtCab != 2) {
        document.getElementById("warning").innerHTML = "Please make the choice as per the Game rules";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)
    } else if (userPickedLuggageAtCab != 0 && userPickedLuggageAtCab != 1 && userPickedLuggageAtCab != 2) {

        document.getElementById("warning").innerHTML = "Please make the choice as per the Game rules";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";


        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)
    } else if (userPickedLuggageAtCab + userPickedOfficialsAtCab == 0) {
        document.getElementById("warning").innerHTML = "Please select atleast One entity from the Cab";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)

    } else if (userPickedLuggageAtCab + userPickedOfficialsAtCab > 2) {
        document.getElementById("warning").innerHTML = "Maximum limit for a Single movement is two";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";


        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)

    } else if (userPickedLuggageAtCab > inCabLuggage || userPickedOfficialsAtCab > inCabOfficials) {
        document.getElementById("warning").innerHTML = "Your Selection is out of available choices & Rules";
        document.getElementById("suggestions").innerHTML = "Enter 0 for Blank field, if any";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";
            document.getElementById("suggestions").innerHTML = "";
        }, 5000)
    }

    //     actual action upon correct user inputs
    else if (data.movingToCab.onclick) {
        if (userPickedOfficialsAtCab == 2 || userPickedOfficialsAtCab == 1) {
            data.rightOfficial.value = inCabOfficials - userPickedOfficialsAtCab;
            data.leftOfficial.value = userPickedOfficialsAtCab + inLobbyOfficials;
        }
        if (userPickedLuggageAtCab == 2 || userPickedLuggageAtCab == 1) {
            data.rightLuggage.value = inCabLuggage - userPickedLuggageAtCab;
            data.leftLuggage.value = userPickedLuggageAtCab + inLobbyLuggage;
        }

        // disabling the buttons after the action performed
        document.getElementById("io1").disabled = false;
        document.getElementById("il1").disabled = false;
        document.getElementById("io2").disabled = true;
        document.getElementById("il2").disabled = true;
        document.getElementById("c").disabled = false;
        document.getElementById("l").disabled = true;
        movesTaken++;

        document.getElementById("counting").innerHTML = movesTaken;


        if (document.getElementById("l").disabled) {
            document.getElementById("c").style.display = 'inline';
            document.getElementById("l").style.display = 'none';
        }
        //         clearing the user inputs after the action performed

        data.rightOI.value = "";
        data.rightLI.value = "";
        data.leftOI.value = "";
        data.leftLI.value = "";

    }
    var a = data.leftOfficial.value;
    var b = data.leftLuggage.value;
    var c = data.rightOfficial.value;
    var d = data.rightLuggage.value;
    //     a check on the balance of rules of the game

    if (b != 0 && a > b) {
        alert("Officals got annoyed, Its an Unhappy Journey\r\nOfficials & Servant are now Helpless!\r\nGame Over!\r\n" + "Moves Taken by you are " + movesTaken)

        window.location.reload(true)
        document.getElementById("c").disabled = true;
        document.getElementById("l").disabled = true;
    }
    if (d != 0 && c > d) {
        alert("Officals got annoyed, Its an Unhappy Journey\r\nOfficials & Servant are now Helpless!\r\nGame Over!\r\n" + "Moves Taken by you are " + movesTaken)

        window.location.reload(true)
        document.getElementById("c").disabled = true;
        document.getElementById("l").disabled = true;
    }
}

// function to movement of values back to the lobby ended

// timer function started

var isStart = false;
function startOf() {
    isStart = true;
    if (time == 120) {

        document.getElementById("io1").disabled = false;
        document.getElementById("il1").disabled = false;
        document.getElementById("io2").disabled = true;
        document.getElementById("il2").disabled = true;
        document.getElementById("c").disabled = false;
        document.getElementById("l").disabled = true;

        setTimeout(() => {
            alert("You are out of Time, Game will be restarted automatically\r\nYou Lost the Game\r\nGame Over!" + "Moves Taken by you are " + movesTaken)
            window.location.reload(true)
        }, 120000)
    }
    if (!document.getElementById("c").disabled) {
        document.getElementById("l").style.display = 'none';
    }
    if (time < 120) {
        document.getElementById("warning").innerHTML = "You've Already Started the Game, Please Play the Game";

        setTimeout(() => {
            document.getElementById("warning").innerHTML = "";

        }, 5000)


    }
}
var time = 120;
var timer = setInterval(() => {
    if (isStart && time >= 0) {
        document.querySelector(".minutes").innerHTML = parseInt(time / 60, 10);
        document.querySelector(".seconds").innerHTML = parseInt(time % 60, 10)
        time--
    }
}, 1000)
// timer Function ended
