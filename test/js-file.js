const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a glorious text-content!';
container.appendChild(content);
let p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';
container.appendChild(p);
let headerThree = document.createElement('h3');
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = 'blue';
container.appendChild(headerThree);
let divOne = document.createElement('div');
divOne.style.border = '2px solid';
divOne.style.borderColor = 'black';
divOne.style.backgroundColor = 'pink';
let headerOne = document.createElement('h1');
headerOne.textContent = "I'm in a div";
let paragraphTwo = document.createElement('p');
paragraphTwo.textContent = "ME TOO!";
divOne.appendChild(headerOne, paragraphTwo);
container.appendChild(divOne);
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', alertFunction);
function alertFunction() {
  alert("YAY! YOU DID IT!");
};
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    alert(button.id);
  });
});