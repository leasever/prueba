(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const C=[{_id:1,name:"Rascador T-4000",image:["img/products/scraper.jpg","img/products/scraperModal1.jpg","img/products/scraperModal2.jpg","img/products/scraperModal3.jpg"],description:"Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas.",price:89,rating:4},{_id:2,name:"Headphone Pro",image:["img/products/headphone.jpg","img/products/headphoneModal1.jpg","img/products/headphoneModal2.jpg","img/products/headphoneModal3.jpg"],description:"El Headphone Pro tiene bajos más potentes, mejora la experiencia de audio, proporciona una alta calidad de sonido.",price:150,rating:3.5},{_id:3,name:"Mochila Pet 7000",image:["img/products/mochila.jpg","img/products/mochilaModal1.jpg","img/products/mochilaModal2.jpg","img/products/mochilaModal3.jpg"],description:"Ideal para visitas al veterinario, paseos, viajes, o para llevarla donde quieras!, Incluye varios orificios amplios para ventilación, además de contar con un acrílico que protege a tu mascota.",price:99,rating:4.5}];function me(){C.forEach(t=>{pe(t)})}function pe({_id:e,name:t,image:a,description:n}){return document.getElementById("productModal").innerHTML+=`
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
  </div>`}function T(e,t){localStorage.setItem(e,JSON.stringify(t))}function f(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}function ee(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function M(e){const t=sessionStorage.getItem(e);return t?JSON.parse(t):null}function _(e){sessionStorage.removeItem(e)}const E=16,G=E,ve=function(e){return btoa(String.fromCharCode(...new Uint8Array(e)))},ge=function(e){return Uint8Array.from(atob(e),t=>t.charCodeAt(0))},te=async function(e){const t=new TextEncoder;let a="AES-CBC",n=await window.crypto.subtle.importKey("raw",t.encode(e.password),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t.encode(e.sal.toString()),iterations:e.iterations,hash:e.hash},n,{name:a,length:e.longitude},!1,["encrypt","decrypt"])};async function H(e,t){const a=new TextEncoder,n=window.crypto.getRandomValues(new Uint8Array(16)),o=window.crypto.getRandomValues(new Uint8Array(16)),s=a.encode(t),c=te({password:e,sal:n,iterations:1e5,longitude:256,hash:"SHA-256"}),l=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:o},await c,s);return ve([...n,...o,...new Uint8Array(l)])}async function ae(e,t){const a=new TextDecoder,n=ge(t),o=n.slice(0,E),s=n.slice(0+E,E+G),c=te({password:e,sal:o,iterations:1e5,longitude:256,hash:"SHA-256"}),l=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:s},await c,n.slice(E+G));return a.decode(l)}let N;const be=new Uint8Array(16);function fe(){if(!N&&(N=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!N))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return N(be)}const v=[];for(let e=0;e<256;++e)v.push((e+256).toString(16).slice(1));function ye(e,t=0){return v[e[t+0]]+v[e[t+1]]+v[e[t+2]]+v[e[t+3]]+"-"+v[e[t+4]]+v[e[t+5]]+"-"+v[e[t+6]]+v[e[t+7]]+"-"+v[e[t+8]]+v[e[t+9]]+"-"+v[e[t+10]]+v[e[t+11]]+v[e[t+12]]+v[e[t+13]]+v[e[t+14]]+v[e[t+15]]}const he=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),K={randomUUID:he};function ne(e,t,a){if(K.randomUUID&&!t&&!e)return K.randomUUID();e=e||{};const n=e.random||(e.rng||fe)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=n[o];return t}return ye(n)}const Se=new Intl.NumberFormat(void 0,{currency:"USD",style:"currency"});function L(e){return Se.format(e)}function we(){return document.getElementById("canvaCard").innerHTML+=`<div
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
    </div>`}we();const xe=C;function Ee(e){const t=document.querySelector("#divAccordion");e.purchase.reverse().map((a,n)=>{const o=document.createElement("h2");o.className="accordion-header",o.id="accordion"+n;const s=document.createElement("button");s.className="accordion-button",s.type="button",s.setAttribute("data-bs-toggle","collapse"),s.setAttribute("data-bs-target","#colpase"+n),s.setAttribute("aria-expanded","true"),s.setAttribute("aria-controls","colpase"+n);const i=new Date(a.date).toLocaleDateString("es-ES",{weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"});s.innerText=i;const c=document.createElement("div");c.id="colpase"+n,c.className="accordion-collapse collapse show",c.setAttribute("aria-labelledby","accordion"+n);const l=document.createElement("div");l.className="accordion-body px-1";const m=document.createElement("span");m.className="fw-600",m.innerText="ID: "+a._id;const d=document.createElement("table");d.className="table table-sm table-bordered mt-2",d.innerHTML+=`
    <thead>
       <tr>        
        <th scope="col">Producto</th>
        <th scope="col">P.U</th>
        <th scope="col">Subtotal</th>        
      </tr>
    </thead>       
    `;let b=0;for(let r=0;r<a.items.length;r++){const u=xe.find(p=>p._id===a.items[r]._id);b+=a.items[r].quantity*u.price,d.innerHTML+=`          
        <tbody>
          <tr >            
            <td scope="row">
              <a href="#staticBackdrop${u._id}" data-bs-toggle="modal">
               ${u.name+" - x"+a.items[r].quantity}
              </a>
            </td>
            <td class="text-end">${u.price}</td>
            <td class="text-end">${a.items[r].quantity*u.price}</td>
          </tr>    
        </tbody>`}d.innerHTML+=`
      <tfoot>
        <tr class="text-end"> 
          <td></td>           
          <td class="fw-bolder">Total: </td>
          <td>${L(b)}</td>
        </tr>   
      </tfoot>`,o.append(s),l.append(m,d),c.append(l),t.append(o),t.append(c)})}const J=document.querySelector("#accordionItems"),ke=f("users");function $(e){J.innerHTML="";const t=document.createElement("div");t.id="divAccordion";const a=document.createElement("div");a.className="card mb-2";const n=document.createElement("div");n.className="card-header d-flex flex-row justify-content-between";const o=document.createElement("p");o.innerText="Hola, "+e.username;const s=document.createElement("a");s.href="#",s.innerText="Cerrar sesión",s.addEventListener("click",r=>{r.preventDefault(),_("user"),location.reload()});const i=document.createElement("ul");i.className="list-group list-group-flush";const c=document.createElement("li");c.className="list-group-item",c.innerText=e.email;const l=document.createElement("li");l.className="list-group-item d-flex flex-row justify-content-between";const m=document.createElement("p");m.innerText="Compras realizadas: "+e.purchase.length;const d=document.createElement("button");d.type="button",d.className="btn btn-danger icon-cart",d.title="Eliminar cuenta";const b=document.createElement("i");b.className="fas fa-trash-alt",d.append(b),d.addEventListener("click",()=>{if(confirm("¿Quieres borrar este perfil y sus datos?")){let r=ke.filter(u=>u.email!==e.email);T("users",r),_("user"),location.reload()}return null}),l.append(m,d),n.append(o,s),a.append(n),a.append(i),i.append(c,l),t.append(a),J.append(t),e.purchase.length>0&&Ee(e)}const Le=document.querySelector("#nav-profile-tab");async function Te(){const e=f("carrito"),t=M("user"),a=f("users");t.purchase.push({_id:ne(),date:new Date,items:e}),ee("user",t),Le.click();const n=await ae(t.email,t._id),o=await H(n,JSON.stringify({email:t.email,username:t.username,_id:t._id,purchase:t.purchase})),s=a.map(i=>i.email===t.email?{...i,user:o}:i);qe(s),alert("Gracias por su compra "+t.username),$(t)}function qe(e){const t=document.querySelectorAll(".custom-cart-button");T("users",e),T("carrito",[]),P(),t.forEach(a=>{const n=a.id.replace("addToCartButton","");a.innerHTML=`Añadir <i id="icon${n}" class="fa-solid fa-shopping-cart"></i>`})}function Ce(){return document.getElementById("headerContent").innerHTML+=`<div class="shadow-sm header-stiky" id="myHeader">
        <div class="container-xxl px-4">
          <nav class="navbar navbar-expand-md navbar-light">
            <div class="main-logo"  >
              <img 
              src="img/logo.png" 
              alt="Logo dss"
              loading="eager"/>
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
      </div>`}Ce();const I=document.querySelector("#cartContainer"),Q=document.querySelector("#precioTotal"),k=document.querySelector("#btnPay"),W=document.querySelector("#contadorCarrito"),Ne=document.querySelector("#loginRegisterModal"),Ie=C;function Me(e){let t=0,a=0;e.length===0&&(I.innerHTML="",Q.innerText="DSS",k.innerText="Médios de pago",k.classList.add("disabled"),W.innerText="0"),e.map(n=>{const o=Ie.find(ue=>ue._id===n._id);a+=n.quantity,W.innerText=a.toString();const s=document.createElement("div");s.className="d-flex align-items-center gap-2 mb-2";const i=document.createElement("a");i.href="#staticBackdrop"+o._id,i.setAttribute("data-bs-toggle","modal");const c=document.createElement("img");c.src=o.image[0],c.className="img-cart img-thumbnail";const l=document.createElement("div");l.className="d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";const m=document.createElement("div");m.className="me-auto";const d=document.createElement("div");d.innerText=o.name+" ",d.className="justify-content-start ";const b=document.createElement("span");b.className="text-muted quantity-cart",b.innerText="x "+n.quantity.toString();const r=document.createElement("div");r.className="text-muted price-cart",r.innerText=L(o.price).toString();const u=document.createElement("div");u.innerText=L(o.price*n.quantity).toString(),t+=o.price*n.quantity;const p=document.createElement("div");p.className="d-flex flex-wrap gap-1 col-12";const h=document.createElement("button");h.type="button",h.className="btn btn-outline-primary icon-cart",h.addEventListener("click",()=>{Ae(n._id)});const F=document.createElement("i");F.className="fas fa-minus";const S=document.createElement("button");S.type="button",S.className="btn btn-danger icon-cart",S.addEventListener("click",()=>{confirm("Desea eliminar el producto: "+(o==null?void 0:o.name))&&Re(n._id)});const z=document.createElement("i");z.className="fas fa-trash-alt";const w=document.createElement("button");w.type="button",w.className="btn btn-outline-primary icon-cart",w.addEventListener("click",()=>{oe(n._id)});const V=document.createElement("i");return V.className="fas fa-plus",h.append(F),S.append(z),w.append(V),n.quantity>1&&(d.append(b),p.append(h)),m.append(d),m.append(r),p.append(S),p.append(w),l.append(m),l.append(u),l.append(p),i.append(c),s.append(i),s.append(l),Q.innerText="Total "+L(t).toString(),k.innerText="Pagar",k.classList.remove("disabled"),I==null?void 0:I.append(s)})}k.addEventListener("click",()=>{M("user")?Te():(alert("Registrese o inicie sesión para completar la venta"),Ne.click())});let g=[];const Pe=document.querySelector("#cartContainer");function P(){g=f("carrito"),B(g),g.forEach(e=>{e!=null&&e._id&&R(e._id,!0)})}function oe(e){g.find(t=>t._id===e)==null?g=[...g,{_id:e,quantity:1}]:g.map(t=>t._id===e?(t.quantity+=1,{...t,quantity:t.quantity}):t),B(g),R(e,!0)}function Ae(e){var t;((t=g.find(a=>a._id===e))==null?void 0:t.quantity)===1?(g=g.filter(a=>a._id!==e),R(e,!1)):g.map(a=>a._id===e?(a.quantity-=1,{...a,quantity:a.quantity}):a),B(g)}function Re(e){g=g.filter(t=>t._id!==e),B(g),R(e,!1)}function R(e,t){const a=document.querySelector("#icon"+e);t?a.className="fas fa-check-circle ms-1":a.className="fa-solid fa-shopping-cart"}function B(e){Pe.innerHTML="",Me(e),T("carrito",e)}function Be(){return window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("main-content").innerHTML+=`
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
      </div>`}function De(e){const t=[];for(let a=1;a<=5;a++)e>=a?t.push("fas fa-star"):e>=a-.5?t.push("fas fa-star-half-alt"):t.push("far fa-star");return t.map(a=>`<i class="${a}"></i>`).join("")}function se({_id:e,name:t,image:a,price:n,rating:o}){const s=document.querySelector("#activateCart"),i=()=>{oe(e),s.click()},c=`
    <div class="col">
      <div class="card">
        <a href="#staticBackdrop${e}" data-bs-toggle="modal">
          <img src="${a[0]}" class="card-img-top" alt="${t}" loading="lazy"/>
        </a>
        <div class="card-body">
          <span class="card-title d-flex justify-content-between bgn fs-3 mb-2">
            ${t}
            <span class="fs-6">${L(n)}</span>
          </span>
          <div>${De(o)}</div>
          <div class="d-grid col-6 mx-auto mb-3">
            <button class="btn btn-outline-dark btn-custom text-break custom-cart-button" id="addToCartButton${e}">
              Añadir 
              <i id="icon${e}" class="fa-solid fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,l=document.createElement("div");l.innerHTML=c;const m=l.querySelector(`#addToCartButton${e}`);return m==null||m.addEventListener("click",i),l.firstElementChild}function Y(){return window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("main-content").innerHTML+=`<!-- Carousel -->
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
    </section>`,He()}function He(){const e=C,t=document.getElementById("productSection");e.forEach(a=>{const n=se(a);t==null||t.appendChild(n)})}function $e(){return window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("main-content").innerHTML+=`
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
    </section>`,je()}function je(){const e=C,t=document.getElementById("productSection");e.forEach(a=>{const n=se(a);t==null||t.appendChild(n)})}function Ue(){const e=document.getElementById("main-content"),t=document.querySelectorAll(".nav-menu");function a(){Y(),f("carrito")&&P()}function n(){Be()}function o(){$e(),f("carrito")&&P()}function s(c){e.innerHTML="",c()}function i(c){switch(c.preventDefault(),c.currentTarget.getAttribute("href").substring(1)){case"homePage":s(a);break;case"aboutPage":s(n);break;case"productPage":s(o);break}}t.forEach(c=>{c.addEventListener("click",i)}),s(Y)}const Oe=[{no:"16",name:"English",native:"English",code:"en"},{no:"1",name:"Afrikaans",native:"Afrikaans",code:"af"},{no:"2",name:"Albanian",native:"Shqip",code:"sq"},{no:"3",name:"Arabic",native:"عربي",code:"ar"},{no:"4",name:"Armenian",native:"Հայերէն",code:"hy"},{no:"5",name:"Azerbaijani",native:"آذربایجان دیلی",code:"az"},{no:"6",name:"Basque",native:"Euskara",code:"eu"},{no:"7",name:"Belarusian",native:"Беларуская",code:"be"},{no:"8",name:"Bulgarian",native:"Български",code:"bg"},{no:"9",name:"Catalan",native:"Català",code:"ca"},{no:"10",name:"Chinese (Simplified)",native:"中文简体",code:"zh-CN"},{no:"11",name:"Chinese (Traditional)",native:"中文繁體",code:"zh-TW"},{no:"12",name:"Croatian",native:"Hrvatski",code:"hr"},{no:"13",name:"Czech",native:"Čeština",code:"cs"},{no:"14",name:"Danish",native:"Dansk",code:"da"},{no:"15",name:"Dutch",native:"Nederlands",code:"nl"},{no:"17",name:"Estonian",native:"Eesti keel",code:"et"},{no:"18",name:"Filipino",native:"Filipino",code:"tl"},{no:"19",name:"Finnish",native:"Suomi",code:"fi"},{no:"20",name:"French",native:"Français",code:"fr"},{no:"21",name:"Galician",native:"Galego",code:"gl"},{no:"22",name:"Georgian",native:"ქართული",code:"ka"},{no:"23",name:"German",native:"Deutsch",code:"de"},{no:"24",name:"Greek",native:"Ελληνικά",code:"el"},{no:"25",name:"Haitian Creole",native:"Kreyòl ayisyen",code:"ht"},{no:"26",name:"Hebrew",native:"עברית",code:"iw"},{no:"27",name:"Hindi",native:"हिन्दी",code:"hi"},{no:"28",name:"Hungarian",native:"Magyar",code:"hu"},{no:"29",name:"Icelandic",native:"Íslenska",code:"is"},{no:"30",name:"Indonesian",native:"Bahasa Indonesia",code:"id"},{no:"31",name:"Irish",native:"Gaeilge",code:"ga"},{no:"32",name:"Italian",native:"Italiano",code:"it"},{no:"33",name:"Japanese",native:"日本語",code:"ja"},{no:"34",name:"Korean",native:"한국어",code:"ko"},{no:"35",name:"Latvian",native:"Latviešu",code:"lv"},{no:"36",name:"Lithuanian",native:"Lietuvių kalba",code:"lt"},{no:"37",name:"Macedonian",native:"Македонски",code:"mk"},{no:"38",name:"Malay",native:"Malay",code:"ms"},{no:"39",name:"Maltese",native:"Malti",code:"mt"},{no:"40",name:"Norwegian",native:"Norsk",code:"no"},{no:"41",name:"Persian",native:"فارسی",code:"fa"},{no:"42",name:"Polish",native:"Polski",code:"pl"},{no:"43",name:"Portuguese",native:"Português",code:"pt"},{no:"44",name:"Romanian",native:"Română",code:"ro"},{no:"45",name:"Russian",native:"Русский",code:"ru"},{no:"46",name:"Serbian",native:"Српски",code:"sr"},{no:"47",name:"Slovak",native:"Slovenčina",code:"sk"},{no:"48",name:"Slovenian",native:"Slovensko",code:"sl"},{no:"49",name:"Spanish",native:"Español",code:"es"},{no:"50",name:"Swahili",native:"Kiswahili",code:"sw"},{no:"51",name:"Swedish",native:"Svenska",code:"sv"},{no:"52",name:"Thai",native:"ไทย",code:"th"},{no:"53",name:"Turkish",native:"Türkçe",code:"tr"},{no:"54",name:"Ukrainian",native:"Українська",code:"uk"},{no:"55",name:"Urdu",native:"اردو",code:"ur"},{no:"56",name:"Vietnamese",native:"Tiếng Việt",code:"vi"},{no:"57",name:"Welsh",native:"Cymraeg",code:"cy"},{no:"58",name:"Yiddish",native:"ייִדיש",code:"yi"}];function Fe(){const e=document.querySelector(".record"),t=document.querySelector(".result"),a=document.querySelector(".download"),n=document.querySelector("#language"),o=document.querySelector(".clear");let s=window.SpeechRecognition||window.webkitSpeechRecognition,i,c=!1;function l(){Oe.forEach(r=>{const u=document.createElement("option");u.value=r.code,u.innerHTML=r.name,n.appendChild(u)})}l();function m(){try{i=new s,i.lang=n.value,i.interimResults=!0,e.classList.add("recording"),e.querySelector("p").innerHTML="Listening...",i.start(),i.onresult=r=>{const u=r.results[0][0].transcript;if(r.results[0].isFinal)t.innerHTML+=" "+u,t.querySelector("p").remove();else{if(!document.querySelector(".interim")){const p=document.createElement("p");p.classList.add("interim"),t.appendChild(p)}document.querySelector(".interim").innerHTML=" "+u}a.disabled=!1},i.onspeechend=()=>{m()},i.onerror=r=>{d(),r.error==="no-speech"?alert("No speech was detected. Stopping..."):r.error==="audio-capture"?alert("No microphone was found. Ensure that a microphone is installed."):r.error==="not-allowed"?alert("Permission to use microphone is blocked."):r.error==="aborted"?alert("Listening Stopped."):alert("Error occurred in recognition: "+r.error)}}catch(r){c=!1,console.log(r)}}e.addEventListener("click",()=>{c?d():(m(),c=!0)});function d(){i.stop(),e.querySelector("p").innerHTML="Start Listening",e.classList.remove("recording"),c=!1}function b(){const r=t.innerText,u="speech.txt",p=document.createElement("a");p.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(r)),p.setAttribute("download",u),p.style.display="none",document.body.appendChild(p),p.click(),document.body.removeChild(p)}a.addEventListener("click",b),o.addEventListener("click",()=>{t.innerHTML="",a.disabled=!0})}function ze(){return document.getElementById("loginModalSection").innerHTML+=`<div class="modal fade login-modal" id="loginModal">
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
  </div>`}ze();const j=document.querySelector("#registerForm"),ie=j.username,ce=document.querySelector("#loginButton"),re=document.querySelector("#registerButton"),U=document.querySelector("#activeBtnLogin"),O=document.querySelector("#activeBtnRegister"),le=document.querySelector("#modalTitle");function Ve(){U.addEventListener("click",Ge)}function _e(){O.addEventListener("click",Ke)}function Ge(){ie.classList.add("visually-hidden"),re.classList.add("visually-hidden"),U.classList.add("visually-hidden"),ce.classList.remove("visually-hidden"),O.classList.remove("visually-hidden"),le.innerText="Iniciar sesión",j.classList.remove("was-validated")}function Ke(){ie.classList.remove("visually-hidden"),re.classList.remove("visually-hidden"),U.classList.remove("visually-hidden"),ce.classList.add("visually-hidden"),O.classList.add("visually-hidden"),le.innerText="Registro",j.classList.add("was-validated")}let q=[],Je=[],x;const D=document.querySelector("#registerForm"),Qe=D.username,y=D.email,A=D.password,We=document.querySelector("#loginButton"),Ye=document.querySelector("#registerButton"),Ze=document.querySelector("#formModalClose");function Z(){q=f("users")}Ve();_e();Ye.addEventListener("click",async e=>{if(e.preventDefault(),q.find(t=>t.email===y.value))alert("La cuenta ya está registrada");else if(D.checkValidity()){const t=await H(y.value,A.value),a=await H(A.value,JSON.stringify({email:y.value,username:Qe.value,_id:t,purchase:Je}));Xe(a)}});We.addEventListener("click",e=>{e.preventDefault();const t=q.find(a=>a.email===y.value);t?de(A.value,t.user):alert(y.value+" no registrada")});function Xe(e){let t=ne();q.push({_id:t,email:y.value,user:e}),T("users",q),de(A.value,e)}async function de(e,t){try{x=JSON.parse(await ae(e,t)),x&&(ee("user",x),alert("Bienvenido "+x.username),Ze.click(),$(x))}catch{alert("Usuario y/o contraseña incorrectas")}}const et=document.querySelector("#activateProfile"),tt=document.querySelector("#activateCart"),at=document.querySelector("#nav-home-tab"),X=document.querySelector("#nav-profile-tab");function nt(){et.addEventListener("click",()=>{X.click()}),X.addEventListener("click",()=>{f("users")&&Z(),M("user")&&$(M("user"))}),tt.addEventListener("click",()=>{at.click(),f("users")&&Z()})}const ot=document.querySelector("#loaderSection");document.addEventListener("DOMContentLoaded",()=>{Ue(),f("carrito")&&P(),nt()});window.onload=()=>{ot.setAttribute("style","visibility:hidden; opacity:0;"),it(st).then(()=>{console.log("Todas las imágenes se han precargado correctamente.")}).catch(e=>{console.error("Error al precargar imágenes:",e)}),me(),Fe()};const st=["img/about/boutique1.png","img/about/boutique2.png"];function it(e){const t=[];for(const a of e){const n=new Image;n.src=a;const o=new Promise((s,i)=>{n.onload=s,n.onerror=i});t.push(o)}return Promise.all(t)}
