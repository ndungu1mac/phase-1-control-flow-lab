function scuberGreetingForFeet(){
  let greetings;
  if (scuberGreetingForFeet <= 400){
     greetings = 'eligible for a free sample'
  }
  else if (scuberGreetingForFeet >2000){
     greetings = 'Charge 30 dollars'
  }
  else if  (scuberGreetingForFeet >2500){
     greetings = 'Ride not allowed'
  }
  //return greetings = `Eligible for a free sample`;
  //else if scuberGreetingForFeet > 2000;
     //return greetings = `Pay 30 dollars`;
  //else return greetings = `Ride not allowed`
}



function ternaryCheckCity(){
  const passengerMessage = ternaryCheckCity = 'NYC'? "Ok, sounds good." : "No go";
}

function switchOnCharmFromTip(){
  const switchOnCharmFromTip = ''
  let message;
  switch(OnCharmFromTip){
    case 'generous':
     message = "Thank you so much";
     break;
    case  'not as generous':
     message = "Thank you ";
     break;
     default:
        console.log("Bye.");
      break;

  }
 

}