var incBtn = document.querySelector('.inc');
var decBtn = document.querySelector('.dec');
var count = document.querySelector('h1');


incBtn.addEventListener('click',function()
{

  count.innerHTML = Number(count.innerHTML) + 1;

  if(count.innerHTML > 0)
  {
    count.style.color = 'green';
  }
  else if(count.innerHTML < 0) {
    count.style.color = 'red';
  }
  else {
    count.style.color = 'white';
  }

  count.animate([{opacity:'0.2'}, {opacity: '1.0'}],
  {duration: 500, fill: 'forwards'});

});

decBtn.addEventListener('click',function()
{

  count.innerHTML = Number(count.innerHTML) - 1;

  if(count.innerHTML > 0)
  {
    count.style.color = 'green';
  }
  else if(count.innerHTML < 0) {
    count.style.color = 'red';
  }
  else {
    count.style.color = 'white';
  }

  count.animate([{opacity:'0.2'}, {opacity: '1.0'}],
  {duration: 500, fill: 'forwards'});

});
