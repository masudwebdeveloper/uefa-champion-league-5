function getBudgetInputField(inputId) {
   const playerInputFieldId = document.getElementById(inputId);
   const playerInputValueString = playerInputFieldId.value;
   const playerInputValue = parseFloat(playerInputValueString);
   return playerInputValue;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
   // const playerInputFieldId = document.getElementById('player-input-field');
   // const playerInputValueString = playerInputFieldId.value;
   // const playerInputValue = parseFloat(playerInputValueString);
   const playerInputValue = getBudgetInputField('player-input-field')
   console.log(playerInputValue);
   const listItems = document.getElementById('list-items');
   const child = listItems.children.length;
   if (!playerInputValue) {
      alert('provide the input fill');
      return;
   } else if (isNaN(playerInputValue)) {
      alert('Please type invalid number');
      return;
   }
   const elementValueId = document.getElementById('player-expenses-total');
   const elementValueString = elementValueId.innerText;
   const previousExpenses = parseFloat(elementValueString);

   const playerCost = playerInputValue * child;
   const playerTotalCost = playerCost + previousExpenses;
   elementValueId.innerText = playerTotalCost;
})

document.getElementById('total-btn').addEventListener('click', function () {
   const managerInputValue = getBudgetInputField('manager-input-field');
   const coachInputValue = getBudgetInputField('coach-input-field');
   const managerAndCoachExpenses = managerInputValue + coachInputValue;
   if (!managerInputValue && !coachInputValue) {
      alert('provide the input fill');
      return;
   } else if (isNaN(managerAndCoachExpenses)) {
      alert('Please type invalid number');
      return;
   }

   const elementTotalValueId = document.getElementById('total');
   const elementTotalValueString = elementTotalValueId.innerText;
   const previousTotalExpenses = parseFloat(elementTotalValueString);

   const elementValueId = document.getElementById('player-expenses-total');
   const elementValueString = elementValueId.innerText;
   const previousPlayerExpenses = parseFloat(elementValueString);

   const totalExpenses = previousPlayerExpenses + managerAndCoachExpenses + previousTotalExpenses;
   elementTotalValueId.innerText = totalExpenses;


})