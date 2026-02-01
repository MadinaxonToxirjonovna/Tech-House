function getCart(){ try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; } }
function saveCart(c){ localStorage.setItem("cart", JSON.stringify(c)); }
function updateCartCount(){ const el=document.getElementById("cartCount"); if(el) el.textContent=`(${getCart().reduce((s,i)=>s+(i.qty||0),0)})`; }

function renderCart(){
  const box=document.getElementById("cartItems");
  const itemCount=document.getElementById("itemCount");
  const totalPrice=document.getElementById("totalPrice");
  if(!box) return;

  const cart=getCart();
  box.innerHTML="";

  if(cart.length===0){
    box.innerHTML=`<div class="emptyCart">🛒 Savatcha bo‘sh</div>`;
    if(itemCount) itemCount.textContent="0";
    if(totalPrice) totalPrice.textContent="0 so'm";
    updateCartCount();
    return;
  }

  let total=0, count=0;
  cart.forEach((p,idx)=>{
    const qty=p.qty||0;
    const line=(Number(p.price)||0)*qty;
    total+=line; count+=qty;

    const row=document.createElement("div");
    row.className="cartItem";
    row.innerHTML=`
      <img class="cartImg" src="${p.image||""}" alt="${p.name||""}">
      <div class="cartInfo">
        <b class="cartName">${p.name||""}</b>
        <div class="cartTitle">${p.title||""}</div>
        <div class="cartPrice">${line.toLocaleString("uz-UZ")} so'm</div>

        <div class="qtyRow">
          <button class="qtyBtn minus" data-i="${idx}" type="button">-</button>
          <span class="qtyNum">${qty}</span>
          <button class="qtyBtn plus" data-i="${idx}" type="button">+</button>
          <button class="removeBtn" data-i="${idx}" type="button">O‘chirish</button>
        </div>
      </div>
    `;
    box.appendChild(row);
  });

  if(itemCount) itemCount.textContent=count.toLocaleString("uz-UZ");
  if(totalPrice) totalPrice.textContent=total.toLocaleString("uz-UZ")+" so'm";
  updateCartCount();
}

document.addEventListener("click",(e)=>{
  if(!document.getElementById("cartItems")) return;

  const plus=e.target.closest(".qtyBtn.plus");
  const minus=e.target.closest(".qtyBtn.minus");
  const rm=e.target.closest(".removeBtn");
  const clear=e.target.closest("#clearCart");

  if(clear){
    saveCart([]);
    renderCart();
    return;
  }

  const cart=getCart();

  if(plus){
    const i=Number(plus.dataset.i);
    if(cart[i]) cart[i].qty=(cart[i].qty||0)+1;
    saveCart(cart);
    renderCart();
    return;
  }

  if(minus){
    const i=Number(minus.dataset.i);
    if(!cart[i]) return;
    const q=cart[i].qty||0;
    if(q>1) cart[i].qty=q-1;
    else cart.splice(i,1);
    saveCart(cart);
    renderCart();
    return;
  }

  if(rm){
    const i=Number(rm.dataset.i);
    if(cart[i]) cart.splice(i,1);
    saveCart(cart);
    renderCart();
  }
});

document.addEventListener("DOMContentLoaded", ()=>{
  updateCartCount();
  renderCart();
});
