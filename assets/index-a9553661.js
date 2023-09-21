(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const E=[{_id:1,name:"Rascador para gatos",image:["img/products/scraper.jpg","img/products/scraperModal1.jpg","img/products/scraperModal2.jpg","img/products/scraperModal3.jpg"],description:"Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas.",price:89,rating:4},{_id:2,name:"Auriculares tipo vincha",image:["img/products/headphone.jpg","img/products/headphoneModal1.jpg","img/products/headphoneModal2.jpg","img/products/headphoneModal3.jpg"],description:"Los Auriculares tiene bajos más potentes, mejora la experiencia de audio, proporciona una alta calidad de sonido.",price:150,rating:3.5},{_id:3,name:"Mochila para mascotas",image:["img/products/mochila.jpg","img/products/mochilaModal1.jpg","img/products/mochilaModal2.jpg","img/products/mochilaModal3.jpg"],description:"Ideal para visitas al veterinario, paseos, viajes, o para llevarla donde quieras!, Incluye varios orificios amplios para ventilación, además de contar con un acrílico que protege a tu mascota.",price:99,rating:4.5}];function ye(){E.forEach(t=>{xe(t)})}function xe({_id:e,name:t,image:a,description:n}){return document.getElementById("productModal").innerHTML+=`
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
                          <img src="${s}" class="d-block w-100 img-thumbnail" alt="${t}" loading="lazy" />
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
  </div>`}function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function f(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}function ce(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function D(e){const t=sessionStorage.getItem(e);return t?JSON.parse(t):null}function W(e){sessionStorage.removeItem(e)}const q=16,Y=q,Se=function(e){return btoa(String.fromCharCode(...new Uint8Array(e)))},we=function(e){return Uint8Array.from(atob(e),t=>t.charCodeAt(0))},re=async function(e){const t=new TextEncoder;let a="AES-CBC",n=await window.crypto.subtle.importKey("raw",t.encode(e.password),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t.encode(e.sal.toString()),iterations:e.iterations,hash:e.hash},n,{name:a,length:e.longitude},!1,["encrypt","decrypt"])};async function O(e,t){const a=new TextEncoder,n=window.crypto.getRandomValues(new Uint8Array(16)),s=window.crypto.getRandomValues(new Uint8Array(16)),o=a.encode(t),c=re({password:e,sal:n,iterations:1e5,longitude:256,hash:"SHA-256"}),i=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:s},await c,o);return Se([...n,...s,...new Uint8Array(i)])}async function ie(e,t){const a=new TextDecoder,n=we(t),s=n.slice(0,q),o=n.slice(0+q,q+Y),c=re({password:e,sal:s,iterations:1e5,longitude:256,hash:"SHA-256"}),i=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:o},await c,n.slice(q+Y));return a.decode(i)}let P;const Ee=new Uint8Array(16);function Te(){if(!P&&(P=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!P))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return P(Ee)}const v=[];for(let e=0;e<256;++e)v.push((e+256).toString(16).slice(1));function Le(e,t=0){return v[e[t+0]]+v[e[t+1]]+v[e[t+2]]+v[e[t+3]]+"-"+v[e[t+4]]+v[e[t+5]]+"-"+v[e[t+6]]+v[e[t+7]]+"-"+v[e[t+8]]+v[e[t+9]]+"-"+v[e[t+10]]+v[e[t+11]]+v[e[t+12]]+v[e[t+13]]+v[e[t+14]]+v[e[t+15]]}const ke=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Z={randomUUID:ke};function de(e,t,a){if(Z.randomUUID&&!t&&!e)return Z.randomUUID();e=e||{};const n=e.random||(e.rng||Te)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){a=a||0;for(let s=0;s<16;++s)t[a+s]=n[s];return t}return Le(n)}const qe=new Intl.NumberFormat(void 0,{currency:"USD",style:"currency"});function S(e){return qe.format(e)}function Ce(){return document.getElementById("canvaCard").innerHTML+=`<div
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
    </div>`}Ce();const Ne=E;function Ie(e){const t=document.querySelector("#divAccordion");e.purchase.reverse().map((a,n)=>{const s=document.createElement("h2");s.className="accordion-header",s.id="accordion"+n;const o=document.createElement("button");o.className="accordion-button",o.type="button",o.setAttribute("data-bs-toggle","collapse"),o.setAttribute("data-bs-target","#colpase"+n),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-controls","colpase"+n);const r=new Date(a.date).toLocaleDateString("es-ES",{weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"});o.innerText=r;const c=document.createElement("div");c.id="colpase"+n,c.className="accordion-collapse collapse show",c.setAttribute("aria-labelledby","accordion"+n);const i=document.createElement("div");i.className="accordion-body px-1";const u=document.createElement("span");u.className="fw-600",u.innerText="ID: "+a._id;const m=document.createElement("table");m.className="table table-sm table-bordered mt-2",m.innerHTML+=`
    <thead>
       <tr>        
        <th scope="col">Producto</th>
        <th scope="col">P.U</th>
        <th scope="col">Subtotal</th>        
      </tr>
    </thead>       
    `;let b=0;for(let p=0;p<a.items.length;p++){const d=Ne.find(g=>g._id===a.items[p]._id);b+=a.items[p].quantity*d.price,m.innerHTML+=`          
        <tbody>
          <tr >            
            <td scope="row">
              <a href="#staticBackdrop${d._id}" data-bs-toggle="modal">
               ${d.name+" - x"+a.items[p].quantity}
              </a>
            </td>
            <td class="text-end">${d.price}</td>
            <td class="text-end">${a.items[p].quantity*d.price}</td>
          </tr>    
        </tbody>`}m.innerHTML+=`
      <tfoot>
        <tr class="text-end"> 
          <td></td>           
          <td class="fw-bolder">Total: </td>
          <td>${S(b)}</td>
        </tr>   
      </tfoot>`,s.append(o),i.append(u,m),c.append(i),t.append(s),t.append(c)})}const X=document.querySelector("#accordionItems"),Me=f("users");function F(e){X.innerHTML="";const t=document.createElement("div");t.id="divAccordion";const a=document.createElement("div");a.className="card mb-2";const n=document.createElement("div");n.className="card-header d-flex flex-row justify-content-between";const s=document.createElement("p");s.innerText="Hola, "+e.username;const o=document.createElement("a");o.href="#",o.innerText="Cerrar sesión",o.addEventListener("click",p=>{p.preventDefault(),W("user"),location.reload()});const r=document.createElement("ul");r.className="list-group list-group-flush";const c=document.createElement("li");c.className="list-group-item",c.innerText=e.email;const i=document.createElement("li");i.className="list-group-item d-flex flex-row justify-content-between";const u=document.createElement("p");u.innerText="Compras realizadas: "+e.purchase.length;const m=document.createElement("button");m.type="button",m.className="btn btn-danger icon-cart",m.title="Eliminar cuenta";const b=document.createElement("i");b.className="fas fa-trash-alt",m.append(b),m.addEventListener("click",()=>{if(confirm("¿Quieres borrar este perfil y sus datos?")){let p=Me.filter(d=>d.email!==e.email);I("users",p),W("user"),location.reload()}return null}),i.append(u,m),n.append(s,o),a.append(n),a.append(r),r.append(c,i),t.append(a),X.append(t),e.purchase.length>0&&Ie(e)}const Ae=document.querySelector("#nav-profile-tab");async function Be(){const e=f("carrito"),t=D("user"),a=f("users");t.purchase.push({_id:de(),date:new Date,items:e}),ce("user",t),Ae.click();const n=await ie(t.email,t._id),s=await O(n,JSON.stringify({email:t.email,username:t.username,_id:t._id,purchase:t.purchase})),o=a.map(r=>r.email===t.email?{...r,user:s}:r);Pe(o),alert("Gracias por su compra "+t.username),F(t)}function Pe(e){const t=document.querySelectorAll(".custom-cart-button");I("users",e),I("carrito",[]),H(),t.forEach(a=>{const n=a.id.replace("addToCartButton","");a.innerHTML=`Añadir <i id="icon${n}" class="fa-solid fa-shopping-cart"></i>`,a.removeAttribute("disabled")})}function le(e){const t=[];for(let a=1;a<=5;a++)e>=a?t.push("fas fa-star"):e>=a-.5?t.push("fas fa-star-half-alt"):t.push("far fa-star");return t.map(a=>`<i class="${a}"></i>`).join("")}const Re=E;function ue(e){const t=e.toLowerCase().split(" ");return Re.filter(a=>{const n=a.name.toLowerCase();return t.some(s=>n.includes(s))})}function ee(){const e=document.querySelector("#cardSearch"),t=document.querySelector("#buscar"),a=document.querySelector("#searchResultsShadow");return()=>{e.remove(),t.removeAttribute("disabled"),t.value="",a.className="d-none"}}function $e(){const e=document.getElementById("searchResultsShadow"),t=document.createElement("div");t.className="overflow-auto",t.id="cardSearch";const a=document.createElement("div");a.className="card-header d-flex flex-row";const n=document.createElement("div");n.className="card-body",document.addEventListener("input",r),e.className="d-none";const s=document.getElementById("buscar");function o(){const i=document.querySelector(".navbar").offsetHeight;t.style.maxHeight=`calc(100vh - ${i}px)`}o();function r(c){const i=document.getElementById("searchSection").offsetHeight,u=document.getElementById("search-results-container");if(c.target===s){const m=s.value.trim(),b=ue(m);if(m==="")t.remove(),e.className="d-none";else{a.innerHTML="",n.innerHTML="",e.className="d-none",b.length===0?(a.innerHTML=`
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5 class="me-5">No se encontraron resultados</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`,ee()):(e.className="search-result-shadow",a.innerHTML=`
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5>Resultado: ${b.length}</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`,b.forEach(d=>{const g=document.createElement("div");g.classList.add("result-item");const h=()=>{V(d._id),_("#addToCartButtonSearch",d._id)};g.innerHTML=`
              <div class="d-flex justify-content-between align-items-center">
                <div class="card col-2  d-flex p-1 d-none d-sm-flex">
                  <img
                    src="${d.image[0]}"
                    class="card-img-top"
                    alt="${d.name}"
                    loading="lazy"
                  />
                </div>
                <div class="col-12 col-sm-10 ps-2">
                  <h5 class="card-title">${d.name}</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="me-sm-3 mb-2 mb-sm-0">
                      <p>Precio: ${S(d.price)}</p>
                      <div>${le(d.rating)}</div>
                    </div>
                    <div class="col text-end">
                      <a
                        href="#staticBackdrop${d._id}"
                        data-bs-toggle="modal"
                        class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2"
                      >
                        Detalles
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <button
                        class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2"
                        id="addToCartButtonSearch${d._id}"
                      >
                        Añadir
                        <i id="iconSearch${d._id}" class="fa-solid fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `,n.appendChild(g),t.innerHTML="",t.appendChild(a),t.appendChild(n),u.innerHTML="",u.appendChild(t);const y=document.querySelector(`#addToCartButtonSearch${d._id}`);y==null||y.addEventListener("click",h),_("#addToCartButtonSearch",d._id)}));const p=document.querySelector("#clearSearch");p==null||p.addEventListener("click",ee())}}u.style.marginTop=10+i+"px",o()}}function De(){return document.getElementById("headerContent").innerHTML+=`
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

`,$e()}De();const R=document.querySelector("#cartContainer"),te=document.querySelector("#precioTotal"),C=document.querySelector("#btnPay"),ae=document.querySelector("#contadorCarrito"),He=document.querySelector("#loginRegisterModal"),je=E;function Ue(e){let t=0,a=0;e.length===0&&(R.innerHTML="",te.innerText="DSS",C.innerText="Médios de pago",C.classList.add("disabled"),ae.innerText="0"),e.map(n=>{const s=je.find(he=>he._id===n._id);a+=n.quantity,ae.innerText=a.toString();const o=document.createElement("div");o.className="d-flex align-items-center gap-2 mb-2";const r=document.createElement("a");r.href="#staticBackdrop"+s._id,r.setAttribute("data-bs-toggle","modal");const c=document.createElement("img");c.src=s.image[0],c.className="img-cart img-thumbnail";const i=document.createElement("div");i.className="d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";const u=document.createElement("div");u.className="me-auto";const m=document.createElement("div");m.innerText=s.name+" ",m.className="justify-content-start ";const b=document.createElement("span");b.className="text-muted quantity-cart",b.innerText="x "+n.quantity.toString();const p=document.createElement("div");p.className="text-muted price-cart",p.innerText=S(s.price).toString();const d=document.createElement("div");d.innerText=S(s.price*n.quantity).toString(),t+=s.price*n.quantity;const g=document.createElement("div");g.className="d-flex flex-wrap gap-1 col-12";const h=document.createElement("button");h.type="button",h.className="btn btn-outline-primary icon-cart",h.addEventListener("click",()=>{_e(n._id)});const y=document.createElement("i");y.className="fas fa-minus";const T=document.createElement("button");T.type="button",T.className="btn btn-danger icon-cart",T.addEventListener("click",()=>{confirm("Desea eliminar el producto: "+(s==null?void 0:s.name))&&(Fe(n._id),_("#addToCartButtonSearch",n._id))});const G=document.createElement("i");G.className="fas fa-trash-alt";const L=document.createElement("button");L.type="button",L.className="btn btn-outline-primary icon-cart",L.addEventListener("click",()=>{V(n._id)});const Q=document.createElement("i");return Q.className="fas fa-plus",h.append(y),T.append(G),L.append(Q),n.quantity>1&&(m.append(b),g.append(h)),u.append(m),u.append(p),g.append(T),g.append(L),i.append(u),i.append(d),i.append(g),r.append(c),o.append(r),o.append(i),te.innerText="Total "+S(t).toString(),C.innerText="Pagar",C.classList.remove("disabled"),R==null?void 0:R.append(o)})}C.addEventListener("click",()=>{D("user")?Be():(alert("Registrese o inicie sesión para completar la venta"),He.click())});let l=[];const Oe=document.querySelector("#cartContainer");function H(){l=f("carrito"),B(l),l.forEach(e=>{e!=null&&e._id?M(e._id,!0):M(e._id,!1)})}function V(e){(l==null?void 0:l.find(t=>t._id===e))==null?l=[...l,{_id:e,quantity:1}]:l.map(t=>t._id===e?(t.quantity+=1,{...t,quantity:t.quantity}):t),B(l),M(e,!0)}function _e(e){var t;((t=l.find(a=>a._id===e))==null?void 0:t.quantity)===1?(l=l.filter(a=>a._id!==e),M(e,!1)):l.map(a=>a._id===e?(a.quantity-=1,{...a,quantity:a.quantity}):a),B(l)}function Fe(e){l=l.filter(t=>t._id!==e),B(l),M(e,!1)}function M(e,t){const a=document.querySelector("#addToCartButton"+e);t?(a.setAttribute("disabled",""),a.innerText="Añadido ✅"):(a.removeAttribute("disabled"),a.innerText="Añadir 🛒")}function B(e){Oe.innerHTML="",Ue(e),I("carrito",e)}function _(e,t){B(l),l=f("carrito");const a=document.querySelector(`${e+t}`);a!=null&&l!=null&&(a.removeAttribute("disabled"),a.innerText="Añadir 🛒",l.map(n=>{(n==null?void 0:n._id)===t&&(a.setAttribute("disabled",""),a.innerText="Añadido ✅")}))}function Ve(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
  <div id="about">
        <section class="about-us py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-12 text-center">
                <img
                  src="img/about/boutique1.png"
                  alt="Imagen de Nosotros"
                  class="img-fluid rounded-circle mb-4 w-75"
                  loading="eager"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
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
              <div class="col-lg-6 col-md-6 col-12 text-center">
                <img
                  src="img/about/boutique2.png"
                  alt="Imagen de Nosotros"
                  class="img-fluid rounded-circle mb-4 w-75"
                  loading="lazy"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
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
              <div class="col-lg-6 col-md-6 col-12 text-center">
                <img
                  src="img/about/boutique3.png"
                  alt="Imagen de Nosotros"
                  class="img-fluid rounded-circle mb-4 w-75"
                  loading="lazy"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
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
      </div>`}function me({_id:e,name:t,image:a,price:n,rating:s}){const o=document.querySelector("#activateCart"),r=()=>{V(e),o.click()},c=`<div class="d-flex align-items-stretch">
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
          <span class="fs-6">${S(n)}</span>
        </span>
        <div>${le(s)}</div>
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
`,i=document.createElement("div");i.innerHTML=c;const u=i.querySelector(`#addToCartButton${e}`);return u==null||u.addEventListener("click",r),i.firstElementChild}function ne(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`<!-- Carousel -->
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
    </section>`,ze()}function ze(){const e=E,t=document.getElementById("productSection");e.forEach(a=>{const n=me(a);t==null||t.appendChild(n)})}function Je(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
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
    </section>`,Ke()}function Ke(){const e=E,t=document.getElementById("productSection");e.forEach(a=>{const n=me(a);t==null||t.appendChild(n)})}function Ge(){const e=document.getElementById("main-content"),t=document.querySelectorAll(".nav-menu");function a(){ne(),f("carrito")&&H()}function n(){Ve()}function s(){Je(),f("carrito")&&H()}function o(c){e.innerHTML="",c()}function r(c){c.preventDefault();const i=c.currentTarget.getAttribute("href").substring(1);switch(t.forEach(u=>{u.classList.remove("selected")}),i){case"homePage":o(a);break;case"aboutPage":o(n);break;case"productPage":o(s);break}c.currentTarget.classList.add("selected")}t.forEach(c=>{c.addEventListener("click",r)}),t[0].classList.add("selected"),o(ne)}function Qe(e){const t=document.querySelector("#loaderSection"),a=[];t.setAttribute("style","visibility:hidden; opacity:0;");for(const n of e){const s=new Image;s.src=n;const o=new Promise((r,c)=>{s.onload=r,s.onerror=c});a.push(o)}return Promise.all(a)}const N=document.getElementById("voice-search-button"),x=document.getElementById("buscar");function We(){const e=new webkitSpeechRecognition;e.continuous=!1,e.lang="es-ES",e.onresult=a=>{const n=a.results[0][0].transcript.toLowerCase().replace(/[.,]/g,"");x.value=n,Ye(),ue(n).length===0?($("No se encontraron resultados de: "+n),x.removeAttribute("disabled")):$("Estos son los resultados de: "+n)},e.onerror=a=>{let n="Se ha producido un error en el reconocimiento de voz.";a.error==="no-speech"?(n="No se detectó ningún habla.",$(n),x.removeAttribute("disabled")):a.error==="not-allowed"&&(n="No se permitió el acceso al micrófono. Asegúrese de habilitar los permisos.",$(n),x.removeAttribute("disabled")),alert(n)},e.onend=()=>{t()},e.start();function t(){e.stop(),N.querySelector("p").innerHTML="Escuchar",N.classList.remove("recording")}}function Ye(){const e=new Event("input",{bubbles:!0});x.dispatchEvent(e)}function Ze(){N.addEventListener("click",()=>{We(),N.classList.add("recording"),N.querySelector("p").innerHTML="Escuchando...",x.setAttribute("disabled","")})}function $(e){const t=new SpeechSynthesisUtterance(e);t.volume=1,t.rate=1,t.pitch=.9,t.lang="es-ES",window.speechSynthesis.speak(t)}function Xe(){return document.getElementById("loginModalSection").innerHTML+=`<div class="modal fade login-modal" id="loginModal">
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
  </div>`}Xe();const z=document.querySelector("#registerForm"),pe=z.username,ve=document.querySelector("#loginButton"),be=document.querySelector("#registerButton"),J=document.querySelector("#activeBtnLogin"),K=document.querySelector("#activeBtnRegister"),ge=document.querySelector("#modalTitle");function et(){J.addEventListener("click",at)}function tt(){K.addEventListener("click",nt)}function at(){pe.classList.add("visually-hidden"),be.classList.add("visually-hidden"),J.classList.add("visually-hidden"),ve.classList.remove("visually-hidden"),K.classList.remove("visually-hidden"),ge.innerText="Iniciar sesión",z.classList.remove("was-validated")}function nt(){pe.classList.remove("visually-hidden"),be.classList.remove("visually-hidden"),J.classList.remove("visually-hidden"),ve.classList.add("visually-hidden"),K.classList.add("visually-hidden"),ge.innerText="Registro",z.classList.add("was-validated")}let A=[],st=[],k;const U=document.querySelector("#registerForm"),ot=U.username,w=U.email,j=U.password,ct=document.querySelector("#loginButton"),rt=document.querySelector("#registerButton"),it=document.querySelector("#formModalClose");function se(){A=f("users")}et();tt();rt.addEventListener("click",async e=>{if(e.preventDefault(),A.find(t=>t.email===w.value))alert("La cuenta ya está registrada");else if(U.checkValidity()){const t=await O(w.value,j.value),a=await O(j.value,JSON.stringify({email:w.value,username:ot.value,_id:t,purchase:st}));dt(a)}});ct.addEventListener("click",e=>{e.preventDefault();const t=A.find(a=>a.email===w.value);t?fe(j.value,t.user):alert(w.value+" no registrada")});function dt(e){let t=de();A.push({_id:t,email:w.value,user:e}),I("users",A),fe(j.value,e)}async function fe(e,t){try{k=JSON.parse(await ie(e,t)),k&&(ce("user",k),alert("Bienvenido "+k.username),it.click(),F(k))}catch{alert("Usuario y/o contraseña incorrectas")}}const lt=document.querySelector("#activateProfile"),ut=document.querySelector("#activateCart"),mt=document.querySelector("#nav-home-tab"),oe=document.querySelector("#nav-profile-tab");function pt(){lt.addEventListener("click",()=>{oe.click()}),oe.addEventListener("click",()=>{f("users")&&se(),D("user")&&F(D("user"))}),ut.addEventListener("click",()=>{mt.click(),f("users")&&se()})}document.addEventListener("DOMContentLoaded",()=>{Ge(),f("carrito")&&H(),pt()});window.onload=()=>{Qe(vt).then(()=>{}).catch(e=>{console.error("Error al precargar imágenes:",e)}),ye(),Ze()};const vt=["img/about/boutique1.png","img/about/boutique2.png"];
