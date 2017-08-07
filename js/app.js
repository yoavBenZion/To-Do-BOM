const list = document.querySelector('#list');
const hideButton = document.querySelector('.hideButton');
const input = document.querySelector('input');
const button = document.querySelector('button.description');
const p = document.querySelector('p.description');
const addItemInput = document.querySelector('input.addItemInput');
const AddItemButton = document.querySelector('button.AddItemButton');
const ClearAll = document.querySelector('button.clearAll');

const RemoveItemButton = document.querySelector('button.removeItemButton');
const ul = document.getElementsByTagName('ul')[0];
const li = [].slice.call(document.getElementsByTagName('li'));


const liColor = document.querySelector('#liColor');
const liColorbutton = document.querySelector('#liColorbutton');

const rainbowButton = document.querySelector('.rainbow');
const rainbow_list = document.querySelectorAll('#rainbow_list li'); 
const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

const zebraButton = document.querySelector('.zebra');
const zebra_list = document.querySelectorAll('li:nth-child(odd)');


button.addEventListener('click', ()=> {
  if (input.value === '') {
    alert('list title input is empty, please add a value');
  } else {
    p.textContent = input.value + ' :';
  }
  input.value = '';
});

p.title = 'list description';

hideButton.addEventListener('click', ()=> {
  if (list.style.display == 'none') {
    list.style.display = 'block';
    hideButton.textContent = 'Hide list';
  } else {
    list.style.display= 'none';
    hideButton.textContent = 'Show list';
  }
});


AddItemButton.addEventListener('click', ()=>{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  if (li.textContent === '') {
    alert('text Input Null. plese add content');
  } else {
    
    ul.appendChild(li);
  }
  addItemInput.value = '';
});


RemoveItemButton.addEventListener('click', ()=> {
  let li_last = document.querySelector('li:last-child');
  ul.removeChild(li_last);
});


ClearAll.addEventListener('click', ()=>{
  for(let i =0; i<li.length; i++) {
    ul.removeChild(li[i]);
  }
});


liColorbutton.addEventListener('click', ()=>{
  for(let i=0; i<li.length; i ++) {
    li[i].style.color = liColor.value;
  }
});

/*Doesnot realy work yet*/
const WhatsAppBtn = document.querySelector('.WhatsAppBtn');

WhatsAppBtn.addEventListener('click', ()=>{
  WhatsAppBtn.style.color = 'red';
  location.href = '"whatsapp://send?text=Hello World!&phone=+972584909020"';
});


zebraButton.addEventListener('click', ()=>{
  for(let i =0; i<zebra_list.length; i++) {
    zebra_list[i].style.backgroundColor = 'lightgrey';
  }
});


rainbowButton.addEventListener('click', ()=>{
  for(let i=0; i< colors.length; i++){
      rainbow_list[i].style.backgroundColor = colors[i];
  }
});