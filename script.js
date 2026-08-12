const WHATSAPP_NUMBER="5511939591051";
const BASE_MESSAGE="Olá, Dr. Arlisson. Acessei seu site e gostaria de mais informações.";

function whatsappUrl(message){return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message||BASE_MESSAGE)}`}
function track(eventName,params={}){
  const payload={event:eventName,event_category:"engagement",page_location:location.href,...params};
  window.dataLayer=window.dataLayer||[];
  window.dataLayer.push(payload);
  if(typeof window.gtag==="function")window.gtag("event",eventName,params);
}

document.querySelectorAll(".js-whatsapp").forEach(link=>{
  const area=link.dataset.area;
  const message=area?`Olá, Dr. Arlisson. Acessei seu site e gostaria de informações sobre ${area}.`:link.dataset.message;
  link.href=whatsappUrl(message);
  link.target="_blank";
  link.rel="noopener noreferrer";
});

document.querySelectorAll(".js-track").forEach(link=>link.addEventListener("click",()=>{
  const eventName=link.dataset.event||"click_cta";
  const params={link_url:link.href,link_text:link.textContent.trim(),area:link.dataset.area||undefined,cta:eventName};
  track(eventName,params);
  if(link.classList.contains("js-whatsapp"))track("click_whatsapp",params);
  if(link.classList.contains("js-phone"))track("click_phone",params);
  if(link.classList.contains("js-whatsapp")||eventName.includes("cta"))track("generate_lead",{lead_source:"site_cta",cta:eventName,area:link.dataset.area||undefined});
}));

document.querySelector("#year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu"),nav=document.querySelector("#main-nav");
menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!open));menu.setAttribute("aria-label",open?"Abrir menu":"Fechar menu");nav.classList.toggle("open",!open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Abrir menu")}));

const items=document.querySelectorAll(".reveal");
if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches){items.forEach(i=>i.classList.add("visible"))}else{const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");io.unobserve(entry.target)}}),{rootMargin:"0px 0px -8%",threshold:.08});items.forEach(i=>io.observe(i))}

if("PerformanceObserver" in window){try{new PerformanceObserver(list=>list.getEntries().forEach(entry=>window.dataLayer.push({event:"web_vital",metric_name:entry.name,metric_value:Math.round(entry.value),metric_id:entry.id||undefined}))).observe({type:"largest-contentful-paint",buffered:true})}catch(e){}}
