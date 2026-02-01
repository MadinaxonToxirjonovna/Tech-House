const PRODUCTS_POPULAR = [
  { id:"p1",  name:"Blender",        title:"Bosch 1200W, 2 tezlik",              price:649000,  image:"./images/blender.png",   category:"Oshxona texnikasi", rating:4.6 },
  { id:"p2",  name:"Mikser",         title:"BOMA qo'l mikseri, 5 tezlik",        price:289000,  image:"./images/mixer.png",     category:"Oshxona texnikasi", rating:4.4 },
  { id:"p3",  name:"Elektr choynak", title:"Xiaomi Kettle 1.5L",                 price:259000,  image:"./images/kettle.png",    category:"Oshxona texnikasi", rating:4.5 },
  { id:"p4",  name:"Mikroto'lqinli pech", title:"Panasonic 20L, 800W",                price:1099000, image:"./images/micro.png",     category:"Oshxona texnikasi", rating:4.4 },
  { id:"p5",  name:"Air Fryer",      title:"6L, 10 dastur",                      price:899000,  image:"./images/airfryer.png",  category:"Oshxona texnikasi", rating:4.6 },
  { id:"p6",  name:"Kofe mashina",   title:"DeLonghi, Cappuccino",               price:2999000, image:"./images/coffee.png",    category:"Oshxona texnikasi", rating:4.7 },
  { id:"p7",  name:"Toster",         title:"2 bo'limli, 7 rejim",                price:299000,  image:"./images/toaster.png",   category:"Oshxona texnikasi", rating:4.3 },
  { id:"p8",  name:"Sharbat chiqargich", title:"800W, 2 tezlik",                 price:599000,  image:"./images/juicer.png",    category:"Oshxona texnikasi", rating:4.4 },
  { id:"p9",  name:"Changyutgich",   title:"Samsung 2000W, HEPA filter",         price:1299000, image:"./images/vacuum.png",    category:"Tozalash texnikasi", rating:4.6 },
  { id:"p10", name:"Robot changyutgich", title:"Smart mapping, 2500Pa",          price:2499000, image:"./images/robotvac.png",  category:"Tozalash texnikasi", rating:4.7 },
  { id:"p11", name:"Bug'li tozalagich",  title:"Steam Cleaner 1500W",            price:899000,  image:"./images/steam.png",     category:"Tozalash texnikasi", rating:4.5 },
  { id:"p12", name:"Kir yuvish mashina", title:"LG 7kg, Inverter",               price:4599000, image:"./images/washing.png",   category:"Tozalash texnikasi", rating:4.7 },
  { id:"p13", name:"Idish yuvish mashina", title:"12 to'plam, Eco rejim",        price:5399000, image:"./images/dishwasher.png",category:"Tozalash texnikasi", rating:4.6 },
  { id:"p14", name:"Quritish mashina", title:"8kg, Sensor Dry",                  price:5799000, image:"./images/dryer.png",     category:"Tozalash texnikasi", rating:4.5 },

  { id:"p15", name:"Konditsioner",   title:"Artel 12 BTU Inverter",              price:5899000, image:"./images/ac.png",        category:"Isitish va sovutish", rating:4.5 },
  { id:"p16", name:"Ventilyator",    title:"3 tezlik, Quiet mode",               price:299000,  image:"./images/fan.png",       category:"Isitish va sovutish", rating:4.3 },
  { id:"p17", name:"Isitgich",       title:"2000W, Termostatli",                 price:399000,  image:"./images/heater.png",    category:"Isitish va sovutish", rating:4.4 },
  { id:"p18", name:"Havo namlagich", title:"3L, Night mode",                     price:349000,  image:"./images/humidifier.png",category:"Isitish va sovutish", rating:4.5 },
  { id:"p19", name:"Havo tozalagich",title:"HEPA 13, 3 rejim",                   price:1199000, image:"./images/airpurifier.png",category:"Isitish va sovutish", rating:4.6 },


  { id:"p20", name:"Fen",            title:"2200W, Ion tech",                    price:299000,  image:"./images/hairdryer.png", category:"Shaxsiy parvarish", rating:4.4 },
  { id:"p21", name:"Trimmer",        title:"Soqol uchun, 4 nasadka",            price:199000,  image:"./images/trimmer.png",   category:"Shaxsiy parvarish", rating:4.5 },
  { id:"p22", name:"Elektr tish cho'tkasi", title:"2 rejim, 30 kun batareya",    price:249000,  image:"./images/toothbrush.png",category:"Shaxsiy parvarish", rating:4.6 },
  { id:"p24", name:"Massaj qurilma", title:"Neck & back, 3 rejim",               price:449000,  image:"./images/massager.png",  category:"Shaxsiy parvarish", rating:4.4 },

  { id:"p25", name:"Smart TV Box",   title:"Android TV Box 4/64GB",              price:399000,  image:"./images/tvbox.png",     category:"Aqlli uy jihozlari", rating:4.4 },
  { id:"p26", name:"Smart kamera",   title:"Wi-Fi, Night vision",                price:299000,  image:"./images/camera.png",    category:"Aqlli uy jihozlari", rating:4.5 },
  { id:"p27", name:"Smart rozetka",  title:"Wi-Fi, Timer, App control",          price:99000,   image:"./images/socket.png",    category:"Aqlli uy jihozlari", rating:4.3 },
  { id:"p28", name:"Smart lampochka",title:"RGB, 16 mln rang",                   price:129000,  image:"./images/bulb.png",      category:"Aqlli uy jihozlari", rating:4.4 },
  { id:"p29", name:"Smart kolonka",  title:"Voice assistant, Bluetooth",         price:499000,  image:"./images/smartspeaker.png",category:"Aqlli uy jihozlari", rating:4.5 },
];

