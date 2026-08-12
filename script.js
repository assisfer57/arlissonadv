const WHATSAPP="https://api.whatsapp.com/message/VNDXA6H7645ZI1?autoload=1&app_absent=0&utm_source=ig";
document.querySelectorAll(".whatsapp").forEach(a=>{a.href=WHATSAPP;a.target="_blank";a.rel="noopener noreferrer"});
document.querySelector("#year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu"),nav=document.querySelector(".site-header nav");
menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!open));nav.classList.toggle("open",!open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
const items=document.querySelectorAll(".reveal");
if(matchMedia("(prefers-reduced-motion: reduce)").matches){items.forEach(i=>i.classList.add("visible"))}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});items.forEach(i=>io.observe(i))}
