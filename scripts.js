
//function name must be at least two words or it won't work.
//quote generator
//Change the Math.random() * # to the number of quotes not including the filler.
function genQuote() { var randNum = Math.floor(Math.random() * 3) + 1; document.getElementById('quote').innerHTML = quotes[randNum];}

//quote array
var quotes = [
  "Filler",
  "\"What sunshine is to flowers, smiles are to humanity. These are but trifles, to be sure; but scattered along life's pathway, the good they do is inconceivable.\"<br> - Joseph Addison",
  "\"If you find yourself making the same mistakes, struggling to be firm in your desire to change, express to your Heavenly Father your love for Him and strengthen your faith in the Lord Jesus Christ. Learn of Him, study about His sacred Atonement, and think deeply about what He suffered for you. Keep His commandments with more exactness. As you do your part to build your faith in the Savior, I promise you that heaven will compound this gift of faith, and you will have the spiritual strength to repent of your sins and not return to them.\"<br> - Neil L. Andersen",
  "\"Be yourself; everyone else is already taken.\"<br> - Unknown"
];
