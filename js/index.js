// Your code goes here

// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick

let navigation = document.querySelectorAll('.nav-link');
for (let i=0; i<navigation.length; i++) {
    navigation[i].addEventListener('mouseover', (e) => e.target.style.color = 'blue');
}
for (let i=0; i<navigation.length; i++) {
    navigation[i].addEventListener('mouseover', (e) => e.target.style.fontWeight = 'bold');
}
for (let i=0; i<navigation.length; i++) {
    navigation[i].addEventListener('mouseout', (e) => e.target.style.color = 'initial');
}
for (let i=0; i<navigation.length; i++) {
    navigation[i].addEventListener('mouseout', (e) => e.target.style.fontWeight = 'initial');
}

let keyChange = document.querySelector('*');
keyChange.addEventListener('keydown', (e) => e.target.style.color = 'blue');

let roll = document.querySelector('*');
roll.addEventListener('wheel', () => alert("You're scrolling"));

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    //let data = ev.dataTransfer.getData("text");
    ev.target.remove(imges, allDivs)
}

let imges = document.querySelector('img');
imges.setAttribute('draggable', 'true')
imges.setAttribute('ondragstart', 'drag(event)')

let allDivs = document.querySelector('.text-content');
allDivs.setAttribute('ondragover', 'allowDrop(event)');
allDivs.setAttribute('ondrop', 'drop(event)');

for (let i=0; i<navigation.length; i++) {
    navigation[i].addEventListener('click', (e) => e.preventDefault());
}

let allButtons = document.querySelectorAll('.btn');
for (let i=0; i<allButtons.length; i++) {
    allButtons[i].addEventListener('click', (e) => e.focus());
}

// let whenLoad = document.querySelector('html');
// whenLoad.addEventListener('load', () => alert("Page is loaded"));

let prop1 = document.querySelector('.content-destination p');
prop1.addEventListener('click', (e) => e.target.style.backgroundColor = 'blue');
prop1.addEventListener('click', (e) => e.stopPropagation());

let prop2 = document.querySelector('.content-destination');
prop2.addEventListener('click', (e) => e.target.style.backgroundColor = 'green');