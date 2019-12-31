const paragraph = document.querySelector('p');

paragraph.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  paragraph.textContent = 'Player 1: ' + name;
}