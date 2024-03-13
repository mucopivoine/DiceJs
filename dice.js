const buttonEl = document.getElementById ("roll-button");
const diceE1 = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
let historyList = [];
function rollDice(){
   const rollRandom = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollRandom);
diceE1.innerHTML= diceFace;
historyList.push(rollRandom);
updateRollHistory();
}
function updateRollHistory(){
   rollHistoryEl.innerHTML = "";
   for(let i = 0; i < historyList.length; i++){
    const listItem = document .createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span> ${getDiceFace(historyList[i])}</span>`;
    rollHistoryEl.appendChild(listItem);
   }
}
  function getDiceFace(rollResult){
 switch(rollResult){
    case 1:
        return "&#9856;";
    case 2:
            return "&#9857;";
    case 3 : 
        return "&#9858;";
    case 4: 
        return "&#9859;";
    case 5:
        return "&#9860;";
    case 6: 
        return "&#9861;";
       default:
       return " ";
       break;
 }
  }
buttonEl.addEventListener("click" , ()=>{
    diceE1.classList.add("roll-animation");
    setTimeout(()=>{
        diceE1.classList.remove("roll-animation");
    
    rollDice()
},1000);


});