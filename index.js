@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
}

html {
    font-size: 30px;
}

/*Body styling using Neat UI like features  */
body {
    background: linear-gradient(to left, #f0ec08, #f58506);
    color: white;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1Ljg5NDA0IiBjeT0iNS44NTc2NyIgcj0iNC41IiBmaWxsPSIjMUFCNUVCIiBzdHJva2U9IiMwMDE4MzUiLz48L3N2Zz4=), auto;
    
}

/*Dynamic styling of Title of the game  */
h1 {
    text-align: center;
    background: -webkit-linear-gradient(#7808f0, #06bdf5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

#cab {
    float: right;
    color: black;
}

.lobbyBoard {
    display: inline;
    float: left;
}

.cabBoard {
    display: inline;
    float: right;
    color: black;
}

/* Inputs/Boxes for display of stats are styled here */
input[type=text] {
    width: 30px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    cursor: pointer;
}

#main {
    padding-right: 5%;
    padding-left: 5%;
}


/*  Styling of buttons started*/
#buttons {
    padding-left: 30px;
}



#c,
#l,
#instructions,
#reStart {
    font-size: 25px;
    cursor: pointer;
    padding: 5px;
    color: black;
    background-color: aqua;
    border-radius: 10px;
}

#c:hover,
#l:hover,
#instructions:hover,
#reStart:hover {
    color: white;
    background-color: violet;
    border-radius: 15px;
    font-family: 'Poppins', sans-serif;
}

a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
}
/*end of styling of buttons  */

/* Start of Styling Timer */
#functionForTime{
    text-align: center;
    color: red;
    font-family: 'Poppins', sans-serif;
    font-size: 100px;
}
.start{
    padding: 10px;
    border-radius: 30px;
    width: 120px;
    font-size: 25px;
    color: white;
    background-color: rgb(42, 202, 42);
}
.start:hover{
    font-size: 30px;
    border-radius: 50px;
}
/* end of Styling Timer */
