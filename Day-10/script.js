// Activity - 1
const texty = document.getElementsByClassName('texty')[0];
const btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', () => {
    texty.textContent == 'Hello world!!!' ? texty.textContent = 'Namaste Dunia!!!' : texty.textContent = 'Hello world!!!'
})

// Activity - 2
const imgi = document.getElementsByClassName('imgi')[0];
imgi.addEventListener('dblclick', () => {
    imgi.style.display = 'none';
});

// Activity - 3
const babita = document.getElementsByClassName('babita')[0];
babita.addEventListener('mouseover', () => {
    babita.classList.remove('bg-yellow-500');
    babita.classList.add('bg-red-600');
});

babita.addEventListener('mouseout', () => {
    babita.classList.remove('bg-red-600');
    babita.classList.add('bg-yellow-500');
});

const key_down = document.getElementById('key_down');
key_down.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
})

const key_up = document.getElementById('key_up');
const txt = document.getElementsByClassName('txt')[0];
key_up.addEventListener('keyup', () => {
    txt.textContent = key_up.value;
});

const name = document.getElementById('name');
const pass = document.getElementById('pass');
const sbmt = document.getElementById('sbmt');
const form = document.getElementsByClassName('form')[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(name.value);
    console.log(pass.value);
});

const selectElement = document.getElementById('options');
const selectedValue = document.getElementById('selectedValue');

selectElement.addEventListener('change', (event) => {
    selectedValue.textContent = `You selected: ${event.target.value}`;
});

document.getElementById('myList').addEventListener('click', function(event) {
    if(event.target && event.target.nodeName === 'LI') {
        const li_txt = document.getElementsByClassName('li_txt')[0];
        li_txt.textContent = event.target.textContent;
    }
});

  // Task 10: Add an event listener to the parent element to handle dynamically added child elements
  document.getElementById('parentElement').addEventListener('click', function(event) {
    if (event.target && event.target.matches('li')) {
        console.log('Dynamically added element clicked:', event.target.textContent);
    }
});

// Add new items dynamically to the list in Task 10
document.getElementById('addItemButton').addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item ' + (document.querySelectorAll('#parentElement li').length + 1);
    document.querySelector('#parentElement ul').appendChild(newItem);
});
