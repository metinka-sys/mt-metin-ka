const search=document.getElementById('search');
if(search){search.addEventListener('input',()=>{const q=search.value.toLowerCase();document.querySelectorAll('.card').forEach(c=>{c.style.display=c.innerText.toLowerCase().includes(q)?'flex':'none';});});}
