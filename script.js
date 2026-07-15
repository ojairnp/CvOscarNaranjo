document.addEventListener('DOMContentLoaded',()=>{
 console.log('CV de Oscar Jair Naranjo Ponce  cargado ');
 const items = document.querySelectorAll('.item');
 const observer = new IntersectionObserver((entries)=>{
 entries.forEach(entry=>{
 if(entry.isIntersecting){
 entry.target.style.opacity='1';
 entry.target.style.transform='translateY(0)';
 }
 });
 }, {threshold:0.1});
 items.forEach(item=>{
 item.style.opacity='0';
 item.style.transform='translateY(12px)';
 item.style.transition='opacity 0.5s ease, transform 0.5s ease';
 observer.observe(item);
 });
});