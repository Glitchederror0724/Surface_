document.getElementById("year").textContent=new Date().getFullYear();
const m=document.getElementById("menu"),n=document.getElementById("nav");
if(m&&n){m.onclick=()=>n.classList.toggle("open");n.querySelectorAll("a").forEach(a=>a.onclick=()=>n.classList.remove("open"))}
const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");o.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(e=>o.observe(e));