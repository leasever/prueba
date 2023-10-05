(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const E=[{_id:1,name:"Rascador para gatos",image:["img/products/scraper.jpg","img/products/scraperModal1.jpg","img/products/scraperModal2.jpg","img/products/scraperModal3.jpg"],description:"Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas.",price:89,rating:4},{_id:2,name:"Auriculares tipo vincha",image:["img/products/headphone.jpg","img/products/headphoneModal1.jpg","img/products/headphoneModal2.jpg","img/products/headphoneModal3.jpg"],description:"Los Auriculares tiene bajos más potentes, mejora la experiencia de audio, proporciona una alta calidad de sonido.",price:150,rating:3.5},{_id:3,name:"Mochila para mascotas",image:["img/products/mochila.jpg","img/products/mochilaModal1.jpg","img/products/mochilaModal2.jpg","img/products/mochilaModal3.jpg"],description:"Ideal para visitas al veterinario, paseos, viajes, o para llevarla donde quieras!, Incluye varios orificios amplios para ventilación, además de contar con un acrílico que protege a tu mascota.",price:99,rating:4.5}];function Te(){E.forEach(t=>{ke(t)})}function ke({_id:e,name:t,image:a,description:n}){return document.getElementById("productModal").innerHTML+=`
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
                    ${a.map((s,o)=>o>0&&o<=3?`<div class="carousel-item  ${o===1?"active":""}">
                          <img src="${s}" class="d-block w-100 img-thumbnail" alt="${t}" />
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
  </div>`}function A(e,t){localStorage.setItem(e,JSON.stringify(t))}function g(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}function ue(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function H(e){const t=sessionStorage.getItem(e);return t?JSON.parse(t):null}function te(e){sessionStorage.removeItem(e)}const q=16,ae=q,Ce=function(e){return btoa(String.fromCharCode(...new Uint8Array(e)))},qe=function(e){return Uint8Array.from(atob(e),t=>t.charCodeAt(0))},me=async function(e){const t=new TextEncoder;let a="AES-CBC",n=await window.crypto.subtle.importKey("raw",t.encode(e.password),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t.encode(e.sal.toString()),iterations:e.iterations,hash:e.hash},n,{name:a,length:e.longitude},!1,["encrypt","decrypt"])};async function J(e,t){const a=new TextEncoder,n=window.crypto.getRandomValues(new Uint8Array(16)),s=window.crypto.getRandomValues(new Uint8Array(16)),o=a.encode(t),i=me({password:e,sal:n,iterations:1e5,longitude:256,hash:"SHA-256"}),r=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:s},await i,o);return Ce([...n,...s,...new Uint8Array(r)])}async function pe(e,t){const a=new TextDecoder,n=qe(t),s=n.slice(0,q),o=n.slice(0+q,q+ae),i=me({password:e,sal:s,iterations:1e5,longitude:256,hash:"SHA-256"}),r=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:o},await i,n.slice(q+ae));return a.decode(r)}let R;const Ne=new Uint8Array(16);function Ie(){if(!R&&(R=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(Ne)}const b=[];for(let e=0;e<256;++e)b.push((e+256).toString(16).slice(1));function Me(e,t=0){return b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]}const Ae=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ne={randomUUID:Ae};function ve(e,t,a){if(ne.randomUUID&&!t&&!e)return ne.randomUUID();e=e||{};const n=e.random||(e.rng||Ie)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){a=a||0;for(let s=0;s<16;++s)t[a+s]=n[s];return t}return Me(n)}const Be=new Intl.NumberFormat(void 0,{currency:"USD",style:"currency"});function w(e){return Be.format(e)}function $e(e){return new Date(e).toLocaleDateString("es-ES",{weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}function Pe(){document.querySelector("#loaderSection").setAttribute("style","visibility:hidden; opacity:0;")}function Re(){return document.getElementById("canvaCard").innerHTML+=`<div
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
    </div>`}Re();const De=E;function He(e){const t=document.querySelector("#divAccordion");e.purchase.reverse().map((a,n)=>{const s=document.createElement("h2");s.className="accordion-header",s.id="accordion"+n;const o=document.createElement("button");o.className="accordion-button",o.type="button",o.setAttribute("data-bs-toggle","collapse"),o.setAttribute("data-bs-target","#colpase"+n),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-controls","colpase"+n),o.innerText=$e(a.date);const c=document.createElement("div");c.id="colpase"+n,c.className="accordion-collapse collapse show",c.setAttribute("aria-labelledby","accordion"+n);const i=document.createElement("div");i.className="accordion-body px-1";const r=document.createElement("span");r.className="fw-600",r.innerText="ID: "+a._id;const d=document.createElement("table");d.className="table table-sm table-bordered mt-2",d.innerHTML+=`
    <thead>
       <tr>        
        <th scope="col">Producto</th>
        <th scope="col">P.U</th>
        <th scope="col">Subtotal</th>        
      </tr>
    </thead>       
    `;let m=0;for(let p=0;p<a.items.length;p++){const v=De.find(u=>u._id===a.items[p]._id);m+=a.items[p].quantity*v.price,d.innerHTML+=`          
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
          <td>${w(m)}</td>
        </tr>   
      </tfoot>`,s.append(o),i.append(r,d),c.append(i),t.append(s),t.append(c)})}const se=document.querySelector("#accordionItems"),je=g("users");function G(e){se.innerHTML="";const t=document.createElement("div");t.id="divAccordion";const a=document.createElement("div");a.className="card mb-2";const n=document.createElement("div");n.className="card-header d-flex flex-row justify-content-between";const s=document.createElement("p");s.innerText="Hola, "+e.username;const o=document.createElement("a");o.href="#",o.innerText="Cerrar sesión",o.addEventListener("click",v=>{v.preventDefault(),te("user"),location.reload()});const c=document.createElement("ul");c.className="list-group list-group-flush";const i=document.createElement("li");i.className="list-group-item",i.innerText=e.email;const r=document.createElement("li");r.className="list-group-item d-flex flex-row justify-content-between";const d=document.createElement("p");d.innerText="Compras realizadas: "+e.purchase.length;const m=document.createElement("button");m.type="button",m.className="btn btn-danger icon-cart",m.title="Eliminar cuenta";const p=document.createElement("i");p.className="fas fa-trash-alt",m.append(p),m.addEventListener("click",()=>{if(confirm("¿Quieres borrar este perfil y sus datos?")){let v=je.filter(u=>u.email!==e.email);A("users",v),te("user"),location.reload()}return null}),r.append(d,m),n.append(s,o),a.append(n),a.append(c),c.append(i,r),t.append(a),se.append(t),e.purchase.length>0&&He(e)}function h(e,t,a={}){const n=document.createElement("div");n.classList.add("toast-container"),document.body.appendChild(n);const s=document.createElement("div");s.classList.add("toast"),s.setAttribute("role","alert"),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),s.innerHTML=`
    <div class="toast-header">
      <strong class="me-auto">${e}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">      
      </button>
    </div>
    <div class="toast-body">${t}</div>
  `,n.appendChild(s);const o=new CustomEvent("show.bs.toast",{detail:{toast:s}});a.delay&&setTimeout(()=>{s.classList.add("show"),document.dispatchEvent(o),setTimeout(()=>{s.classList.remove("show"),document.dispatchEvent(new CustomEvent("hidden.bs.toast",{detail:{toast:s}})),document.body.removeChild(n)},a.delay)},0)}const Ue={animation:!0,delay:3e3},Oe=document.querySelector("#nav-profile-tab");async function _e(){const e=g("carrito"),t=H("user"),a=g("users");t.purchase.push({_id:ve(),date:new Date,items:e}),ue("user",t),Oe.click();const n=await pe(t.email,t._id),s=await J(n,JSON.stringify({email:t.email,username:t.username,_id:t._id,purchase:t.purchase})),o=a.map(c=>c.email===t.email?{...c,user:s}:c);Fe(o),h("✅ Éxito",`¡Gracias por comprar con nosotros, ${a[0].email}!`,Ue),G(t)}function Fe(e){const t=document.querySelectorAll(".custom-cart-button");A("users",e),A("carrito",[]),j(),t.forEach(a=>{const n=a.id.replace("addToCartButton","");a.innerHTML=`Añadir <i id="icon${n}" class="fa-solid fa-shopping-cart"></i>`,a.removeAttribute("disabled")})}function be(e){const t=[];for(let a=1;a<=5;a++)e>=a?t.push("fas fa-star"):e>=a-.5?t.push("fas fa-star-half-alt"):t.push("far fa-star");return t.map(a=>`<i class="${a}"></i>`).join("")}const Ve=E;function ge(e){const t=e.toLowerCase().split(" ");return Ve.filter(a=>{const n=a.name.toLowerCase();return t.some(s=>n.includes(s))})}function oe(){const e=document.querySelector("#cardSearch"),t=document.querySelector("#buscar"),a=document.querySelector("#searchResultsShadow");return()=>{e.remove(),t.removeAttribute("disabled"),t.value="",a.className="d-none"}}function ze(){const e=document.getElementById("searchResultsShadow"),t=document.createElement("div");t.className="overflow-auto",t.id="cardSearch";const a=document.createElement("div");a.className="card-header d-flex flex-row";const n=document.createElement("div");n.className="card-body",document.addEventListener("input",c),e.className="d-none";const s=document.getElementById("buscar");function o(){const r=document.querySelector(".navbar").offsetHeight;t.style.maxHeight=`calc(100vh - ${r}px)`}o();function c(i){const r=document.getElementById("searchSection").offsetHeight,d=document.getElementById("search-results-container");if(i.target===s){const m=s.value.trim(),p=ge(m);if(m==="")t.remove(),e.className="d-none";else{a.innerHTML="",n.innerHTML="",e.className="d-none",p.length===0?(a.innerHTML=`
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5 class="me-5">No se encontraron resultados</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`,oe()):(e.className="search-result-shadow",a.innerHTML=`
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5>Resultado: ${p.length}</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`,p.forEach(u=>{const f=document.createElement("div");f.classList.add("result-item");const y=()=>{Q(u._id),K("#addToCartButtonSearch",u._id)};f.innerHTML=`
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
                      <p>Precio: ${w(u.price)}</p>
                      <div>${be(u.rating)}</div>
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
            `,n.appendChild(f),t.innerHTML="",t.appendChild(a),t.appendChild(n),d.innerHTML="",d.appendChild(t);const x=document.querySelector(`#addToCartButtonSearch${u._id}`);x==null||x.addEventListener("click",y),K("#addToCartButtonSearch",u._id)}));const v=document.querySelector("#clearSearch");v==null||v.addEventListener("click",oe())}}d.style.marginTop=10+r+"px",o()}}function Je(){return document.getElementById("headerContent").innerHTML+=`
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

`,ze()}Je();const D=document.querySelector("#cartContainer"),ce=document.querySelector("#precioTotal"),N=document.querySelector("#btnPay"),ie=document.querySelector("#contadorCarrito"),Ke=document.querySelector("#loginRegisterModal"),Ge={delay:5e3},Qe=E;function We(e){let t=0,a=0;e.length===0&&(D.innerHTML="",ce.innerText="DSS",N.innerText="Médios de pago",N.classList.add("disabled"),ie.innerText="0"),e.map(n=>{const s=Qe.find(Le=>Le._id===n._id);a+=n.quantity,ie.innerText=a.toString();const o=document.createElement("div");o.className="d-flex align-items-center gap-2 mb-2";const c=document.createElement("a");c.href="#staticBackdrop"+s._id,c.setAttribute("data-bs-toggle","modal");const i=document.createElement("img");i.src=s.image[0],i.className="img-cart img-thumbnail";const r=document.createElement("div");r.className="d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";const d=document.createElement("div");d.className="me-auto";const m=document.createElement("div");m.innerText=s.name+" ",m.className="justify-content-start ";const p=document.createElement("span");p.className="text-muted quantity-cart",p.innerText="x "+n.quantity.toString();const v=document.createElement("div");v.className="text-muted price-cart",v.innerText=w(s.price).toString();const u=document.createElement("div");u.innerText=w(s.price*n.quantity).toString(),t+=s.price*n.quantity;const f=document.createElement("div");f.className="d-flex flex-wrap gap-1 col-12";const y=document.createElement("button");y.type="button",y.className="btn btn-outline-primary icon-cart",y.addEventListener("click",()=>{Ze(n._id)});const x=document.createElement("i");x.className="fas fa-minus";const L=document.createElement("button");L.type="button",L.className="btn btn-danger icon-cart",L.addEventListener("click",()=>{confirm("Desea eliminar el producto: "+(s==null?void 0:s.name))&&(Xe(n._id),K("#addToCartButtonSearch",n._id))});const X=document.createElement("i");X.className="fas fa-trash-alt";const T=document.createElement("button");T.type="button",T.className="btn btn-outline-primary icon-cart",T.addEventListener("click",()=>{Q(n._id)});const ee=document.createElement("i");return ee.className="fas fa-plus",y.append(x),L.append(X),T.append(ee),n.quantity>1&&(m.append(p),f.append(y)),d.append(m),d.append(v),f.append(L),f.append(T),r.append(d),r.append(u),r.append(f),c.append(i),o.append(c),o.append(r),ce.innerText="Total "+w(t).toString(),N.innerText="Pagar",N.classList.remove("disabled"),D==null?void 0:D.append(o)})}N.addEventListener("click",()=>{H("user")?_e():(Ke.click(),h("⚠️ Registro e Ingreso","Regístrese e inicie sesión para recibir su factura y gestionar sus pedidos.",Ge))});let l=[];const Ye=document.querySelector("#cartContainer");function j(){l=g("carrito"),P(l),l.forEach(e=>{e!=null&&e._id?B(e._id,!0):B(e._id,!1)})}function Q(e){(l==null?void 0:l.find(t=>t._id===e))==null?l=[...l,{_id:e,quantity:1}]:l.map(t=>t._id===e?(t.quantity+=1,{...t,quantity:t.quantity}):t),P(l),B(e,!0)}function Ze(e){var t;((t=l.find(a=>a._id===e))==null?void 0:t.quantity)===1?(l=l.filter(a=>a._id!==e),B(e,!1)):l.map(a=>a._id===e?(a.quantity-=1,{...a,quantity:a.quantity}):a),P(l)}function Xe(e){l=l.filter(t=>t._id!==e),P(l),B(e,!1)}function B(e,t){const a=document.querySelector("#addToCartButton"+e);t?(a.setAttribute("disabled",""),a.innerText="Añadido ✅"):(a.removeAttribute("disabled"),a.innerText="Añadir 🛒")}function P(e){Ye.innerHTML="",We(e),A("carrito",e)}function K(e,t){P(l),l=g("carrito");const a=document.querySelector(`${e+t}`);a!=null&&l!=null&&(a.removeAttribute("disabled"),a.innerText="Añadir 🛒",l.map(n=>{(n==null?void 0:n._id)===t&&(a.setAttribute("disabled",""),a.innerText="Añadido ✅")}))}function et(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
  <div id="about">
        <section class="about-us py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 col-12 text-center">
                  <img
                  src="img/about/boutique1.png"
                  alt="Imagen de Nosotros"
                  class="img-fluid rounded-circle mb-4 w-75 ratio ratio-1x1"
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
      </div>`}function tt(e){const{id:t,image:a,title:n,description:s}=e,o=document.getElementById(t);if(!o){console.error(`Element with id '${t}' not found.`);return}const c=`
    <div class="parallax-section">
        <div class="parallax-image" style="background-image: url('./img/banner/${a}');" ></div>
        <div class="parallax-content card" id="parallaxDetails">
            <h1>${n}</h1>
            <p>${s}</p>
            <button              
              class="btn btn-outline-dark btn-custom text-break custom-cart-button mt-4 col-10"
              id="verProductosButton" 
            >
              Ver productos
              <i class="fa-solid fa-eye"></i>
            </button>
        </div>
    </div>
  `;o.innerHTML=c;function i(){const d=document.querySelector(".nav-menu[href='#productPage']");d instanceof HTMLElement&&d.click()}const r=document.querySelector("#verProductosButton");r&&r.addEventListener("click",i)}function fe({_id:e,name:t,image:a,price:n,rating:s}){const o=document.querySelector("#activateCart"),c=()=>{Q(e),o.click()},i=`<div class="d-flex align-items-stretch">
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
          <span class="fs-6">${w(n)}</span>
        </span>
        <div>${be(s)}</div>
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
`,r=document.createElement("div");r.innerHTML=i;const d=r.querySelector(`#addToCartButton${e}`);return d==null||d.addEventListener("click",c),r.firstElementChild}const at={id:"parallaxSection",image:"parallax_home.jpg",title:"Outlet DSStore",description:"Los mejores productos con grandes descuentos."};function re(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`<!-- Carousel -->
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
    `,nt(),tt(at)}function nt(){const e=E,t=document.getElementById("productSection");e.forEach(a=>{const n=fe(a);t==null||t.appendChild(n)})}function st(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
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
    </section>`,ot()}function ot(){const e=E,t=document.getElementById("productSection");e.forEach(a=>{const n=fe(a);t==null||t.appendChild(n)})}function ct(){const e=document.getElementById("main-content"),t=document.querySelectorAll(".nav-menu");function a(){re(),g("carrito")&&j()}function n(){et()}function s(){st(),g("carrito")&&j()}function o(i){e.innerHTML="",i()}function c(i){i.preventDefault();const r=i.currentTarget.getAttribute("href").substring(1);switch(t.forEach(d=>{d.classList.remove("selected")}),r){case"homePage":o(a);break;case"aboutPage":o(n);break;case"productPage":o(s);break}i.currentTarget.classList.add("selected")}t.forEach(i=>{i.addEventListener("click",c)}),t[0].classList.add("selected"),o(re)}function it(e){const t=[];for(const a of e){const n=new Image;n.src=a;const s=new Promise((o,c)=>{n.onload=o,n.onerror=c});t.push(s)}return Promise.all(t)}const he={animation:!0,delay:4e3},I=document.getElementById("voice-search-button"),M=document.getElementById("buscar");let F=!1;function rt(){if(F)return;F=!0;const e=new window.webkitSpeechRecognition||window.SpeechRecognition;e.continuous=!1,e.lang="es-ES";try{e.onresult=a=>{const n=a.results[0][0].transcript.toLowerCase().replace(/[.,]/g,"");M.value=n,dt(),ge(n).length===0?(V("No se encontraron resultados de: "+n),M.removeAttribute("disabled")):V("Estos son los resultados de: "+n)},e.onerror=a=>{let n="Se ha producido un error en el reconocimiento de voz.";a.error==="no-speech"?n="No se detectó ningún habla.":a.error==="not-allowed"?n="No se permitió el acceso al micrófono. Asegúrese de habilitar los permisos.":a.error==="audio-capture"&&(n="No se encontró ningún micrófono. Asegúrese de que haya un micrófono instalado"),V(n),h("❌ Error",n,he)},e.onend=()=>{t()},e.start()}catch(a){t(),console.log(a)}function t(){e.stop(),I.querySelector("p").innerHTML="Escuchar",I.classList.remove("recording"),M.removeAttribute("disabled"),F=!1}}function dt(){const e=new Event("input",{bubbles:!0});M.dispatchEvent(e)}function lt(){I.addEventListener("click",()=>{rt(),I.classList.add("recording"),I.querySelector("p").innerHTML="Escuchando...",M.setAttribute("disabled",""),h("⚠️ Búsqueda por voz activada","Hable para buscar un producto o categoría",he)})}function V(e){const t=new SpeechSynthesisUtterance(e);t.volume=1,t.rate=1,t.pitch=.9,t.lang="es-ES",window.speechSynthesis.speak(t)}function ut(){return document.getElementById("loginModalSection").innerHTML+=`<div class="modal fade login-modal" id="loginModal">
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
                Ingrese su nombre mín. 3 y máx 20 caracteres.
              </div>
            </div>
            <div class="mb-3">
              <input class="form-control mb-0" type="email" name="email" placeholder="Correo electrónico" required>
              <div class="invalid-feedback">
                Ingrese un correo electrónico válido.
              </div>
            </div>
            <div class="mb-3 position-relative">
                <input class="form-control mb-0" type="password" autocomplete="password" id="password"
                  placeholder="Contraseña"  pattern=".{8,}" required>
                <i class="fa-solid fa-eye-slash password-toggle-icon" id="togglePassword"></i>
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
  </div>`}ut();const W=document.querySelector("#registerForm"),ye=W.username,xe=document.querySelector("#loginButton"),Se=document.querySelector("#registerButton"),Y=document.querySelector("#activeBtnLogin"),Z=document.querySelector("#activeBtnRegister"),we=document.querySelector("#modalTitle");function mt(){Y.addEventListener("click",vt)}function pt(){Z.addEventListener("click",bt)}function vt(){ye.classList.add("visually-hidden"),Se.classList.add("visually-hidden"),Y.classList.add("visually-hidden"),xe.classList.remove("visually-hidden"),Z.classList.remove("visually-hidden"),we.innerText="Iniciar sesión",W.classList.remove("was-validated")}function bt(){ye.classList.remove("visually-hidden"),Se.classList.remove("visually-hidden"),Y.classList.remove("visually-hidden"),xe.classList.add("visually-hidden"),Z.classList.add("visually-hidden"),we.innerText="Registro",W.classList.add("was-validated")}const z=document.querySelector("#password"),k=document.querySelector("#togglePassword");k.addEventListener("click",function(){z.type==="password"?(z.type="text",k.classList.remove("fa-eye-slash"),k.classList.add("fa-eye")):(z.type="password",k.classList.remove("fa-eye"),k.classList.add("fa-eye-slash"))});let $=[],gt=[],C;const _=document.querySelector("#registerForm"),ft=_.username,S=_.email,U=_.password,ht=document.querySelector("#loginButton"),yt=document.querySelector("#registerButton"),xt=document.querySelector("#formModalClose"),O={delay:3e3};function de(){$=g("users")}mt();pt();yt.addEventListener("click",async e=>{if(e.preventDefault(),$.find(t=>t.email===S.value))h("⚠️ Registro de usuario",`El correo electrónico ${S.value} ya ha sido registrado previamente.`,O);else if(_.checkValidity()){const t=await J(S.value,U.value),a=await J(U.value,JSON.stringify({email:S.value,username:ft.value,_id:t,purchase:gt}));St(a)}});ht.addEventListener("click",e=>{e.preventDefault();const t=$.find(a=>a.email===S.value);t?Ee(U.value,t.user):h("❌ Error","El correo electrónico y/o la contraseña son incorrectos",O)});function St(e){let t=ve();$.push({_id:t,email:S.value,user:e}),A("users",$),Ee(U.value,e)}async function Ee(e,t){try{C=JSON.parse(await pe(e,t)),C&&(ue("user",C),h("✅ Sesión iniciada",`¡Bienvenido, ${C.username}!`,O),xt.click(),G(C))}catch{h("❌ Error","El correo electrónico y/o la contraseña son incorrectos",O)}}const wt=document.querySelector("#activateProfile"),Et=document.querySelector("#activateCart"),Lt=document.querySelector("#nav-home-tab"),le=document.querySelector("#nav-profile-tab");function Tt(){wt.addEventListener("click",()=>{le.click()}),le.addEventListener("click",()=>{g("users")&&de(),H("user")&&G(H("user"))}),Et.addEventListener("click",()=>{Lt.click(),g("users")&&de()})}document.addEventListener("DOMContentLoaded",()=>{ct(),g("carrito")&&j(),Tt()});window.onload=()=>{Pe(),it(kt).then(()=>{}).catch(e=>{console.error("Error al precargar imágenes:",e)}),Te(),lt()};const kt=["img/about/boutique1.png","img/about/boutique2.png"];
