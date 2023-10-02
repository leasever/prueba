(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const w=[{_id:1,name:"Rascador para gatos",image:["img/products/scraper.jpg","img/products/scraperModal1.jpg","img/products/scraperModal2.jpg","img/products/scraperModal3.jpg"],description:"Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas.",price:89,rating:4},{_id:2,name:"Auriculares tipo vincha",image:["img/products/headphone.jpg","img/products/headphoneModal1.jpg","img/products/headphoneModal2.jpg","img/products/headphoneModal3.jpg"],description:"Los Auriculares tiene bajos más potentes, mejora la experiencia de audio, proporciona una alta calidad de sonido.",price:150,rating:3.5},{_id:3,name:"Mochila para mascotas",image:["img/products/mochila.jpg","img/products/mochilaModal1.jpg","img/products/mochilaModal2.jpg","img/products/mochilaModal3.jpg"],description:"Ideal para visitas al veterinario, paseos, viajes, o para llevarla donde quieras!, Incluye varios orificios amplios para ventilación, además de contar con un acrílico que protege a tu mascota.",price:99,rating:4.5}];function xe(){w.forEach(t=>{Se(t)})}function Se({_id:e,name:t,image:a,description:n}){return document.getElementById("productModal").innerHTML+=`
  <div class="modal fade" id="staticBackdrop${e}" key="${e}" >
    <div class="modal-dialog modal-md ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title px-0" id="exampleModalLabel">${t}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div id="carouselExampleIndicators${e}" class="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators${e}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators${e}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators${e}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner text-center">
                    ${a.map((o,s)=>s>0&&s<=3?`<div class="carousel-item  ${s===1?"active":""}">
                          <img src="${o}" class="d-block w-100 img-thumbnail" alt="${t}" loading="lazy" />
                        </div>`:null)}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${e}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${e}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="col-12  text-center pt-2">
                <p>${n}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`}function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function g(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}function re(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function $(e){const t=sessionStorage.getItem(e);return t?JSON.parse(t):null}function Y(e){sessionStorage.removeItem(e)}const k=16,Z=k,we=function(e){return btoa(String.fromCharCode(...new Uint8Array(e)))},Ee=function(e){return Uint8Array.from(atob(e),t=>t.charCodeAt(0))},ie=async function(e){const t=new TextEncoder;let a="AES-CBC",n=await window.crypto.subtle.importKey("raw",t.encode(e.password),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t.encode(e.sal.toString()),iterations:e.iterations,hash:e.hash},n,{name:a,length:e.longitude},!1,["encrypt","decrypt"])};async function _(e,t){const a=new TextEncoder,n=window.crypto.getRandomValues(new Uint8Array(16)),o=window.crypto.getRandomValues(new Uint8Array(16)),s=a.encode(t),r=ie({password:e,sal:n,iterations:1e5,longitude:256,hash:"SHA-256"}),i=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:o},await r,s);return we([...n,...o,...new Uint8Array(i)])}async function de(e,t){const a=new TextDecoder,n=Ee(t),o=n.slice(0,k),s=n.slice(0+k,k+Z),r=ie({password:e,sal:o,iterations:1e5,longitude:256,hash:"SHA-256"}),i=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:s},await r,n.slice(k+Z));return a.decode(i)}let P;const Le=new Uint8Array(16);function Te(){if(!P&&(P=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!P))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return P(Le)}const b=[];for(let e=0;e<256;++e)b.push((e+256).toString(16).slice(1));function ke(e,t=0){return b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]}const qe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),X={randomUUID:qe};function le(e,t,a){if(X.randomUUID&&!t&&!e)return X.randomUUID();e=e||{};const n=e.random||(e.rng||Te)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=n[o];return t}return ke(n)}const Ce=new Intl.NumberFormat(void 0,{currency:"USD",style:"currency"});function x(e){return Ce.format(e)}function Ne(e){return new Date(e).toLocaleDateString("es-ES",{weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}function Ie(){document.querySelector("#loaderSection").setAttribute("style","visibility:hidden; opacity:0;")}function Me(){return document.getElementById("canvaCard").innerHTML+=`<div
      class="offcanvas offcanvas-end overflow-auto pb-4"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <nav>
        <div class="nav nav-tabs fs-5" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            <p>Carrito</p>
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            <p>Mi cuenta</p>
          </button>
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div class="offcanvas-body" id="cartContainer"></div>
          <div class="d-flex flex-column col-9 mx-auto gap-2">
            <span class="fs-5 m-auto" id="precioTotal">DSS</span>
            <button
              class="btn btn-outline-dark btn-custom fs-5 disabled"
              id="btnPay"
            >
              Médios de pago
            </button>
            <p class="fs-2 text-center">
              <i class="fa-brands fa-cc-paypal"></i>
              <i class="fa-brands fa-cc-visa"></i>
              <i class="fa-brands fa-cc-mastercard"></i>
              <i class="fa-brands fa-cc-amex"></i>
              <i class="fa-brands fa-cc-diners-club"></i>
              <i class="fa-brands fa-cc-discover"></i>
            </p>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div class="offcanvas-body" id="profileContainer">
            <div class="accordion" id="accordionItems">
              <a
                class="text-center"
                href="#loginModal"
                id="loginRegisterModal"
                data-bs-toggle="modal"
              >
                <p>Ingresar o registrarse</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`}Me();const Ae=w;function Be(e){const t=document.querySelector("#divAccordion");e.purchase.reverse().map((a,n)=>{const o=document.createElement("h2");o.className="accordion-header",o.id="accordion"+n;const s=document.createElement("button");s.className="accordion-button",s.type="button",s.setAttribute("data-bs-toggle","collapse"),s.setAttribute("data-bs-target","#colpase"+n),s.setAttribute("aria-expanded","true"),s.setAttribute("aria-controls","colpase"+n),s.innerText=Ne(a.date);const c=document.createElement("div");c.id="colpase"+n,c.className="accordion-collapse collapse show",c.setAttribute("aria-labelledby","accordion"+n);const r=document.createElement("div");r.className="accordion-body px-1";const i=document.createElement("span");i.className="fw-600",i.innerText="ID: "+a._id;const d=document.createElement("table");d.className="table table-sm table-bordered mt-2",d.innerHTML+=`
    <thead>
       <tr>        
        <th scope="col">Producto</th>
        <th scope="col">P.U</th>
        <th scope="col">Subtotal</th>        
      </tr>
    </thead>       
    `;let m=0;for(let p=0;p<a.items.length;p++){const v=Ae.find(u=>u._id===a.items[p]._id);m+=a.items[p].quantity*v.price,d.innerHTML+=`          
        <tbody>
          <tr >            
            <td scope="row">
              <a href="#staticBackdrop${v._id}" data-bs-toggle="modal">
               ${v.name+" - x"+a.items[p].quantity}
              </a>
            </td>
            <td class="text-end">${v.price}</td>
            <td class="text-end">${a.items[p].quantity*v.price}</td>
          </tr>    
        </tbody>`}d.innerHTML+=`
      <tfoot>
        <tr class="text-end"> 
          <td></td>           
          <td class="fw-bolder">Total: </td>
          <td>${x(m)}</td>
        </tr>   
      </tfoot>`,o.append(s),r.append(i,d),c.append(r),t.append(o),t.append(c)})}const ee=document.querySelector("#accordionItems"),Pe=g("users");function V(e){ee.innerHTML="";const t=document.createElement("div");t.id="divAccordion";const a=document.createElement("div");a.className="card mb-2";const n=document.createElement("div");n.className="card-header d-flex flex-row justify-content-between";const o=document.createElement("p");o.innerText="Hola, "+e.username;const s=document.createElement("a");s.href="#",s.innerText="Cerrar sesión",s.addEventListener("click",v=>{v.preventDefault(),Y("user"),location.reload()});const c=document.createElement("ul");c.className="list-group list-group-flush";const r=document.createElement("li");r.className="list-group-item",r.innerText=e.email;const i=document.createElement("li");i.className="list-group-item d-flex flex-row justify-content-between";const d=document.createElement("p");d.innerText="Compras realizadas: "+e.purchase.length;const m=document.createElement("button");m.type="button",m.className="btn btn-danger icon-cart",m.title="Eliminar cuenta";const p=document.createElement("i");p.className="fas fa-trash-alt",m.append(p),m.addEventListener("click",()=>{if(confirm("¿Quieres borrar este perfil y sus datos?")){let v=Pe.filter(u=>u.email!==e.email);I("users",v),Y("user"),location.reload()}return null}),i.append(d,m),n.append(o,s),a.append(n),a.append(c),c.append(r,i),t.append(a),ee.append(t),e.purchase.length>0&&Be(e)}const Re=document.querySelector("#nav-profile-tab");async function $e(){const e=g("carrito"),t=$("user"),a=g("users");t.purchase.push({_id:le(),date:new Date,items:e}),re("user",t),Re.click();const n=await de(t.email,t._id),o=await _(n,JSON.stringify({email:t.email,username:t.username,_id:t._id,purchase:t.purchase})),s=a.map(c=>c.email===t.email?{...c,user:o}:c);De(s),alert("Gracias por su compra "+t.username),V(t)}function De(e){const t=document.querySelectorAll(".custom-cart-button");I("users",e),I("carrito",[]),D(),t.forEach(a=>{const n=a.id.replace("addToCartButton","");a.innerHTML=`Añadir <i id="icon${n}" class="fa-solid fa-shopping-cart"></i>`,a.removeAttribute("disabled")})}function ue(e){const t=[];for(let a=1;a<=5;a++)e>=a?t.push("fas fa-star"):e>=a-.5?t.push("fas fa-star-half-alt"):t.push("far fa-star");return t.map(a=>`<i class="${a}"></i>`).join("")}const He=w;function me(e){const t=e.toLowerCase().split(" ");return He.filter(a=>{const n=a.name.toLowerCase();return t.some(o=>n.includes(o))})}function te(){const e=document.querySelector("#cardSearch"),t=document.querySelector("#buscar"),a=document.querySelector("#searchResultsShadow");return()=>{e.remove(),t.removeAttribute("disabled"),t.value="",a.className="d-none"}}function je(){const e=document.getElementById("searchResultsShadow"),t=document.createElement("div");t.className="overflow-auto",t.id="cardSearch";const a=document.createElement("div");a.className="card-header d-flex flex-row";const n=document.createElement("div");n.className="card-body",document.addEventListener("input",c),e.className="d-none";const o=document.getElementById("buscar");function s(){const i=document.querySelector(".navbar").offsetHeight;t.style.maxHeight=`calc(100vh - ${i}px)`}s();function c(r){const i=document.getElementById("searchSection").offsetHeight,d=document.getElementById("search-results-container");if(r.target===o){const m=o.value.trim(),p=me(m);if(m==="")t.remove(),e.className="d-none";else{a.innerHTML="",n.innerHTML="",e.className="d-none",p.length===0?(a.innerHTML=`
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5 class="me-5">No se encontraron resultados</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`,te()):(e.className="search-result-shadow",a.innerHTML=`
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5>Resultado: ${p.length}</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`,p.forEach(u=>{const f=document.createElement("div");f.classList.add("result-item");const h=()=>{z(u._id),F("#addToCartButtonSearch",u._id)};f.innerHTML=`
              <div class="d-flex justify-content-between align-items-center">
                <div class="card col-2  d-flex p-1 d-none d-sm-flex">
                  <img
                    src="${u.image[0]}"
                    class="card-img-top"
                    alt="${u.name}"
                    loading="lazy"
                  />
                </div>
                <div class="col-12 col-sm-10 ps-2">
                  <h5 class="card-title">${u.name}</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="me-sm-3 mb-2 mb-sm-0">
                      <p>Precio: ${x(u.price)}</p>
                      <div>${ue(u.rating)}</div>
                    </div>
                    <div class="col text-end">
                      <a
                        href="#staticBackdrop${u._id}"
                        data-bs-toggle="modal"
                        class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2"
                      >
                        Detalles
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <button
                        class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2"
                        id="addToCartButtonSearch${u._id}"
                      >
                        Añadir
                        <i id="iconSearch${u._id}" class="fa-solid fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `,n.appendChild(f),t.innerHTML="",t.appendChild(a),t.appendChild(n),d.innerHTML="",d.appendChild(t);const y=document.querySelector(`#addToCartButtonSearch${u._id}`);y==null||y.addEventListener("click",h),F("#addToCartButtonSearch",u._id)}));const v=document.querySelector("#clearSearch");v==null||v.addEventListener("click",te())}}d.style.marginTop=10+i+"px",s()}}function Ue(){return document.getElementById("headerContent").innerHTML+=`
<div class="shadow-sm header-stiky" id="myHeader">
  <div class="container-xxl px-4">
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="main-logo">
        <img src="img/logo.png" alt="Logo dss" loading="eager" />
      </div>

      <button
        class="navbar-toggler justify-content-end"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link nav-menu" aria-current="page" href="#homePage"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link nav-menu" href="#aboutPage">Acerca de</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-menu" href="#productPage">Productos</a>
          </li>
        </ul>

        <div class="d-flex col-md-5" id="searchSection">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Buscar producto..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              id="buscar"
              maxlength="50"
            />
          </div>

          <button
            type="button"
            class="btn record btn-outline-secondary btn-custom"
            id="voice-search-button"
          >
            <div class="icon">
              <i class="fa-solid fa-microphone"></i>
              <img src="img/bars.svg" alt="Img bar" />
            </div>
            <p>Escuchar</p>
          </button>

          <button
            type="button"
            class="btn btn-primary d-none"
            data-bs-toggle="modal"
            data-bs-target="#resultsModal"
            id="modalButton"
          >
            Mostrar Modal
          </button>
          <div
            id="search-results-container"
            class="search-result-section card"
          ></div>
        </div>

        <div
          class="login-bag d-flex gap-3 align-items-center justify-content-end ps-md-4 py-md-0"
        >
          <a
            class="position-relative"
            id="activateProfile"
            href="#"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <p>Mi cuenta</p>
          </a>
          <a
            class="position-relative"
            id="activateCart"
            href="#"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <p class="fs-4"><i class="fa-solid fa-shopping-cart"></i></p>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              id="contadorCarrito"
              >0</span
            >
          </a>
        </div>
      </div>
    </nav>
  </div>

  <div id="searchResultsShadow" class="search-result-shadow"></div>
</div>

`,je()}Ue();const R=document.querySelector("#cartContainer"),ae=document.querySelector("#precioTotal"),q=document.querySelector("#btnPay"),ne=document.querySelector("#contadorCarrito"),Oe=document.querySelector("#loginRegisterModal"),_e=w;function Fe(e){let t=0,a=0;e.length===0&&(R.innerHTML="",ae.innerText="DSS",q.innerText="Médios de pago",q.classList.add("disabled"),ne.innerText="0"),e.map(n=>{const o=_e.find(ye=>ye._id===n._id);a+=n.quantity,ne.innerText=a.toString();const s=document.createElement("div");s.className="d-flex align-items-center gap-2 mb-2";const c=document.createElement("a");c.href="#staticBackdrop"+o._id,c.setAttribute("data-bs-toggle","modal");const r=document.createElement("img");r.src=o.image[0],r.className="img-cart img-thumbnail";const i=document.createElement("div");i.className="d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";const d=document.createElement("div");d.className="me-auto";const m=document.createElement("div");m.innerText=o.name+" ",m.className="justify-content-start ";const p=document.createElement("span");p.className="text-muted quantity-cart",p.innerText="x "+n.quantity.toString();const v=document.createElement("div");v.className="text-muted price-cart",v.innerText=x(o.price).toString();const u=document.createElement("div");u.innerText=x(o.price*n.quantity).toString(),t+=o.price*n.quantity;const f=document.createElement("div");f.className="d-flex flex-wrap gap-1 col-12";const h=document.createElement("button");h.type="button",h.className="btn btn-outline-primary icon-cart",h.addEventListener("click",()=>{ze(n._id)});const y=document.createElement("i");y.className="fas fa-minus";const E=document.createElement("button");E.type="button",E.className="btn btn-danger icon-cart",E.addEventListener("click",()=>{confirm("Desea eliminar el producto: "+(o==null?void 0:o.name))&&(Je(n._id),F("#addToCartButtonSearch",n._id))});const Q=document.createElement("i");Q.className="fas fa-trash-alt";const L=document.createElement("button");L.type="button",L.className="btn btn-outline-primary icon-cart",L.addEventListener("click",()=>{z(n._id)});const W=document.createElement("i");return W.className="fas fa-plus",h.append(y),E.append(Q),L.append(W),n.quantity>1&&(m.append(p),f.append(h)),d.append(m),d.append(v),f.append(E),f.append(L),i.append(d),i.append(u),i.append(f),c.append(r),s.append(c),s.append(i),ae.innerText="Total "+x(t).toString(),q.innerText="Pagar",q.classList.remove("disabled"),R==null?void 0:R.append(s)})}q.addEventListener("click",()=>{$("user")?$e():(alert("Registrese o inicie sesión para completar la venta"),Oe.click())});let l=[];const Ve=document.querySelector("#cartContainer");function D(){l=g("carrito"),B(l),l.forEach(e=>{e!=null&&e._id?M(e._id,!0):M(e._id,!1)})}function z(e){(l==null?void 0:l.find(t=>t._id===e))==null?l=[...l,{_id:e,quantity:1}]:l.map(t=>t._id===e?(t.quantity+=1,{...t,quantity:t.quantity}):t),B(l),M(e,!0)}function ze(e){var t;((t=l.find(a=>a._id===e))==null?void 0:t.quantity)===1?(l=l.filter(a=>a._id!==e),M(e,!1)):l.map(a=>a._id===e?(a.quantity-=1,{...a,quantity:a.quantity}):a),B(l)}function Je(e){l=l.filter(t=>t._id!==e),B(l),M(e,!1)}function M(e,t){const a=document.querySelector("#addToCartButton"+e);t?(a.setAttribute("disabled",""),a.innerText="Añadido ✅"):(a.removeAttribute("disabled"),a.innerText="Añadir 🛒")}function B(e){Ve.innerHTML="",Fe(e),I("carrito",e)}function F(e,t){B(l),l=g("carrito");const a=document.querySelector(`${e+t}`);a!=null&&l!=null&&(a.removeAttribute("disabled"),a.innerText="Añadir 🛒",l.map(n=>{(n==null?void 0:n._id)===t&&(a.setAttribute("disabled",""),a.innerText="Añadido ✅")}))}function Ke(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
  <div id="about">
        <section class="about-us py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 col-12 text-center">
                  <img
                  src="img/about/boutique1.png"
                  alt="Imagen de Nosotros"
                  class="img-fluid rounded-circle mb-4 w-75 ratio ratio-1x1"
                  loading="eager"
                  />
              </div>
              <div class="col-md-6 col-12">
                <h2 class="display-4">Sobre Nosotros</h2>
                <p class="lead">
                  Somos una boutique de productos novedosos que se dedica a
                  ofrecer artículos únicos y originales para personas que buscan
                  experiencias únicas. Nuestra pasión es descubrir y traer a
                  nuestros clientes productos innovadores de todo el mundo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="about-us">
          <div class="container">
            <div class="row align-items-center flex-md-row-reverse">
              <div class="col-md-6 col-12 text-center">
                <img
                  src="img/about/boutique2.png"
                  alt="Imagen de Nosotros"
                  class="img-fluid rounded-circle mb-4 w-75 ratio ratio-1x1"
                  loading="lazy"
                />
              </div>
              <div class="col-md-6 col-12">
                <h2 class="display-4">Nuestra Misión</h2>
                <p class="lead">
                  En nuestra boutique, encontrarás una amplia selección de
                  productos que van desde gadgets tecnológicos y accesorios de
                  moda hasta artículos para el hogar y regalos personalizados.
                  Nos esforzamos por encontrar productos que marquen la
                  diferencia en tu vida diaria y te hagan sonreír.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="about-us py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 col-12 text-center">
                <img
                  src="img/about/boutique3.png"
                  alt="Imagen de Nosotros"
                  class="img-fluid rounded-circle mb-4 w-75 ratio ratio-1x1"
                  loading="lazy"
                />
              </div>
              <div class="col-md-6 col-12">
                <h2 class="display-4">Nuestro Equipo</h2>
                <p class="lead">
                  Nuestro equipo está compuesto por entusiastas de la innovación
                  y amantes de la creatividad. Trabajamos arduamente para
                  mantenernos al tanto de las últimas tendencias y descubrir
                  productos emocionantes que puedan sorprenderte.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>`}function Ge(e){const{id:t,image:a,title:n,description:o}=e,s=document.getElementById(t);if(!s){console.error(`Element with id '${t}' not found.`);return}const c=`
    <div class="parallax-section">
        <div class="parallax-image" style="background-image: url('img/banner/${a}');" ></div>
        <div class="parallax-content card" id="parallaxDetails">
            <h1>${n}</h1>
            <p>${o}</p>
            <button              
              class="btn btn-outline-dark btn-custom text-break custom-cart-button mt-4 col-10"
              id="verProductosButton" 
            >
              Ver productos
              <i class="fa-solid fa-eye"></i>
            </button>
        </div>
    </div>
  `;s.innerHTML=c;function r(){const d=document.querySelector(".nav-menu[href='#productPage']");d instanceof HTMLElement&&d.click()}const i=document.querySelector("#verProductosButton");i&&i.addEventListener("click",r)}function pe({_id:e,name:t,image:a,price:n,rating:o}){const s=document.querySelector("#activateCart"),c=()=>{z(e),s.click()},r=`<div class="d-flex align-items-stretch">
  <div class="card">
    <img
      src="${a[0]}"
      class="card-img-top"
      alt="${t}"
      loading="lazy"
    />
    <div class="card-body row">
      <div>
        <span class="card-title d-flex justify-content-between bgn fs-3 mb-2">
          ${t}
          <span class="fs-6">${x(n)}</span>
        </span>
        <div>${ue(o)}</div>
      </div>

      <div class="d-grid mx-auto my-3 align-items-end">
        <div class="row align-content-center justify-content-around">
          <a
            href="#staticBackdrop${e}"
            data-bs-toggle="modal"
            class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2 col-5"
          >
            Detalles
            <i class="fa-solid fa-eye"></i>
          </a>
          <button
            class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2 col-5"
            id="addToCartButton${e}"
          >
            Añadir
            <i
              id="icon${e}"
              class="iconAddToCar fa-solid fa-shopping-cart"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`,i=document.createElement("div");i.innerHTML=r;const d=i.querySelector(`#addToCartButton${e}`);return d==null||d.addEventListener("click",c),i.firstElementChild}const Qe={id:"parallaxSection",image:"parallax_home.jpg",title:"Outlet DSStore",description:"Los mejores productos con grandes descuentos."};function oe(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`<!-- Carousel -->
    <section class="welcome-message">
      <div class="container-xxl my-2 carousel-dss text-center">
        <div class="title-container d-none d-md-block" style="height: 75px;">
         <div class=" py-10">
          <h1>Bienvenido a nuestra tienda en línea</h1>
          <p>Explora nuestra amplia gama de productos.</p>
         </div>          
        </div>
      
        <div id="carouselExampleDark" class="carousel carousel-fade carousel-dark slide " data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src="img/banner/banner1.jpg" class="d-block w-100 img-thumbnail" alt="Mascotas">
              <div class="carousel-caption d-none d-md-block">
                <h4 class=" text-white opacity-75">MASCOTAS</h4>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="img/banner/banner2.jpg" class="d-block w-100 img-thumbnail" alt="Electrónicos">
              <div class="carousel-caption d-none d-md-block">
                <h4 class="text-white opacity-75">ELECTRO</h4>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/banner/banner3.jpg" class="d-block w-100 img-thumbnail" alt="Hogar">
              <div class="carousel-caption d-none d-md-block">
                <h4 class="text-white opacity-75">HOGAR</h4>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </section>
    <!-- Galery products -->
    <section>
      <div class="products" name="product-section" id="product-section">
        <div class="container-xxl p-3 my-3">
          <div class="d-flex product-title pb-4">
            <h2 class=" text-center m-auto text-break">NOVEDADES</h2>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 col-xl-10 m-auto justify-content-center" id="productSection">
            <!-- Aquí se mostrarán los productos -->
          </div>
        </div>
      </div>
    </section>
      <section id="parallaxSection" class="container-xxl"></section>
    `,We(),Ge(Qe)}function We(){const e=w,t=document.getElementById("productSection");e.forEach(a=>{const n=pe(a);t==null||t.appendChild(n)})}function Ye(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
    <section>
      <div class="products" name="product-section" id="product-section">
        <div class="container-xxl p-3 my-3">
          <div class="d-flex product-title pb-4">
            <h1 class=" text-center m-auto text-break">Nuestros productos</h1>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 col-xl-10 m-auto justify-content-center" id="productSection">
            <!-- Aquí se mostrarán los productos -->
          </div>
        </div>
      </div>
    </section>`,Ze()}function Ze(){const e=w,t=document.getElementById("productSection");e.forEach(a=>{const n=pe(a);t==null||t.appendChild(n)})}function Xe(){const e=document.getElementById("main-content"),t=document.querySelectorAll(".nav-menu");function a(){oe(),g("carrito")&&D()}function n(){Ke()}function o(){Ye(),g("carrito")&&D()}function s(r){e.innerHTML="",r()}function c(r){r.preventDefault();const i=r.currentTarget.getAttribute("href").substring(1);switch(t.forEach(d=>{d.classList.remove("selected")}),i){case"homePage":s(a);break;case"aboutPage":s(n);break;case"productPage":s(o);break}r.currentTarget.classList.add("selected")}t.forEach(r=>{r.addEventListener("click",c)}),t[0].classList.add("selected"),s(oe)}function et(e){const t=[];for(const a of e){const n=new Image;n.src=a;const o=new Promise((s,c)=>{n.onload=s,n.onerror=c});t.push(o)}return Promise.all(t)}const C=document.getElementById("voice-search-button"),N=document.getElementById("buscar");let U=!1;function tt(){if(U)return;U=!0;const e=new window.webkitSpeechRecognition||window.SpeechRecognition;e.continuous=!1,e.lang="es-ES";try{e.onresult=a=>{const n=a.results[0][0].transcript.toLowerCase().replace(/[.,]/g,"");N.value=n,at(),me(n).length===0?(O("No se encontraron resultados de: "+n),N.removeAttribute("disabled")):O("Estos son los resultados de: "+n)},e.onerror=a=>{let n="Se ha producido un error en el reconocimiento de voz.";a.error==="no-speech"?n="No se detectó ningún habla.":a.error==="not-allowed"?n="No se permitió el acceso al micrófono. Asegúrese de habilitar los permisos.":a.error==="audio-capture"&&(n="No se encontró ningún micrófono. Asegúrese de que haya un micrófono instalado"),O(n),alert(n)},e.onend=()=>{t()},e.start()}catch(a){t(),console.log(a)}function t(){e.stop(),C.querySelector("p").innerHTML="Escuchar",C.classList.remove("recording"),N.removeAttribute("disabled"),U=!1}}function at(){const e=new Event("input",{bubbles:!0});N.dispatchEvent(e)}function nt(){C.addEventListener("click",()=>{tt(),C.classList.add("recording"),C.querySelector("p").innerHTML="Escuchando...",N.setAttribute("disabled","")})}function O(e){const t=new SpeechSynthesisUtterance(e);t.volume=1,t.rate=1,t.pitch=.9,t.lang="es-ES",window.speechSynthesis.speak(t)}function ot(){return document.getElementById("loginModalSection").innerHTML+=`<div class="modal fade login-modal" id="loginModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">Registro</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="was-validated" id="registerForm">
            <div class="mb-3">
              <input class="form-control mb-0" type="text" name="username" placeholder="Nombre de usuario" minlength="3"
               maxlength="20" required>
              <div class="invalid-feedback ">
                Por favor ingrese un usuario mín. 3 y máx 20 caracteres.
              </div>
            </div>

            <div class="mb-3">
              <input class="form-control mb-0" type="email" name="email" placeholder="Correo electrónico" required>
              <div class="invalid-feedback">
                Por favor ingrese su correo electrónico.
              </div>
            </div>
            <div class="mb-3">
              <input class="form-control mb-0" type="password" autocomplete="password" id="password"
                placeholder="Contraseña"  pattern=".{8,}" required>
              <div class="invalid-feedback">
                Por favor ingrese una contraseña mín 8 caracteres.
              </div>
            </div>
            <div class="d-flex flex-row justify-content-between align-items-center">
              <button class="btn btn-outline-dark btn-custom btn-block" id="registerButton">Registarse</button>
              <a class="visually-hidden" role="button" id="activeBtnRegister">
                <p><i class="fas fa-caret-left"></i> Registrarse</p>
              </a>
              <button class="btn btn-outline-dark btn-custom btn-block visually-hidden" id="loginButton">Ingresar
              </button>
              <a role="button" id="activeBtnLogin">
                <p>Ingresar <i class="fas fa-caret-right"></i></p>
              </a>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="formModalClose" hidden>Close</button>
            </div>
        </div>
        </form>
      </div>
    </div>
  </div>`}ot();const J=document.querySelector("#registerForm"),ve=J.username,be=document.querySelector("#loginButton"),ge=document.querySelector("#registerButton"),K=document.querySelector("#activeBtnLogin"),G=document.querySelector("#activeBtnRegister"),fe=document.querySelector("#modalTitle");function st(){K.addEventListener("click",rt)}function ct(){G.addEventListener("click",it)}function rt(){ve.classList.add("visually-hidden"),ge.classList.add("visually-hidden"),K.classList.add("visually-hidden"),be.classList.remove("visually-hidden"),G.classList.remove("visually-hidden"),fe.innerText="Iniciar sesión",J.classList.remove("was-validated")}function it(){ve.classList.remove("visually-hidden"),ge.classList.remove("visually-hidden"),K.classList.remove("visually-hidden"),be.classList.add("visually-hidden"),G.classList.add("visually-hidden"),fe.innerText="Registro",J.classList.add("was-validated")}let A=[],dt=[],T;const j=document.querySelector("#registerForm"),lt=j.username,S=j.email,H=j.password,ut=document.querySelector("#loginButton"),mt=document.querySelector("#registerButton"),pt=document.querySelector("#formModalClose");function se(){A=g("users")}st();ct();mt.addEventListener("click",async e=>{if(e.preventDefault(),A.find(t=>t.email===S.value))alert("La cuenta ya está registrada");else if(j.checkValidity()){const t=await _(S.value,H.value),a=await _(H.value,JSON.stringify({email:S.value,username:lt.value,_id:t,purchase:dt}));vt(a)}});ut.addEventListener("click",e=>{e.preventDefault();const t=A.find(a=>a.email===S.value);t?he(H.value,t.user):alert(S.value+" no registrada")});function vt(e){let t=le();A.push({_id:t,email:S.value,user:e}),I("users",A),he(H.value,e)}async function he(e,t){try{T=JSON.parse(await de(e,t)),T&&(re("user",T),alert("Bienvenido "+T.username),pt.click(),V(T))}catch{alert("Usuario y/o contraseña incorrectas")}}const bt=document.querySelector("#activateProfile"),gt=document.querySelector("#activateCart"),ft=document.querySelector("#nav-home-tab"),ce=document.querySelector("#nav-profile-tab");function ht(){bt.addEventListener("click",()=>{ce.click()}),ce.addEventListener("click",()=>{g("users")&&se(),$("user")&&V($("user"))}),gt.addEventListener("click",()=>{ft.click(),g("users")&&se()})}document.addEventListener("DOMContentLoaded",()=>{Xe(),g("carrito")&&D(),ht()});window.onload=()=>{Ie(),et(yt).then(()=>{}).catch(e=>{console.error("Error al precargar imágenes:",e)}),xe(),nt()};const yt=["img/about/boutique1.png","img/about/boutique2.png"];
