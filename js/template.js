console.log('this app has loaded Simon')

document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = (event) => {
  event.preventDefault();
  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);
  event.target.reset();
}

const createReadingListItem = (form) => {
  const readingListItem = document.createElement('h2');
  readingListItem.classList.add('reading-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  readingListItem.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.author.value;
  readingListItem.appendChild(author)

  const category = document.createElement('p')
  category.textContent = form.category.value;
  readingListItem.appendChild(category);

  return readingListItem
}

const handleDeleteAllClick = () => {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = ''
}
