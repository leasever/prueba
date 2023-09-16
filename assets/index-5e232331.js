(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const w=[{_id:1,name:"Rascador para gatos",image:["img/products/scraper.jpg","img/products/scraperModal1.jpg","img/products/scraperModal2.jpg","img/products/scraperModal3.jpg"],description:"Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas.",price:89,rating:4},{_id:2,name:"Auriculares tipo vincha",image:["img/products/headphone.jpg","img/products/headphoneModal1.jpg","img/products/headphoneModal2.jpg","img/products/headphoneModal3.jpg"],description:"Los Auriculares tiene bajos más potentes, mejora la experiencia de audio, proporciona una alta calidad de sonido.",price:150,rating:3.5},{_id:3,name:"Mochila para mascotas",image:["img/products/mochila.jpg","img/products/mochilaModal1.jpg","img/products/mochilaModal2.jpg","img/products/mochilaModal3.jpg"],description:"Ideal para visitas al veterinario, paseos, viajes, o para llevarla donde quieras!, Incluye varios orificios amplios para ventilación, además de contar con un acrílico que protege a tu mascota.",price:99,rating:4.5}];function ye(){w.forEach(t=>{he(t)})}function he({_id:e,name:t,image:a,description:n}){return document.getElementById("productModal").innerHTML+=`
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
  </div>`}function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function b(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}function ie(e,t){sessionStorage.setItem(e,JSON.stringify(t))}function R(e){const t=sessionStorage.getItem(e);return t?JSON.parse(t):null}function Q(e){sessionStorage.removeItem(e)}const k=16,W=k,xe=function(e){return btoa(String.fromCharCode(...new Uint8Array(e)))},we=function(e){return Uint8Array.from(atob(e),t=>t.charCodeAt(0))},ce=async function(e){const t=new TextEncoder;let a="AES-CBC",n=await window.crypto.subtle.importKey("raw",t.encode(e.password),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t.encode(e.sal.toString()),iterations:e.iterations,hash:e.hash},n,{name:a,length:e.longitude},!1,["encrypt","decrypt"])};async function U(e,t){const a=new TextEncoder,n=window.crypto.getRandomValues(new Uint8Array(16)),o=window.crypto.getRandomValues(new Uint8Array(16)),s=a.encode(t),c=ce({password:e,sal:n,iterations:1e5,longitude:256,hash:"SHA-256"}),r=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:o},await c,s);return xe([...n,...o,...new Uint8Array(r)])}async function re(e,t){const a=new TextDecoder,n=we(t),o=n.slice(0,k),s=n.slice(0+k,k+W),c=ce({password:e,sal:o,iterations:1e5,longitude:256,hash:"SHA-256"}),r=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:s},await c,n.slice(k+W));return a.decode(r)}let M;const Ee=new Uint8Array(16);function Se(){if(!M&&(M=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!M))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return M(Ee)}const d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));function Le(e,t=0){return d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]}const Te=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Y={randomUUID:Te};function le(e,t,a){if(Y.randomUUID&&!t&&!e)return Y.randomUUID();e=e||{};const n=e.random||(e.rng||Se)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=n[o];return t}return Le(n)}const ke=new Intl.NumberFormat(void 0,{currency:"USD",style:"currency"});function h(e){return ke.format(e)}function qe(){return document.getElementById("canvaCard").innerHTML+=`<div
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
    </div>`}qe();const Ce=w;function Ie(e){const t=document.querySelector("#divAccordion");e.purchase.reverse().map((a,n)=>{const o=document.createElement("h2");o.className="accordion-header",o.id="accordion"+n;const s=document.createElement("button");s.className="accordion-button",s.type="button",s.setAttribute("data-bs-toggle","collapse"),s.setAttribute("data-bs-target","#colpase"+n),s.setAttribute("aria-expanded","true"),s.setAttribute("aria-controls","colpase"+n);const i=new Date(a.date).toLocaleDateString("es-ES",{weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"});s.innerText=i;const c=document.createElement("div");c.id="colpase"+n,c.className="accordion-collapse collapse show",c.setAttribute("aria-labelledby","accordion"+n);const r=document.createElement("div");r.className="accordion-body px-1";const m=document.createElement("span");m.className="fw-600",m.innerText="ID: "+a._id;const l=document.createElement("table");l.className="table table-sm table-bordered mt-2",l.innerHTML+=`
    <thead>
       <tr>        
        <th scope="col">Producto</th>
        <th scope="col">P.U</th>
        <th scope="col">Subtotal</th>        
      </tr>
    </thead>       
    `;let g=0;for(let p=0;p<a.items.length;p++){const v=Ce.find(f=>f._id===a.items[p]._id);g+=a.items[p].quantity*v.price,l.innerHTML+=`          
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
          <td>${h(g)}</td>
        </tr>   
      </tfoot>`,o.append(s),r.append(m,l),c.append(r),t.append(o),t.append(c)})}const Z=document.querySelector("#accordionItems"),Ne=b("users");function O(e){Z.innerHTML="";const t=document.createElement("div");t.id="divAccordion";const a=document.createElement("div");a.className="card mb-2";const n=document.createElement("div");n.className="card-header d-flex flex-row justify-content-between";const o=document.createElement("p");o.innerText="Hola, "+e.username;const s=document.createElement("a");s.href="#",s.innerText="Cerrar sesión",s.addEventListener("click",p=>{p.preventDefault(),Q("user"),location.reload()});const i=document.createElement("ul");i.className="list-group list-group-flush";const c=document.createElement("li");c.className="list-group-item",c.innerText=e.email;const r=document.createElement("li");r.className="list-group-item d-flex flex-row justify-content-between";const m=document.createElement("p");m.innerText="Compras realizadas: "+e.purchase.length;const l=document.createElement("button");l.type="button",l.className="btn btn-danger icon-cart",l.title="Eliminar cuenta";const g=document.createElement("i");g.className="fas fa-trash-alt",l.append(g),l.addEventListener("click",()=>{if(confirm("¿Quieres borrar este perfil y sus datos?")){let p=Ne.filter(v=>v.email!==e.email);I("users",p),Q("user"),location.reload()}return null}),r.append(m,l),n.append(o,s),a.append(n),a.append(i),i.append(c,r),t.append(a),Z.append(t),e.purchase.length>0&&Ie(e)}const Me=document.querySelector("#nav-profile-tab");async function Pe(){const e=b("carrito"),t=R("user"),a=b("users");t.purchase.push({_id:le(),date:new Date,items:e}),ie("user",t),Me.click();const n=await re(t.email,t._id),o=await U(n,JSON.stringify({email:t.email,username:t.username,_id:t._id,purchase:t.purchase})),s=a.map(i=>i.email===t.email?{...i,user:o}:i);Be(s),alert("Gracias por su compra "+t.username),O(t)}function Be(e){const t=document.querySelectorAll(".custom-cart-button");I("users",e),I("carrito",[]),A(),t.forEach(a=>{const n=a.id.replace("addToCartButton","");a.innerHTML=`Añadir <i id="icon${n}" class="fa-solid fa-shopping-cart"></i>`})}function Re(){return document.getElementById("headerContent").innerHTML+=`<div class="shadow-sm header-stiky" id="myHeader">
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
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <!-- Agregar el ícono de búsqueda por voz -->
                  
                  <button  type="button" class="btn record btn-outline-secondary btn-custom" id="voice-search-button">
                    <div class="icon">
                      <i class="fa-solid fa-microphone"></i>
                      <img src="img/bars.svg" alt="" />
                    </div>
                    <p>Escuchar</p>
                  </button>

                <!-- Botón de modal invisible -->
                  <button type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#resultsModal" id="modalButton">
                    Mostrar Modal
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
      </div>`}Re();const P=document.querySelector("#cartContainer"),X=document.querySelector("#precioTotal"),q=document.querySelector("#btnPay"),ee=document.querySelector("#contadorCarrito"),Ae=document.querySelector("#loginRegisterModal"),$e=w;function De(e){let t=0,a=0;e.length===0&&(P.innerHTML="",X.innerText="DSS",q.innerText="Médios de pago",q.classList.add("disabled"),ee.innerText="0"),e.map(n=>{const o=$e.find(fe=>fe._id===n._id);a+=n.quantity,ee.innerText=a.toString();const s=document.createElement("div");s.className="d-flex align-items-center gap-2 mb-2";const i=document.createElement("a");i.href="#staticBackdrop"+o._id,i.setAttribute("data-bs-toggle","modal");const c=document.createElement("img");c.src=o.image[0],c.className="img-cart img-thumbnail";const r=document.createElement("div");r.className="d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";const m=document.createElement("div");m.className="me-auto";const l=document.createElement("div");l.innerText=o.name+" ",l.className="justify-content-start ";const g=document.createElement("span");g.className="text-muted quantity-cart",g.innerText="x "+n.quantity.toString();const p=document.createElement("div");p.className="text-muted price-cart",p.innerText=h(o.price).toString();const v=document.createElement("div");v.innerText=h(o.price*n.quantity).toString(),t+=o.price*n.quantity;const f=document.createElement("div");f.className="d-flex flex-wrap gap-1 col-12";const E=document.createElement("button");E.type="button",E.className="btn btn-outline-primary icon-cart",E.addEventListener("click",()=>{He(n._id)});const J=document.createElement("i");J.className="fas fa-minus";const S=document.createElement("button");S.type="button",S.className="btn btn-danger icon-cart",S.addEventListener("click",()=>{confirm("Desea eliminar el producto: "+(o==null?void 0:o.name))&&Ue(n._id)});const G=document.createElement("i");G.className="fas fa-trash-alt";const L=document.createElement("button");L.type="button",L.className="btn btn-outline-primary icon-cart",L.addEventListener("click",()=>{_(n._id)});const K=document.createElement("i");return K.className="fas fa-plus",E.append(J),S.append(G),L.append(K),n.quantity>1&&(l.append(g),f.append(E)),m.append(l),m.append(p),f.append(S),f.append(L),r.append(m),r.append(v),r.append(f),i.append(c),s.append(i),s.append(r),X.innerText="Total "+h(t).toString(),q.innerText="Pagar",q.classList.remove("disabled"),P==null?void 0:P.append(s)})}q.addEventListener("click",()=>{R("user")?Pe():(alert("Registrese o inicie sesión para completar la venta"),Ae.click())});let u=[];const je=document.querySelector("#cartContainer");function A(){u=b("carrito"),j(u),u.forEach(e=>{e!=null&&e._id&&D(e._id,!0)})}function _(e){u.find(t=>t._id===e)==null?u=[...u,{_id:e,quantity:1}]:u.map(t=>t._id===e?(t.quantity+=1,{...t,quantity:t.quantity}):t),j(u),D(e,!0)}function He(e){var t;((t=u.find(a=>a._id===e))==null?void 0:t.quantity)===1?(u=u.filter(a=>a._id!==e),D(e,!1)):u.map(a=>a._id===e?(a.quantity-=1,{...a,quantity:a.quantity}):a),j(u)}function Ue(e){u=u.filter(t=>t._id!==e),j(u),D(e,!1)}function D(e,t){const a=document.querySelector("#icon"+e);t?a.className="fas fa-check-circle ms-1":a.className="fa-solid fa-shopping-cart"}function j(e){je.innerHTML="",De(e),I("carrito",e)}function Oe(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
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
      </div>`}function de(e){const t=[];for(let a=1;a<=5;a++)e>=a?t.push("fas fa-star"):e>=a-.5?t.push("fas fa-star-half-alt"):t.push("far fa-star");return t.map(a=>`<i class="${a}"></i>`).join("")}function ue({_id:e,name:t,image:a,price:n,rating:o}){const s=document.querySelector("#activateCart"),i=()=>{_(e),s.click()},c=`
    <div class="col">
      <div class="card">
        <a href="#staticBackdrop${e}" data-bs-toggle="modal">
          <img src="${a[0]}" class="card-img-top" alt="${t}" loading="lazy"/>
        </a>
        <div class="card-body">
          <span class="card-title d-flex justify-content-between bgn fs-3 mb-2">
            ${t}
            <span class="fs-6">${h(n)}</span>
          </span>
          <div>${de(o)}</div>
          <div class="d-grid col-6 mx-auto my-3">
            <button class="btn btn-outline-dark btn-custom text-break custom-cart-button" id="addToCartButton${e}">
              Añadir 
              <i id="icon${e}" class="fa-solid fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,r=document.createElement("div");r.innerHTML=c;const m=r.querySelector(`#addToCartButton${e}`);return m==null||m.addEventListener("click",i),r.firstElementChild}function te(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`<!-- Carousel -->
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
    </section>`,_e()}function _e(){const e=w,t=document.getElementById("productSection");e.forEach(a=>{const n=ue(a);t==null||t.appendChild(n)})}function Fe(){return window.scrollTo({top:0}),document.getElementById("main-content").innerHTML+=`
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
    </section>`,ze()}function ze(){const e=w,t=document.getElementById("productSection");e.forEach(a=>{const n=ue(a);t==null||t.appendChild(n)})}function Ve(){const e=document.getElementById("main-content"),t=document.querySelectorAll(".nav-menu");function a(){te(),b("carrito")&&A()}function n(){Oe()}function o(){Fe(),b("carrito")&&A()}function s(c){e.innerHTML="",c()}function i(c){switch(c.preventDefault(),c.currentTarget.getAttribute("href").substring(1)){case"homePage":s(a);break;case"aboutPage":s(n);break;case"productPage":s(o);break}}t.forEach(c=>{c.addEventListener("click",i)}),s(te)}const C=document.getElementById("voice-search-button"),ae=document.getElementById("exampleModalLabel");let B=!1,y=[];function ne(e){const t=document.getElementById("modalButton"),a=document.getElementById("modal-body");a.innerHTML="",e.length===0?a.innerHTML="<p>No se encontraron resultados.</p>":e.forEach(n=>{const o=document.createElement("div");o.classList.add("result-item");const s=()=>{_(n._id)};o.innerHTML=`
        <div class="row border-bottom mb-3 pb-3">
            <div class="col-12 col-sm-2 d-flex align-items-center justify-content-center mb-2 mb-sm-0">
                <img src="${n.image[0]}" class="card-img-top" alt="${n.name}" loading="lazy"/>
            </div>
            
            <div class="col-12 col-sm-10">
                <h5 class="card-title">${n.name}</h5>
                <div class="d-flex justify-content-between align-items-center">
                <div class="me-sm-3 mb-2 mb-sm-0">
                    <p>Precio: ${h(n.price)}</p>
                    <div>${de(n.rating)}</div>
                </div>
                <button class="btn btn-outline-dark btn-custom text-break custom-cart-button" id="addToCartButtonSearch${n._id}">
                    Añadir 
                    <i id="iconSearch${n._id}" class="fa-solid fa-shopping-cart"></i>
                    </button>
                </div>        
            </div>
            <div class="d-sm-flex justify-content-between align-items-center">
                <p>${n.description}</p>
            </div>  
        </div> `,a.appendChild(o);const i=document.querySelector(`#addToCartButtonSearch${n._id}`);i==null||i.addEventListener("click",s)}),t.click()}function Je(){if(!B)if(B=!0,y=[],ae.innerText="Resultados para:","webkitSpeechRecognition"in window){let e=function(){t.stop(),C.querySelector("p").innerHTML="Escuchar",C.classList.remove("recording"),B=!1};const t=new webkitSpeechRecognition;t.continuous=!1,t.lang="es-ES",t.onstart=()=>{y=[]},t.onresult=a=>{y=a.results[0][0].transcript.toLowerCase().replace(/[.,]/g,"").split(" "),ae.innerText=`Resultados para: ${y.join(" ")}`},t.onend=()=>{if(y.length===0)ne([]);else{const a=w.filter(n=>y.every(o=>n.name.toLowerCase().includes(o)));ne(a)}e()},t.start()}else B=!1,alert("Tu navegador no soporta la Web Speech API. Utiliza un navegador compatible como Chrome.")}function Ge(){C.addEventListener("click",()=>{Je(),C.classList.add("recording"),C.querySelector("p").innerHTML="Escuchando..."})}function Ke(){return document.getElementById("loginModalSection").innerHTML+=`<div class="modal fade login-modal" id="loginModal">
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
  </div>`}Ke();const F=document.querySelector("#registerForm"),me=F.username,pe=document.querySelector("#loginButton"),ve=document.querySelector("#registerButton"),z=document.querySelector("#activeBtnLogin"),V=document.querySelector("#activeBtnRegister"),be=document.querySelector("#modalTitle");function Qe(){z.addEventListener("click",Ye)}function We(){V.addEventListener("click",Ze)}function Ye(){me.classList.add("visually-hidden"),ve.classList.add("visually-hidden"),z.classList.add("visually-hidden"),pe.classList.remove("visually-hidden"),V.classList.remove("visually-hidden"),be.innerText="Iniciar sesión",F.classList.remove("was-validated")}function Ze(){me.classList.remove("visually-hidden"),ve.classList.remove("visually-hidden"),z.classList.remove("visually-hidden"),pe.classList.add("visually-hidden"),V.classList.add("visually-hidden"),be.innerText="Registro",F.classList.add("was-validated")}let N=[],Xe=[],T;const H=document.querySelector("#registerForm"),et=H.username,x=H.email,$=H.password,tt=document.querySelector("#loginButton"),at=document.querySelector("#registerButton"),nt=document.querySelector("#formModalClose");function oe(){N=b("users")}Qe();We();at.addEventListener("click",async e=>{if(e.preventDefault(),N.find(t=>t.email===x.value))alert("La cuenta ya está registrada");else if(H.checkValidity()){const t=await U(x.value,$.value),a=await U($.value,JSON.stringify({email:x.value,username:et.value,_id:t,purchase:Xe}));ot(a)}});tt.addEventListener("click",e=>{e.preventDefault();const t=N.find(a=>a.email===x.value);t?ge($.value,t.user):alert(x.value+" no registrada")});function ot(e){let t=le();N.push({_id:t,email:x.value,user:e}),I("users",N),ge($.value,e)}async function ge(e,t){try{T=JSON.parse(await re(e,t)),T&&(ie("user",T),alert("Bienvenido "+T.username),nt.click(),O(T))}catch{alert("Usuario y/o contraseña incorrectas")}}const st=document.querySelector("#activateProfile"),it=document.querySelector("#activateCart"),ct=document.querySelector("#nav-home-tab"),se=document.querySelector("#nav-profile-tab");function rt(){st.addEventListener("click",()=>{se.click()}),se.addEventListener("click",()=>{b("users")&&oe(),R("user")&&O(R("user"))}),it.addEventListener("click",()=>{ct.click(),b("users")&&oe()})}const lt=document.querySelector("#loaderSection");document.addEventListener("DOMContentLoaded",()=>{Ve(),b("carrito")&&A(),rt()});window.onload=()=>{lt.setAttribute("style","visibility:hidden; opacity:0;"),ut(dt).then(()=>{}).catch(e=>{console.error("Error al precargar imágenes:",e)}),ye(),Ge()};const dt=["img/about/boutique1.png","img/about/boutique2.png"];function ut(e){const t=[];for(const a of e){const n=new Image;n.src=a;const o=new Promise((s,i)=>{n.onload=s,n.onerror=i});t.push(o)}return Promise.all(t)}
