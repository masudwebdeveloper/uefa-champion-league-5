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
   const listItems = document.getElementById('list-items');
   const child = listItems.children.length;
   if (!playerInputValueString) {
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