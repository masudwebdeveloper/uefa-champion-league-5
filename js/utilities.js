function getElementValue(elementId) {
   const elementValueId = document.getElementById(elementId);
   const elementVlaue = elementValueId.innerText;
   return elementVlaue;
}
function setPlayer(listItemsId, listItemId, name) {
   const listItems = document.getElementById(listItemsId);
   const listItem = document.createElement(listItemId);
   listItem.innerText = name;
   listItems.appendChild(listItem);
}
function getEventHandeler(elementId) {
   const click = document.getElementById(elementId).addEventListener('click', function () { });
   const selectBtn = document.getElementById(elementId);
   if (!click) {
      selectBtn.style.background = 'gray'
      selectBtn.setAttribute('disabled', true);
   }
}

if (listItems.childNodes.length > 5) {
   const click = document.getElementsByTagName(button).addEventListener('click', function () { });
   click.setAttribute('disbaled', true);
}
// function setButtonHandeler(btnId, name) {
//    document.getElementById('btn-one').addEventListener('click', function () {
//       const playerName = getElementValue('neymar');
//       setPlayer('list-items', 'li', playerName);
//       getEventHandeler('btn-one');
//    })
// }
function setButtonHandeler(btnId, nameId) {
   document.getElementById(btnId).addEventListener('click', function () {
      const playerName = getElementValue(nameId);
      setPlayer('list-items', 'li', playerName);
      getEventHandeler(btnId);
   })
}
