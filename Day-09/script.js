//Activity - 1
let x = document.getElementById("x");
x.textContent = "30 Days JS Challenge";

let h2 = document.getElementsByClassName("h2")[0];
h2.style.backgroundColor = "red";

//Activity - 2
let ele = document.createElement('div');
ele.textContent = "new element";
let main = document.getElementsByClassName("main")[0];
main.appendChild(ele);

let li = document.createElement('li');
li.textContent = 'code';

let list = document.getElementsByClassName("list")[0];
list.appendChild(li);

//Activity-3
let h1 = document.getElementsByClassName("h1")[0];
h1.parentNode.removeChild(h1);

let spec = document.getElementsByClassName("list")[0];

// Check if the list has any children
if (spec.hasChildNodes()) {
    // Get the last child of the list
    let lastChild = spec.lastChild;

    // Remove the last child
    spec.removeChild(lastChild);
}

//Activity - 4
let image = document.getElementsByClassName("image")[0];

// Check if the image element exists
if (image) {
    // Set the src attribute to the new URL
    image.setAttribute("src", "https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-thumb.jpg");
}

const element = document.getElementById('y');

// Add a class to the element
element.classList.add('new-class');

const element2 = document.getElementById('y');

// Remove a class from the element
element2.classList.remove('new-class');


//Activity - 5

let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', () => {
    // Get the paragraph element
    let para = document.getElementsByClassName('para')[0];
    
    // Change the text content of the paragraph
    para.textContent = "chalti phirti cocaine hai!";
});

let boxy = document.getElementsByClassName('boxy')[0];

boxy.addEventListener('mouseover',() => {
    boxy.style.borderColor = 'green';
})
