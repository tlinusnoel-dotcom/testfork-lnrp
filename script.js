const b=document.querySelector('.burger'),m=document.querySelector('.menu');
b.addEventListener('click',()=>{m.classList.toggle('open');b.setAttribute('aria-expanded',m.classList.contains('open'))});
const cur=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.menu a:not(.cta)').forEach(a=>{if(a.getAttribute('href')===cur)a.classList.add('active')});
document.getElementById('year').textContent=new Date().getFullYear();
