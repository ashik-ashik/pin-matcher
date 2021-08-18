// generate pin
 function generatePin(){
  const makePin = Math.random();
  // pin number ke string e convart kori,
  // than sekhan theke 6 digit cut kore ni... then letter gulake uppercase kore feli
  const pin = makePin.toString().substring(2,8);
  return pin;
 };
//  display genareted pin
document.getElementById("generate-pin").addEventListener("click", () => {
  const pin = generatePin();
  document.getElementById("display-pin").value = pin;
});

// type pin
document.getElementById('number-pad').addEventListener("click", (event) => {
  const clickedNumber = event.target.innerText;
  let typedDisplay = document.getElementById('typed-pin');
  let buttons = document.getElementsByClassName("button");
  for(btn of buttons){
    if(event.target == btn){
      if(!isNaN(clickedNumber) && typedDisplay.value.length <6){
        typedDisplay.value += clickedNumber;
      }else if(clickedNumber == "C"){
        typedDisplay.value = "";
      }
    }
  }
  
});

// matching get pin and typed pin and show matching message
document.getElementById('varify-pin').addEventListener('click', (e)=> {
  const typedPin = document.getElementById('typed-pin').value;
  const pin = document.getElementById('display-pin').value;
  const failedMessage = document.getElementById('verify-faild');
  const successMessage = document.getElementById('verify-success');
  const tryLeft = document.getElementById('try-left');
  let tryCount = parseInt(tryLeft.innerText);
  if(typedPin == pin){
    failedMessage.style.display = "none";
    successMessage.style.display = "block";
    tryLeft.innerText = 3;
    document.getElementById('typed-pin').value = '';
  }else{
    failedMessage.style.display = "block";
    successMessage.style.display = "none";
    tryCount--;
    tryLeft.innerText = tryCount;
    if(tryCount == 0) {
      e.target.setAttribute("disabled", true);
      document.getElementById("generate-pin").setAttribute("disabled", true);
      document.getElementById('typed-pin').setAttribute("readonly", true);
      let buttons = document.getElementsByClassName("button");
      for(btn of buttons){
        btn.setAttribute("disabled", true);
      }
    }
  }
  

});

// clear last item delete

document.getElementById("clear-one").addEventListener("click", () => {
    let typedDisplay = document.getElementById('typed-pin');
    // get typed value from typed input field
    let typedVal = typedDisplay.value;
    // typed value ke alada alada kore feli
    typedVal = typedVal.split('');
    // proti ta valu ke array element korbo... tai empty array lagbe
    let typedList = [];
    // loop diye typed value gula array te add kore feli
    for (ele of typedVal){
      typedList.push(ele);
    }
    // delet last element from array
    typedList.pop();
    // baki element gula join kore feli
    const deleted = typedList.join('');
    // kaj ses uplade kore feli
    typedDisplay.value = deleted;
  
});