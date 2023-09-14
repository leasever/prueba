(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const D=[{_id:1,name:"Rascador T-4000",image:["img/products/scraper.jpg","img/products/scraperModal1.jpg","img/products/scraperModal2.jpg","img/products/scraperModal3.jpg"],description:"Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas.",price:89,rating:4},{_id:2,name:"Headphone Pro",image:["img/products/headphone.jpg","img/products/headphoneModal1.jpg","img/products/headphoneModal2.jpg","img/products/headphoneModal3.jpg"],description:"El Headphone Pro tiene bajos más potentes, mejora la experiencia de audio, proporciona una alta calidad de sonido.",price:150,rating:3.5},{_id:3,name:"Mochila Pet 7000",image:["img/products/mochila.jpg","img/products/mochilaModal1.jpg","img/products/mochilaModal2.jpg","img/products/mochilaModal3.jpg"],description:"Ideal para visitas al veterinario, paseos, viajes, o para llevarla donde quieras!, Incluye varios orificios amplios para ventilación, además de contar con un acrílico que protege a tu mascota.",price:99,rating:4.5}];function T(e,t){localStorage.setItem(e,JSON.stringify(t))}function b(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}function ee(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function I(e){const t=sessionStorage.getItem(e);return t?JSON.parse(t):null}function z(e){sessionStorage.removeItem(e)}const S=16,J=S,pe=function(e){return btoa(String.fromCharCode(...new Uint8Array(e)))},ve=function(e){return Uint8Array.from(atob(e),t=>t.charCodeAt(0))},te=async function(e){const t=new TextEncoder;let a="AES-CBC",n=await window.crypto.subtle.importKey("raw",t.encode(e.password),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t.encode(e.sal.toString()),iterations:e.iterations,hash:e.hash},n,{name:a,length:e.longitude},!1,["encrypt","decrypt"])};async function $(e,t){const a=new TextEncoder,n=window.crypto.getRandomValues(new Uint8Array(16)),s=window.crypto.getRandomValues(new Uint8Array(16)),o=a.encode(t),i=te({password:e,sal:n,iterations:1e5,longitude:256,hash:"SHA-256"}),r=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:s},await i,o);return pe([...n,...s,...new Uint8Array(r)])}async function ae(e,t){const a=new TextDecoder,n=ve(t),s=n.slice(0,S),o=n.slice(0+S,S+J),i=te({password:e,sal:s,iterations:1e5,longitude:256,hash:"SHA-256"}),r=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:o},await i,n.slice(S+J));return a.decode(r)}let N;const be=new Uint8Array(16);function ge(){if(!N&&(N=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!N))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return N(be)}const d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));function fe(e,t=0){return d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]}const ye=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),G={randomUUID:ye};function ne(e,t,a){if(G.randomUUID&&!t&&!e)return G.randomUUID();e=e||{};const n=e.random||(e.rng||ge)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){a=a||0;for(let s=0;s<16;++s)t[a+s]=n[s];return t}return fe(n)}const he=new Intl.NumberFormat(void 0,{currency:"USD",style:"currency"});function k(e){return he.format(e)}function xe(){return document.getElementById("canvaCard").innerHTML+=`<div
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
    </div>`}xe();const Ee=D;function we(e){const t=document.querySelector("#divAccordion");e.purchase.reverse().map((a,n)=>{const s=document.createElement("h2");s.className="accordion-header",s.id="accordion"+n;const o=document.createElement("button");o.className="accordion-button",o.type="button",o.setAttribute("data-bs-toggle","collapse"),o.setAttribute("data-bs-target","#colpase"+n),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-controls","colpase"+n);const c=new Date(a.date).toLocaleDateString("es-ES",{weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"});o.innerText=c;const i=document.createElement("div");i.id="colpase"+n,i.className="accordion-collapse collapse show",i.setAttribute("aria-labelledby","accordion"+n);const r=document.createElement("div");r.className="accordion-body px-1";const m=document.createElement("span");m.className="fw-600",m.innerText="ID: "+a._id;const l=document.createElement("table");l.className="table table-sm table-bordered mt-2",l.innerHTML+=`
    <thead>
       <tr>        
        <th scope="col">Producto</th>
        <th scope="col">P.U</th>
        <th scope="col">Subtotal</th>        
      </tr>
    </thead>       
    `;let g=0;for(let p=0;p<a.items.length;p++){const v=Ee.find(f=>f._id===a.items[p]._id);g+=a.items[p].quantity*v.price,l.innerHTML+=`          
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
        </tbody>`}l.innerHTML+=`
      <tfoot>
        <tr class="text-end"> 
          <td></td>           
          <td class="fw-bolder">Total: </td>
          <td>${k(g)}</td>
        </tr>   
      </tfoot>`,s.append(o),r.append(m,l),i.append(r),t.append(s),t.append(i)})}const K=document.querySelector("#accordionItems"),Se=b("users");function j(e){K.innerHTML="";const t=document.createElement("div");t.id="divAccordion";const a=document.createElement("div");a.className="card mb-2";const n=document.createElement("div");n.className="card-header d-flex flex-row justify-content-between";const s=document.createElement("p");s.innerText="Hola, "+e.username;const o=document.createElement("a");o.href="#",o.innerText="Cerrar sesión",o.addEventListener("click",p=>{p.preventDefault(),z("user"),location.reload()});const c=document.createElement("ul");c.className="list-group list-group-flush";const i=document.createElement("li");i.className="list-group-item",i.innerText=e.email;const r=document.createElement("li");r.className="list-group-item d-flex flex-row justify-content-between";const m=document.createElement("p");m.innerText="Compras realizadas: "+e.purchase.length;const l=document.createElement("button");l.type="button",l.className="btn btn-danger icon-cart",l.title="Eliminar cuenta";const g=document.createElement("i");g.className="fas fa-trash-alt",l.append(g),l.addEventListener("click",()=>{if(confirm("¿Quieres borrar este perfil y sus datos?")){let p=Se.filter(v=>v.email!==e.email);T("users",p),z("user"),location.reload()}return null}),r.append(m,l),n.append(s,o),a.append(n),a.append(c),c.append(i,r),t.append(a),K.append(t),e.purchase.length>0&&we(e)}const Le=document.querySelector("#nav-profile-tab");async function ke(){const e=b("carrito"),t=I("user"),a=b("users");t.purchase.push({_id:ne(),date:new Date,items:e}),ee("user",t),Le.click();const n=await ae(t.email,t._id),s=await $(n,JSON.stringify({email:t.email,username:t.username,_id:t._id,purchase:t.purchase})),o=a.map(c=>c.email===t.email?{...c,user:s}:c);Te(o),alert("Gracias por su compra "+t.username),j(t)}function Te(e){const t=document.querySelectorAll(".custom-cart-button");T("users",e),T("carrito",[]),M(),t.forEach(a=>{const n=a.id.replace("addToCartButton","");a.innerHTML=`Añadir <i id="icon${n}" class="fa-solid fa-shopping-cart"></i>`})}function qe(){return document.getElementById("headerContent").innerHTML+=`<div class="shadow-sm header-stiky" id="myHeader">
        <div class="container-xxl px-4">
          <nav class="navbar navbar-expand-md navbar-light">
            <div class="main-logo"></div>

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
                  <a
                    class="nav-link nav-menu active"
                    aria-current="page"
                    href="#homePage"
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
              <form class="d-flex col-md-5">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Buscar..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    id="buscar"
                    required
                  />
                  <button
                    class="btn btn-outline-secondary btn-custom"
                    type="submit"
                    id="button-addon2"
                    aria-label="Search"
                  >
                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                  </button>
                </div>
              </form>
              <hr class="dropdown-divider" />
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
      </div>`}qe();const C=document.querySelector("#cartContainer"),Q=document.querySelector("#precioTotal"),L=document.querySelector("#btnPay"),W=document.querySelector("#contadorCarrito"),Ne=document.querySelector("#loginRegisterModal"),Ce=D;function Ie(e){let t=0,a=0;e.length===0&&(C.innerHTML="",Q.innerText="DSS",L.innerText="Médios de pago",L.classList.add("disabled"),W.innerText="0"),e.map(n=>{const s=Ce.find(me=>me._id===n._id);a+=n.quantity,W.innerText=a.toString();const o=document.createElement("div");o.className="d-flex align-items-center gap-2 mb-2";const c=document.createElement("a");c.href="#staticBackdrop"+s._id,c.setAttribute("data-bs-toggle","modal");const i=document.createElement("img");i.src=s.image[0],i.className="img-cart img-thumbnail";const r=document.createElement("div");r.className="d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";const m=document.createElement("div");m.className="me-auto";const l=document.createElement("div");l.innerText=s.name+" ",l.className="justify-content-start ";const g=document.createElement("span");g.className="text-muted quantity-cart",g.innerText="x "+n.quantity.toString();const p=document.createElement("div");p.className="text-muted price-cart",p.innerText=k(s.price).toString();const v=document.createElement("div");v.innerText=k(s.price*n.quantity).toString(),t+=s.price*n.quantity;const f=document.createElement("div");f.className="d-flex flex-wrap gap-1 col-12";const h=document.createElement("button");h.type="button",h.className="btn btn-outline-primary icon-cart",h.addEventListener("click",()=>{Pe(n._id)});const _=document.createElement("i");_.className="fas fa-minus";const x=document.createElement("button");x.type="button",x.className="btn btn-danger icon-cart",x.addEventListener("click",()=>{confirm("Desea eliminar el producto: "+(s==null?void 0:s.name))&&De(n._id)});const F=document.createElement("i");F.className="fas fa-trash-alt";const E=document.createElement("button");E.type="button",E.className="btn btn-outline-primary icon-cart",E.addEventListener("click",()=>{se(n._id)});const V=document.createElement("i");return V.className="fas fa-plus",h.append(_),x.append(F),E.append(V),n.quantity>1&&(l.append(g),f.append(h)),m.append(l),m.append(p),f.append(x),f.append(E),r.append(m),r.append(v),r.append(f),c.append(i),o.append(c),o.append(r),Q.innerText="Total "+k(t).toString(),L.innerText="Pagar",L.classList.remove("disabled"),C==null?void 0:C.append(o)})}L.addEventListener("click",()=>{I("user")?ke():(alert("Registrese o inicie sesión para completar la venta"),Ne.click())});let u=[];const Me=document.querySelector("#cartContainer");function M(){u=b("carrito"),B(u),u.forEach(e=>{e!=null&&e._id&&A(e._id,!0)})}function se(e){u.find(t=>t._id===e)==null?u=[...u,{_id:e,quantity:1}]:u.map(t=>t._id===e?(t.quantity+=1,{...t,quantity:t.quantity}):t),B(u),A(e,!0)}function Pe(e){var t;((t=u.find(a=>a._id===e))==null?void 0:t.quantity)===1?(u=u.filter(a=>a._id!==e),A(e,!1)):u.map(a=>a._id===e?(a.quantity-=1,{...a,quantity:a.quantity}):a),B(u)}function De(e){u=u.filter(t=>t._id!==e),B(u),A(e,!1)}function A(e,t){const a=document.querySelector("#icon"+e);t?a.className="fas fa-check-circle ms-1":a.className="fa-solid fa-shopping-cart"}function B(e){Me.innerHTML="",Ie(e),T("carrito",e)}function Ae(){return window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("main-content").innerHTML+=`
  <div id="about">
        <section class="about-us py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-12 text-center">
                <img
                  src="img/about/boutique1.png"
                  alt="Imagen de Nosotros"
                  class="img-fluid rounded-circle mb-4 w-75"
                  loading="lazy"
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
                  loading="eagler"
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
      </div>`}function Be(e){const t=[];for(let a=1;a<=5;a++)e>=a?t.push("fas fa-star"):e>=a-.5?t.push("fas fa-star-half-alt"):t.push("far fa-star");return t.map(a=>`<i class="${a}"></i>`).join("")}function oe({_id:e,name:t,image:a,price:n,rating:s}){const o=document.querySelector("#activateCart"),c=()=>{se(e),o.click()},i=`
    <div class="col">
      <div class="card">
        <a href="#staticBackdrop${e}" data-bs-toggle="modal">
          <img src="${a[0]}" class="card-img-top" alt="${t}" />
        </a>
        <div class="card-body">
          <span class="card-title d-flex justify-content-between bgn fs-3 mb-2">
            ${t}
            <span class="fs-6">${k(n)}</span>
          </span>
          <div>${Be(s)}</div>
          <div class="d-grid col-6 mx-auto mb-3">
            <button class="btn btn-outline-dark btn-custom text-break custom-cart-button" id="addToCartButton${e}">
              Añadir 
              <i id="icon${e}" class="fa-solid fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,r=document.createElement("div");r.innerHTML=i;const m=r.querySelector(`#addToCartButton${e}`);return m==null||m.addEventListener("click",c),r.firstElementChild}function ie({_id:e,name:t,image:a,description:n}){return document.getElementById("productModal").innerHTML+=`
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
                          <img src="${s}" class="d-block w-100 img-thumbnail" alt="${t}">
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
  </div>`}function Y(){return window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("main-content").innerHTML+=`<!-- Carousel -->
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
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 col-xl-10 m-auto justify-content-between" id="productSection">
            <!-- Aquí se mostrarán los productos -->
          </div>
        </div>
      </div>
    </section>`,Re()}function Re(){const e=D,t=document.getElementById("productSection");e.forEach(a=>{const n=oe(a);ie(a),t==null||t.appendChild(n)})}function $e(){return document.getElementById("main-content").innerHTML+=`
    <!-- Galery products -->
    <section>
      <div class="products" name="product-section" id="product-section">
        <div class="container-xxl p-3 my-3">
          <div class="d-flex product-title pb-4">
            <h1 class=" text-center m-auto text-break">NOVEDADES</h1>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 col-xl-10 m-auto justify-content-between" id="productSection">
            <!-- Aquí se mostrarán los productos -->
          </div>
        </div>
      </div>
    </section>`,je()}function je(){const e=D,t=document.getElementById("productSection");e.forEach(a=>{const n=oe(a);ie(a),t==null||t.appendChild(n)})}function He(){const e=document.getElementById("main-content"),t=document.querySelectorAll(".nav-menu");function a(){Y(),b("carrito")&&M()}function n(){Ae()}function s(){$e(),b("carrito")&&M()}function o(i){e.innerHTML="",i()}function c(i){switch(i.preventDefault(),i.currentTarget.getAttribute("href").substring(1)){case"homePage":o(a);break;case"aboutPage":o(n);break;case"productPage":o(s);break}}t.forEach(i=>{i.addEventListener("click",c)}),o(Y)}function Ue(){return document.getElementById("loginModalSection").innerHTML+=`<div class="modal fade login-modal" id="loginModal">
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
  </div>`}Ue();const H=document.querySelector("#registerForm"),ce=H.username,re=document.querySelector("#loginButton"),le=document.querySelector("#registerButton"),U=document.querySelector("#activeBtnLogin"),O=document.querySelector("#activeBtnRegister"),de=document.querySelector("#modalTitle");function Oe(){U.addEventListener("click",Fe)}function _e(){O.addEventListener("click",Ve)}function Fe(){ce.classList.add("visually-hidden"),le.classList.add("visually-hidden"),U.classList.add("visually-hidden"),re.classList.remove("visually-hidden"),O.classList.remove("visually-hidden"),de.innerText="Iniciar sesión",H.classList.remove("was-validated")}function Ve(){ce.classList.remove("visually-hidden"),le.classList.remove("visually-hidden"),U.classList.remove("visually-hidden"),re.classList.add("visually-hidden"),O.classList.add("visually-hidden"),de.innerText="Registro",H.classList.add("was-validated")}let q=[],ze=[],w;const R=document.querySelector("#registerForm"),Je=R.username,y=R.email,P=R.password,Ge=document.querySelector("#loginButton"),Ke=document.querySelector("#registerButton"),Qe=document.querySelector("#formModalClose");function Z(){q=b("users")}Oe();_e();Ke.addEventListener("click",async e=>{if(e.preventDefault(),q.find(t=>t.email===y.value))alert("La cuenta ya está registrada");else if(R.checkValidity()){const t=await $(y.value,P.value),a=await $(P.value,JSON.stringify({email:y.value,username:Je.value,_id:t,purchase:ze}));We(a)}});Ge.addEventListener("click",e=>{e.preventDefault();const t=q.find(a=>a.email===y.value);t?ue(P.value,t.user):alert(y.value+" no registrada")});function We(e){let t=ne();q.push({_id:t,email:y.value,user:e}),T("users",q),ue(P.value,e)}async function ue(e,t){try{w=JSON.parse(await ae(e,t)),w&&(ee("user",w),alert("Bienvenido "+w.username),Qe.click(),j(w))}catch{alert("Usuario y/o contraseña incorrectas")}}const Ye=document.querySelector("#activateProfile"),Ze=document.querySelector("#activateCart"),Xe=document.querySelector("#nav-home-tab"),X=document.querySelector("#nav-profile-tab");function et(){Ye.addEventListener("click",()=>{X.click()}),X.addEventListener("click",()=>{b("users")&&Z(),I("user")&&j(I("user"))}),Ze.addEventListener("click",()=>{Xe.click(),b("users")&&Z()})}const tt=document.querySelector("#loaderSection");document.addEventListener("DOMContentLoaded",()=>{He(),b("carrito")&&M(),et()});window.onload=()=>{tt.setAttribute("style","visibility:hidden; opacity:0;")};
