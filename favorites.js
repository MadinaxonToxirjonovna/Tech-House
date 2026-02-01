const PRODUCTS_POPULAR = [
  { id: "p1", name: "Kompyuter",  title: "Lenovo Intel i3-1315U Win11S", price: 6076000,  image: "./images/laptop.jpg", category:"Kompyuterlar" },
  { id: "p2", name: "Soat",       title: "Samsung Galaxy Watch 7",      price: 2019000,  image: "./images/soat1.jpg",   category:"Aqlli soatlar" },
  { id: "p3", name: "Holodilnik", title: "LG GC-B459MLWM",              price: 10286000, image: "./images/muzlatgich.jpg", category:"Maishiy texnika" },
  { id: "p4", name: "Soat",       title: "Luxury Wristwatch Women Blue",price: 1200000,  image: "./images/soat1.jpg",   category:"Aksessuar" },
];
const PRODUCTS_NEW = [
  { id: "n1", name: "Kompyuter", title: "Lenovo Intel i3-1315U Win11S", price: 6076000, image: "./images/laptop.jpg", category:"Kompyuterlar" },
  { id: "n2", name: "Soat",      title: "Samsung Galaxy Watch 7",      price: 2019000, image: "./images/soat1.jpg",   category:"Aqlli soatlar" },
];

function getCart(){ try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; } }
function getFavs(){ try { return JSON.parse(localStorage.getItem("favorites")) || []; } catch { return []; } }
function saveFavs(f){ localStorage.setItem("favorites", JSON.stringify(f)); }
function updateCartCount(){ const el=document.getElementById("cartCount"); if(el) el.textContent=`(${getCart().reduce((s,i)=>s+(i.qty||0),0)})`; }
function updateFavCount(){ const el=document.getElementById("favCount"); if(el) el.textContent=`(${getFavs().length})`; }
function isFav(id){ return getFavs().includes(id); }
function allProducts(){ return [...PRODUCTS_POPULAR, ...PRODUCTS_NEW]; }
function findProductById(id){ return allProducts().find(p=>p.id===id) || null; }

function productCardHTML(p){
  const liked=isFav(p.id) ? "active" : "";
  return `
    <li data-id="${p.id}">
      <picture><img src="${p.image}" alt="${p.name}"></picture>
      <div class="detail">
        <p class="icon">
          <button class="likeBtn ${liked}" type="button" data-fav-id="${p.id}">
            <img src="./images/sevimlilar.png" alt="like">
          </button>
          <button class="addCartBtn" type="button"
            data-id="${p.id}" data-name="${p.name}" data-title="${p.title}"
            data-price="${p.price}" data-image="${p.image}">
            <img class="savatcha" src="./images/add cart.png" alt="add cart">
          </button>
        </p><br>
        <strong>${p.name}</strong><br>
        <span>${p.title}</span><br>
        <h4>${Number(p.price).toLocaleString("uz-UZ")} so'm</h4>
      </div>
    </li>
  `;
}

function openSingle(id){
  const p=findProductById(id);
  if(!p) return;
  localStorage.setItem("selectedProduct", JSON.stringify({
    id:p.id, name:p.name, title:p.title, price:p.price, image:p.image,
    category:p.category||"-", desc:p.desc||"Ushbu mahsulot uy uchun qulay va zamonaviy yechim."
  }));
  window.location.href="./single.html";
}

function renderFavorites(){
  const box=document.getElementById("favList");
  if(!box) return;

  const favs=getFavs();
  updateFavCount();
  updateCartCount();

  if(favs.length===0){
    box.innerHTML=`<div class="emptyFav">❤️ Sevimlilar hozircha bo‘sh</div>`;
    return;
  }
  const list=favs.map(id=>findProductById(id)).filter(Boolean);
  box.innerHTML=list.map(productCardHTML).join("");
}

document.addEventListener("click",(e)=>{
  const likeBtn=e.target.closest(".likeBtn");
  if(likeBtn){
    const id=likeBtn.dataset.favId;
    let favs=getFavs();
    if(favs.includes(id)){
      favs=favs.filter(x=>x!==id);
      likeBtn.classList.remove("active");
    }else{
      favs.push(id);
      likeBtn.classList.add("active");
    }
    saveFavs(favs);
    renderFavorites();
    return;
  }

  const li=e.target.closest("#favList li");
  if(li){
    if(e.target.closest(".likeBtn") || e.target.closest(".addCartBtn")) return;
    openSingle(li.dataset.id);
  }
});

document.addEventListener("DOMContentLoaded", renderFavorites);
