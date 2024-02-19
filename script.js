document.getElementById("output").style.visibility = "hidden"; //hides the output of the conversion. 
document.getElementById("notice").style.visibility = "hidden" //hides the header that explains that results are rounded  and truncated





document.getElementById("lbsInput").addEventListener("input", function(userinput) 

{ 
  //listener for input. Runs when input is entered. 
 
  //userinput is what the user enters into the textbox/input for pounds. 


  document.getElementById("notice").style.visibility = "visible"; //makes it  visible.  header that explains that results are rounded  and truncated
  document.getElementById("output").style.visibility = "visible"; //make the output visible after input
  
 
let lbs = userinput.target.value;  //lbs equals what the user enetered. 
 // let lbs = e.target.value;

  

  var gramsformula = Math.trunc(Math.round( lbs * 453.592));  //grams formula //gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("gramsOutput").innerHTML = gramsformula;

 
 var kgformula = Math.trunc(Math.round(lbs / 2.205)); //kilogram formula  //gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("kgOutput").innerHTML = kgformula;
 


  //var ouncesformula = Math.trunc(Math.round(lbs *16));  //ounces formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 

  //document.getElementById("ozOutput").innerHTML = ouncesformula;

  
  var milligramsformula =  Math.trunc(Math.round(lbs * 453592.37)); //milligrams formula  // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 


  document.getElementById("milligramsOutput").innerHTML = milligramsformula; 

 
 
  var metrictonsformula = lbs / 2204.623; //metric tons formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("MetricTonsOutput").innerHTML = metrictonsformula;  



  var microgramformula = Math.trunc(Math.round(lbs * 4.536e+8)); //micrograms tons formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("microgramoutput").innerHTML = microgramformula;  

  
  var imperialtonformula = lbs / 2240; //imperial ton tons formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("imperailtonoutput").innerHTML = imperialtonformula;  


  var ustonformula = lbs / 2000; //Us Ton formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("ustonoutput").innerHTML = ustonformula;  

  var ouncesformula = Math.trunc(Math.round(lbs *16));  //ounces formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("ozOutput").innerHTML = ouncesformula;  


  var stoneformula =  lbs / 14; //stone Ton formula // gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 
  document.getElementById("Stoneoutput").innerHTML = stoneformula;  



  
  




});


function convert_to_grams() //converts pounds to grams. Then it takes the result of that and puts it in the grams input textbox. 
{

  var lbs = document.getElementById("lbsInput").value; //lbs is equal to what the user entered. 
 
  var gramsformula = Math.trunc(Math.round( lbs * 453.592));  //grams formula //gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("grams_input").value = gramsformula;


}




function convert_to_lbs()  //converts grams to pounds.  Then it takes the result of that and puts it in the pounds input textbox. 
{
  
var grams_entered_by_user = document.getElementById("grams_input").value; //sets the variable to hold the current numbers of what the user entered. 
var grams_to_pounds = grams_entered_by_user / 453.592; //converts grams to pounds. 

document.getElementById("lbsInput").value = grams_to_pounds;


}


function pounds_to_kilograms()  //converts pounds to kilograms. The result is put into the kilograms input textbox. 
{
  var lbs = document.getElementById("lbsInput").value; //lbs is equal to what the user entered. 


  var pounds_to_kilograms = Math.trunc(Math.round(  lbs  /  2.205 )); //kilograms to  //gets rid of the numbers after the decimals, this is done with trunc.  Rounds down the numbers. 

  document.getElementById("Kilograms_input").value = pounds_to_kilograms; //puts the  result of the formula into the input box. 
 


}


