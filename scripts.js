
//function name must be at least two words or it won't work.
//quote generator
//Change the Math.random() * # to the number of quotes not including the filler.
function genQuote() { var randNum = Math.floor(Math.random() * 1) + 1; document.getElementById('quote').innerHTML = quotes[randNum];}

//quote array
var quotes = ["Filler", "\"Today is the day to decide to follow the Lord Jesus Christ.\"<br> - Eduardo Gavarret",];