const PRODUCTS_NEW = [
  { id:"n1", name:"Air Fryer",        title:"7L, 12 dastur, LED",                 price:1099000, image:"./images/airfryer2.png",  category:"Oshxona texnikasi", rating:4.7 },
  { id:"n2", name:"Robot changyutgich", title:"Lidar, 3000Pa",                    price:3199000, image:"./images/robotvac2.png",  category:"Tozalash texnikasi", rating:4.8 },
  { id:"n3", name:"Konditsioner",     title:"12 BTU, Inverter, A++",              price:6299000, image:"./images/ac2.png",        category:"Isitish va sovutish", rating:4.6 },
  { id:"n4", name:"Elektr tish cho'tkasi", title:"Smart timer, 2 boshcha",        price:299000,  image:"./images/toothbrush2.png",category:"Shaxsiy parvarish", rating:4.7 },
  { id:"n5", name:"Smart kamera",     title:"2K, Motion detect, Cloud",           price:349000,  image:"./images/camera2.png",    category:"Aqlli uy jihozlari", rating:4.6 },
];

function getCart(){ try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; } }
function saveCart(c){ localStorage.setItem("cart", JSON.stringify(c)); }

function getFavs(){ try { return JSON.parse(localStorage.getItem("favorites")) || []; } catch { return []; } }
function saveFavs(f){ localStorage.setItem("favorites", JSON.stringify(f)); }

function updateCartCount(){
  const el = document.getElementById("cartCount");
  if(!el) return;
  const total = getCart().reduce((s,i)=> s + (i.qty || 0), 0);
  el.textContent = `(${total})`;
}

function updateFavCount(){
  const el = document.getElementById("favCount");
  if(!el) return;
  el.textContent = `(${getFavs().length})`;
}

function isFav(id){ return getFavs().includes(id); }

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

function allProducts(){ return [...PRODUCTS_POPULAR, ...PRODUCTS_NEW]; }
function findProductById(id){ return allProducts().find(p=>p.id===id) || null; }

function productCardHTML(p){
  const liked = isFav(p.id) ? "active" : "";
  return `
    <li data-id="${p.id}">
      <picture><img src="${p.image}" alt="${p.name}"></picture>

      <div class="detail">
        <p class="icon">
          <button class="likeBtn ${liked}" type="button" data-fav-id="${p.id}">
            <img src="./images/sevimlilar.png" alt="like">
          </button>

          <button class="addCartBtn" type="button"
            data-id="${p.id}"
            data-name="${p.name}"
            data-title="${p.title}"
            data-price="${p.price}"
            data-image="${p.image}">
            <img class="savatcha" src="./images/add cart.png" alt="add cart">
          </button>
        </p>

        <strong>${p.name}</strong>
        <span>${p.title}</span>
        <h4>${Number(p.price).toLocaleString("uz-UZ")} so'm</h4>
      </div>
    </li>
  `;
}

