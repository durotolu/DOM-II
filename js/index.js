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

