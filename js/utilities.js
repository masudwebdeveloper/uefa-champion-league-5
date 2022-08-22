function getElementValue(elementId) {
   const elementValueId = document.getElementById(elementId);
   const elementValue = elementValueId.innerText;
   return elementValue;
}
function setPlayer(listItemsId, listItemId, name) {
   const listItems = document.getElementById(listItemsId);
   const listItem = document.createElement(listItemId);
   listItem.innerText = name;
   listItems.appendChild(listItem);
}
// select 5 player add start

// select 5 player add end
function getEventHandeler(elementId) {
   const click = document.getElementById(elementId).addEventListener('click', function () { });
   const selectBtn = document.getElementById(elementId);
   if (!click) {
      selectBtn.style.background = 'gray'
      selectBtn.setAttribute('disabled', true);
   }
}

function setButtonHandeler(btnId, nameId) {
   document.getElementById(btnId).addEventListener('click', function () {
      const playerName = getElementValue(nameId);
      setPlayer('list-items', 'li', playerName);
      getEventHandeler(btnId);
      const listItems = document.getElementById('list-items');
      const child = listItems.children.length;
      if (child > 4) {
         alert('Your Selected Player Is Five Done')
         const buttons = document.querySelectorAll('.selectbtn');
         for(const button of buttons)
         button.setAttribute('disabled', true);
      }
   })
}