function applyQueryFromURL(){
  const params = new URLSearchParams(location.search);
  const q = (params.get("q") || "").trim();
  if(!q) return;

  const globalSearch = document.getElementById("globalSearch");
  const searchInput  = document.getElementById("searchInput");

  if(globalSearch) globalSearch.value = q;
  if(searchInput){
    searchInput.value = q;
    searchInput.dispatchEvent(new Event("input", { bubbles:true }));
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyQueryFromURL();
});


function gridCard(p){
  const liked = isFav(p.id) ? "active" : "";
  const rating = p.rating ? p.rating : "4.5";
  return `
    <div class="pcard" data-id="${p.id}">
      <div class="pthumb">
        <img src="${p.image}" alt="${p.name}">

        <div class="pactions">
          <button class="iconBtn likeBtn ${liked}" type="button" data-fav-id="${p.id}">
            <img src="./images/sevimlilar.png" alt="like" style="width:20px;height:20px;">
          </button>

          <button class="iconBtn addCartBtn" type="button"
            data-id="${p.id}"
            data-name="${p.name}"
            data-title="${p.title}"
            data-price="${p.price}"
            data-image="${p.image}">
            <img src="./images/add cart.png" alt="cart" style="width:20px;height:20px;">
          </button>
        </div>
      </div>

      <div class="pbody">
        <h3 class="pname">${p.name}</h3>
        <div class="pdesc">${p.title || ""}</div>

        <div class="prow">
          <div class="price">${Number(p.price).toLocaleString("uz-UZ")} so'm</div>
          <div class="stars">⭐ <b>${rating}</b></div>
        </div>

        <button class="buyBtn" type="button" data-open="${p.id}">Ko‘rish</button>
      </div>
    </div>
  `;
}

function addToCartFromDataset(ds){
  const item = {
    id: (ds.id || "").trim(),
    key: `${(ds.name || "").trim()}|${(ds.title || "").trim()}`,
    name: (ds.name || "").trim(),
    title: (ds.title || "").trim(),
    price: Number(ds.price || 0),
    image: ds.image || "",
    qty: 1,
  };
  if(!item.name || !item.price) return;

  const cart = getCart();
  const exist = cart.find(p => p.key === item.key);
  if(exist) exist.qty = (exist.qty || 0) + 1;
  else cart.push(item);

  saveCart(cart);
  updateCartCount();
  showToast("🛒 Savatchaga qo‘shildi");
}

function openSingle(id){
  const p = findProductById(id);
  if(!p) return;

  localStorage.setItem("selectedProduct", JSON.stringify({
    id: p.id,
    name: p.name,
    title: p.title,
    price: p.price,
    image: p.image,
    category: p.category || "-",
    desc: p.desc || "Ushbu mahsulot uy uchun qulay va zamonaviy yechim."
  }));

  window.location.href = "./single.html";
}

function uniqueCategories(list){
  const set = new Set(list.map(p => (p.category || "").trim()).filter(Boolean));
  return ["Hammasi", ...Array.from(set)];
}

function renderCategories(){
  const catList = document.getElementById("catList");
  if(!catList) return;

  const cats = uniqueCategories(allProducts());
  catList.innerHTML = cats.map(c => `
    <li>
      <button class="catBtn" type="button" data-cat="${c}">${c}</button>
    </li>
  `).join("");

  const first = catList.querySelector(".catBtn");
  if(first) first.classList.add("is-active");
}

