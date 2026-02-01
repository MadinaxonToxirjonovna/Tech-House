function getCart(){ try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; } }
function saveCart(c){ localStorage.setItem("cart", JSON.stringify(c)); }
function getFavs(){ try { return JSON.parse(localStorage.getItem("favorites")) || []; } catch { return []; } }
function saveFavs(f){ localStorage.setItem("favorites", JSON.stringify(f)); }
function updateCartCount(){ const el=document.getElementById("cartCount"); if(el) el.textContent=`(${getCart().reduce((s,i)=>s+(i.qty||0),0)})`; }
function updateFavCount(){ const el=document.getElementById("favCount"); if(el) el.textContent=`(${getFavs().length})`; }

function showToast(text){
  const t=document.createElement("div");
  t.textContent=text;
  t.style.position="fixed"; t.style.right="20px"; t.style.bottom="20px";
  t.style.background="#0f172a"; t.style.color="#fff";
  t.style.padding="10px 14px"; t.style.borderRadius="12px";
  t.style.fontWeight="800"; t.style.zIndex="9999";
  t.style.boxShadow="0 12px 25px rgba(0,0,0,.25)";
  t.style.opacity="0"; t.style.transform="translateY(8px)";
  t.style.transition=".2s";
  document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity="1"; t.style.transform="translateY(0)";},10);
  setTimeout(()=>{t.style.opacity="0"; t.style.transform="translateY(8px)"; setTimeout(()=>t.remove(),200);},1400);
}

function addToCartFromSelected(product){
  const ds={
    id:product.id, name:product.name, title:product.title||"",
    price:product.price, image:product.image
  };
  const item={
    id:(ds.id||"").trim(),
    key:`${(ds.name||"").trim()}|${(ds.title||"").trim()}`,
    name:(ds.name||"").trim(),
    title:(ds.title||"").trim(),
    price:Number(ds.price||0),
    image:ds.image||"",
    qty:1
  };
  if(!item.name || !item.price) return;

  const cart=getCart();
  const exist=cart.find(p=>p.key===item.key);
  if(exist) exist.qty=(exist.qty||0)+1;
  else cart.push(item);

  saveCart(cart);
  updateCartCount();
  showToast("🛒 Savatchaga qo‘shildi");
}

(function initSingle(){
  const spName=document.getElementById("spName");
  if(!spName) return;

  const spImg=document.getElementById("spImg");
  const spCat=document.getElementById("spCat");
  const spPrice=document.getElementById("spPrice");
  const spDesc=document.getElementById("spDesc");
  const likeBtn=document.getElementById("likeBtn");
  const addBtn=document.getElementById("addCartBtn");
  const notFound=document.getElementById("notFound");

  let product=null;
  try{ product=JSON.parse(localStorage.getItem("selectedProduct")); }catch{ product=null; }

  if(!product || !product.id){
    if(notFound) notFound.style.display="block";
    return;
  }

  spName.textContent=product.name||"";
  if(spCat) spCat.textContent="Kategoriya: "+(product.category||"-");
  if(spPrice) spPrice.textContent=Number(product.price||0).toLocaleString("uz-UZ")+" so'm";
  if(spDesc) spDesc.textContent=product.desc||"Ushbu mahsulot uy uchun qulay va zamonaviy yechim.";
  if(spImg) spImg.src=product.image||"";

  function syncLike(){
    const favs=getFavs();
    if(favs.includes(product.id)) likeBtn?.classList.add("active");
    else likeBtn?.classList.remove("active");
    updateFavCount();
  }
  syncLike();

  likeBtn?.addEventListener("click",()=>{
    let favs=getFavs();
    if(favs.includes(product.id)){
      favs=favs.filter(x=>x!==product.id);
      showToast("💔 Sevimlilardan olib tashlandi");
    }else{
      favs.push(product.id);
      showToast("❤️ Sevimlilarga qo‘shildi");
    }
    saveFavs(favs);
    syncLike();
  });

  addBtn?.addEventListener("click",()=>addToCartFromSelected(product));

  document.addEventListener("DOMContentLoaded", ()=>{
    updateCartCount();
    updateFavCount();
  });

  updateCartCount();
  updateFavCount();
})();
