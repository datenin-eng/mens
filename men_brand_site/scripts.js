// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ el.scrollIntoView({behavior:'smooth'}); }
  });
});

document.getElementById('menu-toggle').addEventListener('click',()=>{
  document.body.classList.toggle('menu-open');
});

// Simple form validation
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const email = form.email.value.trim();
  if(!email.includes('@')){
    msg.textContent = 'Ошибка: email должен содержать символ @';
    msg.style.color = 'red';
    return;
  }
  // fake submit
  msg.textContent = 'Спасибо! Сообщение отправлено (демо).';
  msg.style.color = 'green';
  form.reset();
});