(function initProductsPage(){
  const grid = document.getElementById("productsGrid");
  if(!grid) return; 

  const newBox = document.getElementById("newProductList");
  if(newBox) newBox.innerHTML = PRODUCTS_NEW.map(productCardHTML).join("");

  const resultCount = document.getElementById("resultCount");
  const sortSelect  = document.getElementById("sortSelect");

  const searchInput  = document.getElementById("searchInput");
  const globalSearch = document.getElementById("globalSearch");
  const minPrice     = document.getElementById("minPrice");
  const maxPrice     = document.getElementById("maxPrice");
  const minRating    = document.getElementById("minRating");

  const applyBtn = document.getElementById("applyBtn");
  const resetBtn = document.getElementById("resetBtn");
  const prevBtn  = document.getElementById("prevBtn");
  const nextBtn  = document.getElementById("nextBtn");

  let selectedCategory = "Hammasi";
  let page = 1;
  const pageSize = 9;

  function getFilters(){
    const q = ((searchInput?.value || "") + " " + (globalSearch?.value || ""))
      .toLowerCase().trim();

    return {
      q,
      minP: Number(minPrice?.value || 0),
      maxP: Number(maxPrice?.value || 0),
      minR: Number(minRating?.value || 0),
      sort: sortSelect?.value || "popular"
    };
  }

  function render(){
    const {q, minP, maxP, minR, sort} = getFilters();
    let list = allProducts();

    if(selectedCategory !== "Hammasi"){
      list = list.filter(p => (p.category || "") === selectedCategory);
    }

    if(q){
      list = list.filter(p =>
        (p.name || "").toLowerCase().includes(q) ||
        (p.title || "").toLowerCase().includes(q) ||
        (p.category || "").toLowerCase().includes(q)
      );
    }

    if(minP) list = list.filter(p => Number(p.price || 0) >= minP);
    if(maxP) list = list.filter(p => Number(p.price || 0) <= maxP);

    if(minR) list = list.filter(p => Number(p.rating || 4.5) >= minR);

    if(sort === "cheap")     list.sort((a,b)=> Number(a.price) - Number(b.price));
    if(sort === "expensive") list.sort((a,b)=> Number(b.price) - Number(a.price));
    if(sort === "new")       list = [...PRODUCTS_NEW, ...PRODUCTS_POPULAR];

    const total = list.length;
    if(resultCount) resultCount.textContent = String(total);

    const pages = Math.max(1, Math.ceil(total / pageSize));
    if(page > pages) page = pages;
    if(page < 1) page = 1;

    const start = (page - 1) * pageSize;
    const part  = list.slice(start, start + pageSize);

    grid.innerHTML = part.map(gridCard).join("");

    if(prevBtn) prevBtn.disabled = page <= 1;
    if(nextBtn) nextBtn.disabled = page >= pages;
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".catBtn");
    if(!btn) return;

    selectedCategory = btn.dataset.cat || "Hammasi";

    document.querySelectorAll(".catBtn").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    page = 1;
    render();
  });

  grid.addEventListener("click",(e)=>{
    if(e.target.closest(".likeBtn") || e.target.closest(".addCartBtn")) return;

    const openBtn = e.target.closest("[data-open]");
    const card    = e.target.closest(".pcard");
    const id = openBtn ? openBtn.dataset.open : card?.dataset.id;
    if(id) openSingle(id);
  });

  document.addEventListener("click",(e)=>{
    const li = e.target.closest("#newProductList li");
    if(li){
      if(e.target.closest(".likeBtn") || e.target.closest(".addCartBtn")) return;
      openSingle(li.dataset.id);
    }
  });

  applyBtn?.addEventListener("click", ()=>{ page = 1; render(); });
  resetBtn?.addEventListener("click", ()=>{
    if(searchInput) searchInput.value = "";
    if(globalSearch) globalSearch.value = "";
    if(minPrice) minPrice.value = "";
    if(maxPrice) maxPrice.value = "";
    if(minRating) minRating.value = "0";
    page = 1;
    render();
  });

  sortSelect?.addEventListener("change", ()=>{ page = 1; render(); });

  [searchInput, globalSearch].filter(Boolean).forEach(inp=>{
    inp.addEventListener("input", ()=>{ page = 1; render(); });
  });

  prevBtn?.addEventListener("click", ()=>{ page--; render(); });
  nextBtn?.addEventListener("click", ()=>{ page++; render(); });

  document.addEventListener("click",(e)=>{
    const likeBtn = e.target.closest(".likeBtn");
    if(likeBtn){
      const id = likeBtn.dataset.favId;
      let favs = getFavs();

      if(favs.includes(id)){
        favs = favs.filter(x => x !== id);
        likeBtn.classList.remove("active");
        showToast("💔 Sevimlilardan olib tashlandi");
      }else{
        favs.push(id);
        likeBtn.classList.add("active");
        showToast("❤️ Sevimlilarga qo‘shildi");
      }

      saveFavs(favs);
      updateFavCount();

      render();
      return;
    }

    const addBtn = e.target.closest(".addCartBtn");
    if(addBtn){
      addToCartFromDataset(addBtn.dataset);
      return;
    }
  });

  document.addEventListener("DOMContentLoaded", ()=>{
    renderCategories();
    updateCartCount();
    updateFavCount();
    render();
  });

  renderCategories();
  updateCartCount();
  updateFavCount();
  render();
})();
