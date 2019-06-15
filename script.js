document.getElementById("output").style.visibility = "hidden"; //hides the output of the conversion. 
document.getElementById("notice").style.visibility = "hidden" //hides the header that explains that results are rounded  and truncated

document.getElementById("lbsInput").addEventListener("input", function(e) { //listener for input. Runs when input is entered. 
 

  document.getElementById("notice").style.visibility = "visible"; //makes it  visible.  header that explains that results are rounded  and truncated
  document.getElementById("output").style.visibility = "visible"; //make the output visible after input
  
 
  let lbs = e.target.value;


  var gramsformula = Math.trunc(Math.round( lbs * 453.592));  //grams formula //gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("gramsOutput").innerHTML = gramsformula;
 
 
  var kgformula = Math.trunc(Math.round(lbs / 2.205)); //kilogram formula  //gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("kgOutput").innerHTML = kgformula;
 


  var ouncesformula = Math.trunc(Math.round(lbs *16));  //ounces formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("ozOutput").innerHTML = ouncesformula;

  
  var milligramsformula =  Math.trunc(Math.round(lbs * 453592.37)); //milligrams formula  // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 


  document.getElementById("milligramsOutput").innerHTML = milligramsformula; 

 
 
  var metrictonsformula = lbs / 2204.623; //metric tons formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("MetricTonsOutput").innerHTML = metrictonsformula;  



  var microgramformula = Math.trunc(Math.round(lbs * 4.536e+8)); //micrograms tons formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("microgramoutput").innerHTML = microgramformula;  

  
  var imperialtonformula = lbs / 2240; //imperial ton tons formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("imperailtonoutput").innerHTML = imperialtonformula;  




  




});