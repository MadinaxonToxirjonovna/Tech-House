function setYear(){
  document.querySelectorAll("#year").forEach(y => y.textContent = new Date().getFullYear());
}
function getCart(){ try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; } }
function getFavs(){ try { return JSON.parse(localStorage.getItem("favorites")) || []; } catch { return []; } }
function updateCartCount(){ const el=document.getElementById("cartCount"); if(el) el.textContent=`(${getCart().reduce((s,i)=>s+(i.qty||0),0)})`; }
function updateFavCount(){ const el=document.getElementById("favCount"); if(el) el.textContent=`(${getFavs().length})`; }

document.addEventListener("DOMContentLoaded", ()=>{
  setYear();
  updateCartCount();
  updateFavCount();
});
