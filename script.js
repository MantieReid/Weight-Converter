document.getElementById("output").style.visibility = "hidden";

document.getElementById("lbsInput").addEventListener("input", function(e) { //listener for input. Runs when input is entered. 
 
  document.getElementById("output").style.visibility = "visible"; //make the output visible after input
 
  let lbs = e.target.value;


  var gramsformula = Math.trunc(Math.round( lbs * 453.592));  //grams formula //gets rid of the numbers after the decimials, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("gramsOutput").innerHTML = gramsformula;
 
 
  var kgformula = Math.trunc(Math.round(lbs / 2.2046)); //killogram formula  //gets rid of the numbers after the decimials, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("kgOutput").innerHTML = kgformula;
 


  var ouncesformula = Math.trunc(Math.round(lbs *16));  //ounces formula // gets rid of the numbers after the decimials, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("ozOutput").innerHTML = ouncesformula;

  
  var milligramsformula =  Math.trunc(Math.round(lbs * 453592.37)); //miligrams formula  // gets rid of the numbers after the decimials, this is done with trunc.  Rounds down the numbers. 


  document.getElementById("miligramsOutput").innerHTML = milligramsformula; //takes 
 // var miligrams = Math.floor(miligrams* 100 / 100);


});