
//function name must be at least two words or it won't work.
//quote generator
//Change the Math.random() * # to the number of quotes not including the filler.
function genQuote() { var randNum = Math.floor(Math.random() * 1) + 1; document.getElementById('quote').innerHTML = quotes[randNum];}

//quote array
var quotes = ["Filler", "\"What sunshine is to flowers, smiles are to humanity. These are but trifles, to be sure; but scattered along life's pathway, the good they do is inconceivable.\"<br> - Joseph Addison",];
