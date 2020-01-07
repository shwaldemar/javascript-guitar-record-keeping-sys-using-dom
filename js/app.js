console.log("this app has loaded Simon")

document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleDeleteAllClick = () => {
  const guitarList = document.querySelector('#guitar-list');
  guitarList.innerHTML = '';
}

const handleNewItemFormSubmit = (event) => {
  event.preventDefault();
  const guitarListItem = createGuitarListItem(event.target);
  const guitarList = document.querySelector('#guitar-list');
  guitarList.appendChild(guitarListItem);
  event.target.reset();
}

const createGuitarListItem = (form) => {
  const guitarListItem = document.createElement('ul');
  guitarListItem.classList.add('#guitar-list-item')

  const ownedBy = document.createElement('h3');
  ownedBy.textContent = form.owner.value;
  guitarListItem.appendChild(ownedBy)

  const theGuitar = document.createElement('p');
  theGuitar.textContent = form.guitar.value;
  guitarListItem.appendChild(theGuitar)

  const theFrets = document.createElement('p');
  theFrets.textContent = form.frets.value;
  guitarListItem.appendChild(theFrets)

  const theCategory = document.createElement('p');
  theCategory.textContent = form.category.value;
  guitarListItem.appendChild(theCategory);

  return guitarListItem;
}
