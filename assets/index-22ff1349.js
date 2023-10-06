(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const C=[{_id:1,name:"Rascador para gatos",image:["img/products/scraper.jpg","img/products/scraperModal1.jpg","img/products/scraperModal2.jpg","img/products/scraperModal3.jpg"],description:"Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas.",price:89,rating:4},{_id:2,name:"Auriculares tipo vincha",image:["img/products/headphone.jpg","img/products/headphoneModal1.jpg","img/products/headphoneModal2.jpg","img/products/headphoneModal3.jpg"],description:"Los Auriculares tiene bajos más potentes, mejora la experiencia de audio, proporciona una alta calidad de sonido.",price:150,rating:3.5},{_id:3,name:"Mochila para mascotas",image:["img/products/mochila.jpg","img/products/mochilaModal1.jpg","img/products/mochilaModal2.jpg","img/products/mochilaModal3.jpg"],description:"Ideal para visitas al veterinario, paseos, viajes, o para llevarla donde quieras!, Incluye varios orificios amplios para ventilación, además de contar con un acrílico que protege a tu mascota.",price:99,rating:4.5}];function je(){C.forEach(t=>{_e(t)})}function _e({_id:e,name:t,image:a,description:s}){return document.getElementById("productModal").innerHTML+=`
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
                    ${a.map((n,o)=>o>0&&o<=3?`<div class="carousel-item  ${o===1?"active":""}">
                          <img src="${n}" class="d-block w-100 img-thumbnail" alt="${t}" />
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
                <p>${s}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`}function H(e,t){localStorage.setItem(e,JSON.stringify(t))}function y(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}function Te(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function J(e){const t=sessionStorage.getItem(e);return t?JSON.parse(t):null}function pe(e){sessionStorage.removeItem(e)}const A=16,me=A,Ue=function(e){return btoa(String.fromCharCode(...new Uint8Array(e)))},Oe=function(e){return Uint8Array.from(atob(e),t=>t.charCodeAt(0))},Le=async function(e){const t=new TextEncoder;let a="AES-CBC",s=await window.crypto.subtle.importKey("raw",t.encode(e.password),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t.encode(e.sal.toString()),iterations:e.iterations,hash:e.hash},s,{name:a,length:e.longitude},!1,["encrypt","decrypt"])};async function se(e,t){const a=new TextEncoder,s=window.crypto.getRandomValues(new Uint8Array(16)),n=window.crypto.getRandomValues(new Uint8Array(16)),o=a.encode(t),c=Le({password:e,sal:s,iterations:1e5,longitude:256,hash:"SHA-256"}),d=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:n},await c,o);return Ue([...s,...n,...new Uint8Array(d)])}async function ke(e,t){const a=new TextDecoder,s=Oe(t),n=s.slice(0,A),o=s.slice(0+A,A+me),c=Le({password:e,sal:n,iterations:1e5,longitude:256,hash:"SHA-256"}),d=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:o},await c,s.slice(A+me));return a.decode(d)}let F;const Fe=new Uint8Array(16);function Ve(){if(!F&&(F=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!F))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return F(Fe)}const b=[];for(let e=0;e<256;++e)b.push((e+256).toString(16).slice(1));function ze(e,t=0){return b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]}const Je=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ve={randomUUID:Je};function Ce(e,t,a){if(ve.randomUUID&&!t&&!e)return ve.randomUUID();e=e||{};const s=e.random||(e.rng||Ve)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){a=a||0;for(let n=0;n<16;++n)t[a+n]=s[n];return t}return ze(s)}const Ke="modulepreload",Ge=function(e){return"/"+e},be={},ge=function(t,a,s){if(!a||a.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(a.map(o=>{if(o=Ge(o),o in be)return;be[o]=!0;const i=o.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!s)for(let l=n.length-1;l>=0;l--){const p=n[l];if(p.href===o&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":Ke,i||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),i)return new Promise((l,p)=>{r.addEventListener("load",l),r.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},Qe=new Intl.NumberFormat(void 0,{currency:"USD",style:"currency"});function k(e){return Qe.format(e)}function We(e){return new Date(e).toLocaleDateString("es-ES",{weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}function Ye(){document.querySelector("#loaderSection").setAttribute("style","visibility:hidden; opacity:0;")}function Ze(){return document.getElementById("canvaCard").innerHTML+=`<div
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
    </div>`}Ze();const Xe=C;function et(e){ge(()=>import("./jspdf.es.min-14106dbf.js").then(t=>t.j),[]).then(t=>{ge(()=>import("./jspdf.plugin.autotable-bd47adeb.js").then(a=>a.j),["./assets/jspdf.plugin.autotable-bd47adeb.js","../lleago3/assets/_commonjsHelpers-23102255.js","../llego4/assets/jspdf.es.min-14106dbf.js"]).then(a=>{const s=t.default,n=a.default,o=new s;n(o,{html:`#my-table-${e}`}),o.save(`${e}.pdf`)})})}function tt(e){const t=document.querySelector("#divAccordion");e.purchase.reverse().map((a,s)=>{const n=document.createElement("h2");n.className="accordion-header",n.id="accordion"+s;const o=document.createElement("button");o.className="accordion-button",o.type="button",o.setAttribute("data-bs-toggle","collapse"),o.setAttribute("data-bs-target","#colpase"+s),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-controls","colpase"+s),o.innerText=We(a.date);const i=document.createElement("div");i.id="colpase"+s,i.className="accordion-collapse collapse show",i.setAttribute("aria-labelledby","accordion"+s);const c=document.createElement("div");c.className="accordion-body px-1";const d=document.createElement("span");d.className="fw-600",d.innerText="ID: "+a._id;const r=document.createElement("table");r.setAttribute("id",`my-table-${a._id}`),r.className="table table-sm table-bordered mt-2",r.innerHTML+=`
    <caption >List of users</caption>
    <thead>
       <tr>        
        <th scope="col">Producto</th>
        <th scope="col">P.U</th>
        <th scope="col">Subtotal</th>        
      </tr>
    </thead>       
    `;let l=0;for(let v=0;v<a.items.length;v++){const u=Xe.find(f=>f._id===a.items[v]._id);l+=a.items[v].quantity*u.price,r.innerHTML+=`          
        <tbody>
          <tr >            
            <td scope="row">
              <a href="#staticBackdrop${u._id}" data-bs-toggle="modal">
               ${u.name+" - x"+a.items[v].quantity}
              </a>
            </td>
            <td class="text-end">${u.price}</td>
            <td class="text-end">${a.items[v].quantity*u.price}</td>
          </tr>    
        </tbody>`}r.innerHTML+=`
      <tfoot>
        <tr class="text-end"> 
          <td></td>           
          <td class="fw-bolder">Total: </td>
          <td>${k(l)}</td>
        </tr>   
      </tfoot>`;const p=document.createElement("button");p.className="",p.type="button",p.setAttribute("id",`btn-download-${a._id}`),p.innerText="Descargar factura",p.addEventListener("click",()=>{et(a._id)}),n.append(o),c.append(d,r,p),i.append(c),t.append(n),t.append(i)})}const h=e=>document.createElement(e),fe=document.querySelector("#accordionItems"),at=y("users");function ie(e){fe.innerHTML="";const t=h("div");t.id="divAccordion";const a=h("div");a.className="card mb-2";const s=h("div");s.className="card-header d-flex flex-row justify-content-between";const n=h("p");n.innerText="Hola, "+e.username;const o=h("a");o.href="#",o.innerText="Cerrar sesión",o.addEventListener("click",v=>{v.preventDefault(),pe("user"),location.reload()});const i=h("ul");i.className="list-group list-group-flush";const c=h("li");c.className="list-group-item",c.innerText=e.email;const d=h("li");d.className="list-group-item d-flex flex-row justify-content-between";const r=h("p");r.innerText="Compras realizadas: "+e.purchase.length;const l=h("button");l.type="button",l.className="btn btn-danger icon-cart",l.title="Eliminar cuenta";const p=h("i");p.className="fas fa-trash-alt",l.append(p),l.addEventListener("click",()=>{if(confirm("¿Quieres borrar este perfil y sus datos?")){let v=at.filter(u=>u.email!==e.email);H("users",v),pe("user"),location.reload()}return null}),d.append(r,l),s.append(n,o),a.append(s),a.append(i),i.append(c,d),t.append(a),fe.append(t),e.purchase.length>0&&tt(e)}function x(e,t,a={}){const s=document.createElement("div");s.classList.add("toast-container"),document.body.appendChild(s);const n=document.createElement("div");n.classList.add("toast"),n.setAttribute("role","alert"),n.setAttribute("aria-live","assertive"),n.setAttribute("aria-atomic","true"),n.innerHTML=`
    <div class="toast-header">
      <strong class="me-auto">${e}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">      
      </button>
    </div>
    <div class="toast-body">${t}</div>
  `,s.appendChild(n);const o=new CustomEvent("show.bs.toast",{detail:{toast:n}});a.delay&&setTimeout(()=>{n.classList.add("show"),document.dispatchEvent(o),setTimeout(()=>{n.classList.remove("show"),document.dispatchEvent(new CustomEvent("hidden.bs.toast",{detail:{toast:n}})),document.body.removeChild(s)},a.delay)},0)}const st={delay:3e3},nt=document.querySelector("#nav-profile-tab");async function ot(){const e=y("carrito"),t=J("user"),a=y("users");t.purchase.push({_id:Ce(),date:new Date,items:e}),Te("user",t),nt.click();const s=await ke(t.email,t._id),n=await se(s,JSON.stringify({email:t.email,username:t.username,_id:t._id,purchase:t.purchase})),o=a.map(i=>i.email===t.email?{...i,user:n}:i);it(o),x("✅ Éxito",`¡Gracias por comprar con nosotros, ${a[0].email}!`,st),ie(t)}function it(e){const t=document.querySelectorAll(".custom-cart-button");H("users",e),H("carrito",[]),K(),t.forEach(a=>{const s=a.id.replace("addToCartButton","");a.innerHTML=`Añadir <i id="icon${s}" class="fa-solid fa-shopping-cart"></i>`,a.removeAttribute("disabled")})}function $e(e){const t=[];for(let a=1;a<=5;a++)e>=a?t.push("fas fa-star"):e>=a-.5?t.push("fas fa-star-half-alt"):t.push("far fa-star");return t.map(a=>`<i class="${a}"></i>`).join("")}const rt=C,X=e=>document.querySelector(e);function Ne(e){const t=e.toLowerCase().split(" ");return rt.filter(a=>{const s=a.name.toLowerCase();return t.some(n=>s.includes(n))})}function he(){const e=X("#cardSearch"),t=X("#buscar"),a=X("#searchResultsShadow");return()=>{e.remove(),t.removeAttribute("disabled"),t.value="",a.className="d-none"}}const E=e=>document.querySelector(e),V=e=>document.createElement(e);function ct(){const e=E("#searchResultsShadow"),t=V("div");t.className="overflow-auto",t.id="cardSearch";const a=V("div");a.className="card-header d-flex flex-row";const s=V("div");s.className="card-body",document.addEventListener("input",i),e.className="d-none";const n=E("#buscar");function o(){const d=E(".navbar").offsetHeight;t.style.maxHeight=`calc(100vh - ${d}px)`}o();function i(c){const d=E("#searchSection").offsetHeight,r=E("#search-results-container");if(c.target===n){const l=n.value.trim(),p=Ne(l);if(l==="")t.remove(),e.className="d-none";else{a.innerHTML="",s.innerHTML="",e.className="d-none",p.length===0?(a.innerHTML=`
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5 class="me-5">No se encontraron resultados</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`,he()):(e.className="search-result-shadow",a.innerHTML=`
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5>Resultado: ${p.length}</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`,p.forEach(u=>{const f=V("div");f.classList.add("result-item");const S=()=>{ce(u._id),ne("#addToCartButtonSearch",u._id)};f.innerHTML=`
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
                      <p>Precio: ${k(u.price)}</p>
                      <div>${$e(u.rating)}</div>
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
            `,s.appendChild(f),t.innerHTML="",t.appendChild(a),t.appendChild(s),r.innerHTML="",r.appendChild(t);const T=E(`#addToCartButtonSearch${u._id}`);T==null||T.addEventListener("click",S),ne("#addToCartButtonSearch",u._id)}));const v=E("#clearSearch");v==null||v.addEventListener("click",he())}}r.style.marginTop=10+d+"px",o()}}function dt(){return document.getElementById("headerContent").innerHTML+=`
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

`,ct()}dt();const U=e=>document.querySelector(e),g=e=>document.createElement(e),z=U("#cartContainer"),ye=U("#precioTotal"),M=U("#btnPay"),xe=U("#contadorCarrito"),lt=U("#loginRegisterModal"),ut={delay:5e3},pt=C;function mt(e){let t=0,a=0;e.length===0&&(z.innerHTML="",ye.innerText="DSS",M.innerText="Médios de pago",M.classList.add("disabled"),xe.innerText="0"),e.map(s=>{const n=pt.find(He=>He._id===s._id);a+=s.quantity,xe.innerText=a.toString();const o=g("div");o.className="d-flex align-items-center gap-2 mb-2";const i=g("a");i.href="#staticBackdrop"+n._id,i.setAttribute("data-bs-toggle","modal");const c=g("img");c.src=n.image[0],c.className="img-cart img-thumbnail";const d=g("div");d.className="d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";const r=g("div");r.className="me-auto";const l=g("div");l.innerText=n.name+" ",l.className="justify-content-start ";const p=g("span");p.className="text-muted quantity-cart",p.innerText="x "+s.quantity.toString();const v=g("div");v.className="text-muted price-cart",v.innerText=k(n.price).toString();const u=g("div");u.innerText=k(n.price*s.quantity).toString(),t+=n.price*s.quantity;const f=g("div");f.className="d-flex flex-wrap gap-1 col-12";const S=g("button");S.type="button",S.className="btn btn-outline-primary icon-cart",S.addEventListener("click",()=>{bt(s._id)});const T=g("i");T.className="fas fa-minus";const $=g("button");$.type="button",$.className="btn btn-danger icon-cart",$.addEventListener("click",()=>{confirm("Desea eliminar el producto: "+(n==null?void 0:n.name))&&(gt(s._id),ne("#addToCartButtonSearch",s._id))});const le=g("i");le.className="fas fa-trash-alt";const N=g("button");N.type="button",N.className="btn btn-outline-primary icon-cart",N.addEventListener("click",()=>{ce(s._id)});const ue=g("i");return ue.className="fas fa-plus",S.append(T),$.append(le),N.append(ue),s.quantity>1&&(l.append(p),f.append(S)),r.append(l),r.append(v),f.append($),f.append(N),d.append(r),d.append(u),d.append(f),i.append(c),o.append(i),o.append(d),ye.innerText="Total "+k(t).toString(),M.innerText="Pagar",M.classList.remove("disabled"),z==null?void 0:z.append(o)})}M.addEventListener("click",()=>{J("user")?ot():(lt.click(),x("⚠️ Registro o Ingreso ","Regístrese o inicie sesión para recibir su factura y gestionar sus pedidos.",ut))});let m=[];const re=e=>document.querySelector(e),vt=re("#cartContainer");function K(){m=y("carrito"),O(m),m.forEach(e=>{e!=null&&e._id?j(e._id,!0):j(e._id,!1)})}function ce(e){(m==null?void 0:m.find(t=>t._id===e))==null?m=[...m,{_id:e,quantity:1}]:m.map(t=>t._id===e?(t.quantity+=1,{...t,quantity:t.quantity}):t),O(m),j(e,!0)}function bt(e){var t;((t=m.find(a=>a._id===e))==null?void 0:t.quantity)===1?(m=m.filter(a=>a._id!==e),j(e,!1)):m.map(a=>a._id===e?(a.quantity-=1,{...a,quantity:a.quantity}):a),O(m)}function gt(e){m=m.filter(t=>t._id!==e),O(m),j(e,!1)}function j(e,t){const a=re("#addToCartButton"+e);t?(a.setAttribute("disabled",""),a.innerText="Añadido ✅"):(a.removeAttribute("disabled"),a.innerText="Añadir 🛒")}function O(e){vt.innerHTML="",mt(e),H("carrito",e)}function ne(e,t){O(m),m=y("carrito");const a=re(`${e+t}`);a!=null&&m!=null&&(a.removeAttribute("disabled"),a.innerText="Añadir 🛒",m.map(s=>{(s==null?void 0:s._id)===t&&(a.setAttribute("disabled",""),a.innerText="Añadido ✅")}))}function ft(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
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
      </div>`}function ht(e){const{id:t,image:a,title:s,description:n}=e,o=document.getElementById(t);if(!o){console.error(`Element with id '${t}' not found.`);return}const i=`
    <div class="parallax-section">
        <div class="parallax-image" style="background-image: url('./img/banner/${a}');" ></div>
        <div class="parallax-content card" id="parallaxDetails">
            <h1>${s}</h1>
            <p>${n}</p>
            <button              
              class="btn btn-outline-dark btn-custom text-break custom-cart-button mt-4 col-10"
              id="verProductosButton" 
            >
              Ver productos
              <i class="fa-solid fa-eye"></i>
            </button>
        </div>
    </div>
  `;o.innerHTML=i;function c(){const r=document.querySelector(".nav-menu[href='#productPage']");r instanceof HTMLElement&&r.click()}const d=document.querySelector("#verProductosButton");d&&d.addEventListener("click",c)}function Ie({_id:e,name:t,image:a,price:s,rating:n}){const o=document.querySelector("#activateCart"),i=()=>{ce(e),o.click()},c=`<div class="d-flex align-items-stretch">
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
          <span class="fs-6">${k(s)}</span>
        </span>
        <div>${$e(n)}</div>
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
`,d=document.createElement("div");d.innerHTML=c;const r=d.querySelector(`#addToCartButton${e}`);return r==null||r.addEventListener("click",i),d.firstElementChild}const yt={id:"parallaxSection",image:"parallax_home.jpg",title:"Outlet DSStore",description:"Los mejores productos con grandes descuentos."};function we(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`<!-- Carousel -->
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
    `,xt(),ht(yt)}function xt(){const e=C,t=document.getElementById("productSection");e.forEach(a=>{const s=Ie(a);t==null||t.appendChild(s)})}function wt(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
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
    </section>`,St()}function St(){const e=C,t=document.getElementById("productSection");e.forEach(a=>{const s=Ie(a);t==null||t.appendChild(s)})}function Et(){const e=document.getElementById("main-content"),t=document.querySelectorAll(".nav-menu");function a(){we(),y("carrito")&&K()}function s(){ft()}function n(){wt(),y("carrito")&&K()}function o(c){e.innerHTML="",c()}function i(c){c.preventDefault();const d=c.currentTarget.getAttribute("href").substring(1);switch(t.forEach(r=>{r.classList.remove("selected")}),d){case"homePage":o(a);break;case"aboutPage":o(s);break;case"productPage":o(n);break}c.currentTarget.classList.add("selected")}t.forEach(c=>{c.addEventListener("click",i)}),t[0].classList.add("selected"),o(we)}const Tt=["img/about/boutique1.png","img/about/boutique2.png"];function Lt(){const e=[];for(const t of Tt){const a=new Image;a.src=t;const s=new Promise((n,o)=>{a.onload=()=>n(),a.onerror=o});e.push(s)}Promise.all(e)}const Pe={animation:!0,delay:4e3},q=document.getElementById("voice-search-button"),B=document.getElementById("buscar");let ee=!1;function kt(){if(ee)return;ee=!0;const e=new window.webkitSpeechRecognition||window.SpeechRecognition;e.continuous=!1,e.lang="es-ES";try{e.onresult=a=>{const s=a.results[0][0].transcript.toLowerCase().replace(/[.,]/g,"");B.value=s,Ct(),Ne(s).length===0?(te("No se encontraron resultados de: "+s),B.removeAttribute("disabled")):te("Estos son los resultados de: "+s)},e.onerror=a=>{let s="Se ha producido un error en el reconocimiento de voz.";a.error==="no-speech"?s="No se detectó ningún habla.":a.error==="not-allowed"?s="No se permitió el acceso al micrófono. Asegúrese de habilitar los permisos.":a.error==="audio-capture"&&(s="No se encontró ningún micrófono. Asegúrese de que haya un micrófono instalado"),te(s),x("❌ Error",s,Pe)},e.onend=()=>{t()},e.start()}catch(a){t(),console.log(a)}function t(){e.stop(),q.querySelector("p").innerHTML="Escuchar",q.classList.remove("recording"),B.removeAttribute("disabled"),ee=!1}}function Ct(){const e=new Event("input",{bubbles:!0});B.dispatchEvent(e)}function $t(){q.addEventListener("click",()=>{kt(),q.classList.add("recording"),q.querySelector("p").innerHTML="Escuchando...",B.setAttribute("disabled",""),x("⚠️ Búsqueda por voz activada","Hable para buscar un producto o categoría",Pe)})}function te(e){const t=new SpeechSynthesisUtterance(e);t.volume=1,t.rate=1,t.pitch=.9,t.lang="es-ES",window.speechSynthesis.speak(t)}function Nt(){return document.getElementById("loginModalSection").innerHTML+=`<div class="modal fade login-modal" id="loginModal">
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
  </div>`}Nt();const w=e=>document.querySelector(e),Ae=w("#registerForm"),Me=Ae.username,ae=w("#password"),I=w("#togglePassword"),qe=w("#loginButton"),Be=w("#registerButton"),de=w("#activeBtnLogin"),oe=w("#activeBtnRegister"),It=w("#modalTitle");function R(e){e.classList.add("visually-hidden")}function D(e){e.classList.remove("visually-hidden")}function Pt(){R(Me),R(Be),R(de),D(qe),D(oe)}function Re(e){It.innerText=e}I.addEventListener("click",function(){ae.type==="password"?(ae.type="text",I.classList.remove("fa-eye-slash"),I.classList.add("fa-eye")):(ae.type="password",I.classList.remove("fa-eye"),I.classList.add("fa-eye-slash"))});function At(){de.addEventListener("click",()=>{Pt(),Re("Iniciar sesión")})}function Mt(){oe.addEventListener("click",()=>{D(Me),D(Be),D(de),R(qe),R(oe),Re("Registro"),Ae.classList.add("was-validated")})}let _=[],qt=[],P;const W=e=>document.querySelector(e),Y=W("#registerForm"),Bt=Y.username,L=Y.email,G=Y.password,Rt=W("#loginButton"),Dt=W("#registerButton"),Ht=W("#formModalClose"),Q={delay:3e3};function Se(){_=y("users")}At();Mt();Dt.addEventListener("click",async e=>{if(e.preventDefault(),_.find(t=>t.email===L.value))x("⚠️ Registro de usuario",`El correo electrónico ${L.value} ya ha sido registrado previamente.`,Q);else if(Y.checkValidity()){const t=await se(L.value,G.value),a=await se(G.value,JSON.stringify({email:L.value,username:Bt.value,_id:t,purchase:qt}));jt(a)}});Rt.addEventListener("click",e=>{e.preventDefault();const t=_.find(a=>a.email===L.value);t?De(G.value,t.user):x("❌ Error","El correo electrónico y/o la contraseña son incorrectos",Q)});function jt(e){let t=Ce();_.push({_id:t,email:L.value,user:e}),H("users",_),De(G.value,e)}async function De(e,t){try{P=JSON.parse(await ke(e,t)),P&&(Te("user",P),x("✅ Sesión iniciada",`¡Bienvenido, ${P.username}!`,Q),Ht.click(),ie(P))}catch{x("❌ Error","El correo electrónico y/o la contraseña son incorrectos",Q)}}const Z=e=>document.querySelector(e),_t=Z("#activateProfile"),Ut=Z("#activateCart"),Ot=Z("#nav-home-tab"),Ee=Z("#nav-profile-tab");function Ft(){_t.addEventListener("click",()=>{Ee.click()}),Ee.addEventListener("click",()=>{y("users")&&Se(),J("user")&&ie(J("user"))}),Ut.addEventListener("click",()=>{Ot.click(),y("users")&&Se()})}document.addEventListener("DOMContentLoaded",()=>{Et(),y("carrito")&&K(),Ft()});window.onload=()=>{Ye(),Lt(),je(),$t()};export{ge as _};
