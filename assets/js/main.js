const PRODUCTS_POPULAR = [
  { id: "p1", name: "Kompyuter",  title: "Lenovo Intel i3-1315U Win11S", price: 6076000,  image: "/images/laptop.jpg", category:"Kompyuterlar" },
  { id: "p2", name: "Soat",       title: "Samsung Galaxy Watch 7",      price: 2019000,  image: "/images/soat1.jpg",   category:"Aqlli soatlar" },
  { id: "p3", name: "Muzlatgich", title: "LG GC-B459MLWM",              price: 10286000, image: "/images/muzlatgich.jpg", category:"Maishiy texnika" },
  { id: "p4", name: "Soat",       title: "Luxury Wristwatch Women Blue",price: 1200000,  image: "/images/soat1.jpg",   category:"Aksessuar" },
];

const PRODUCTS_NEW = [
  { id: "n1", name: "Kompyuter", title: "Lenovo Intel i3-1315U Win11S", price: 6076000, image: "/images/laptop.jpg", category:"Kompyuterlar" },
  { id: "n2", name: "Soat",      title: "Samsung Galaxy Watch 7",      price: 2019000, image: "/images/soat1.jpg",   category:"Aqlli soatlar" },
];

function getCart(){ try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; } }
function saveCart(c){ localStorage.setItem("cart", JSON.stringify(c)); }

function getFavs(){ try { return JSON.parse(localStorage.getItem("favorites")) || []; } catch { return []; } }
function saveFavs(f){ localStorage.setItem("favorites", JSON.stringify(f)); }

// old favs=["p1","p2"] bo‘lsa ham ishlasin
function favIdOf(x){ return (typeof x === "string") ? x : x?.id; }
function isFav(id){ return getFavs().some(x => favIdOf(x) === id); }

function updateCartCount(){
  const el = document.getElementById("cartCount");
  if(!el) return;
  const total = getCart().reduce((s,i)=> s + (i.qty||0), 0);
  el.textContent = `(${total})`;
}
function updateFavCount(){
  const el = document.getElementById("favCount");
  if(!el) return;
  el.textContent = `(${getFavs().length})`;
}


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

function $(id){ return document.getElementById(id); }

function initNavbarSearch(){
  const globalSearch = $("globalSearch");
  if(!globalSearch) return;

  globalSearch.addEventListener("keydown", (e)=>{
    if(e.key !== "Enter") return;

    const q = globalSearch.value.trim();
    if(!q) return;

    // Har doim products.html ga yo'naltiramiz, chunki home page da hamma mahsulot yo'q
    location.href = `products.html?q=${encodeURIComponent(q)}`;
  });


}



function allProducts(){ return [...PRODUCTS_POPULAR, ...PRODUCTS_NEW]; }
function findProductById(id){ return allProducts().find(p=>p.id===id) || null; }

function toggleFavById(id){
  const p = findProductById(id);
  if(!p) return false;

  let favs = getFavs();
  const exists = favs.some(x => favIdOf(x) === id);

  if(exists){
    favs = favs.filter(x => favIdOf(x) !== id);
    saveFavs(favs);
    updateFavCount();
    showToast("💔 Sevimlilardan olib tashlandi");
    return false;
  }

  favs.push({
    id: p.id,
    name: p.name,
    title: p.title,
    price: p.price,
    image: p.image,
    category: p.category || "",
  });
  saveFavs(favs);
  updateFavCount();
  showToast("❤️ Sevimlilarga qo‘shildi");
  return true;
}

function productCardHTML(p){
  const liked = isFav(p.id) ? "active" : "";
  return `
    <li data-id="${p.id}">
      <picture><img src="${p.image}" alt="${p.name}"></picture>

      <div class="detail">
        <div class="icon">
          <button class="likeBtn ${liked}" type="button" data-fav-id="${p.id}">
            <img src="/images/sevimlilar.png" alt="like">
          </button>

          <button class="addCartBtn" type="button"
            data-id="${p.id}" data-name="${p.name}" data-title="${p.title}"
            data-price="${p.price}" data-image="${p.image}">
            <img class="savatcha" src="/images/add cart.png" alt="add cart">
          </button>
        </div>

        <strong>${p.name}</strong>
        <span>${p.title}</span>
        <h4>${Number(p.price).toLocaleString("uz-UZ")} so'm</h4>
      </div>
    </li>
  `;
}

function renderHome(){
  const popularBox = document.getElementById("productList");
  const newBox = document.getElementById("newProductList");

  if (popularBox) popularBox.innerHTML = PRODUCTS_POPULAR.map(productCardHTML).join("");
  if (newBox) newBox.innerHTML = PRODUCTS_NEW.map(productCardHTML).join("");

  updateFavCount();
  updateCartCount();
}

function addToCartFromDataset(ds){
  const item={
    id:String(ds.id||"").trim(),
    key:`${String(ds.name||"").trim()}|${String(ds.title||"").trim()}`,
    name:String(ds.name||"").trim(),
    title:String(ds.title||"").trim(),
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

function openSingle(id){
  const p=findProductById(id);
  if(!p) return;

  localStorage.setItem("selectedProduct", JSON.stringify({
    id:p.id,
    name:p.name,
    title:p.title,
    price:p.price,
    image:p.image,
    category:p.category || "-",
    desc:p.desc || "Ushbu mahsulot uy uchun qulay va zamonaviy yechim."
  }));

  window.location.href="./single.html";
}


function initSearch(){
  const globalSearch=document.getElementById("globalSearch");
  if(!globalSearch) return;

  function apply(q){
    const query = q.toLowerCase().trim();
    const items = document.querySelectorAll("#productList li, #newProductList li");
    let found = 0;
    
    items.forEach(li=>{
      const matches = li.innerText.toLowerCase().includes(query);
      li.style.display = matches ? "" : "none";
      if(matches) found++;
    });

    // Agar topilmasa va qidiruv bo'sh bo'lmasa, xabar chiqarish mumkin
    // Lekin home page da faqat enter bosishni kutamiz.
  }

  globalSearch.addEventListener("input", ()=> apply(globalSearch.value));
}

function initSlider(){
  const slider=document.getElementById("slider");
  if(slider && window.Splide){
    new Splide("#slider", {
      type:"loop",
      autoplay:true,
      interval:3000,
      pauseOnHover:true,
      arrows:true,
      pagination:true,
    }).mount();
  }
}

document.addEventListener("click",(e)=>{

  const likeBtn=e.target.closest(".likeBtn");
  if(likeBtn){
    const id=likeBtn.dataset.favId;
    const activeNow = toggleFavById(id);

    if(activeNow) likeBtn.classList.add("active");
    else likeBtn.classList.remove("active");
    renderHome();
    return;
  }

  const addBtn=e.target.closest(".addCartBtn");
  if(addBtn){
    addToCartFromDataset(addBtn.dataset);
    return;
  }

  const li=e.target.closest("#productList li, #newProductList li");
  if(li){
    if(e.target.closest(".likeBtn") || e.target.closest(".addCartBtn")) return;
    openSingle(li.dataset.id);
  }
});

document.addEventListener("DOMContentLoaded",()=>{
  initNavbarSearch();
  initSlider();
  renderHome();
  initSearch();
  updateCartCount();
  updateFavCount();
});
