import Rating from "./Rating";
import { ProductEntry } from "../types";

export default function ProductGallery({
  _id,
  name,
  image,
  rating,
  price,
  description,
}: ProductEntry) {  
  return (
    (document.getElementById(
      "productSection",
    )!.innerHTML += ` <div class="col" key="${_id}">
        <div class="card">
          <a href="#staticBackdrop${_id}" data-bs-toggle="modal" >
            <img src="${image[0]}" class="card-img-top" alt="${name}">
          </a>
          <div class="card-body">          
            <span class="card-title" name="productName" >${name}</span>
            <p class="card-text" id="productprice" >$ ${price}</p>
            <div id="starts">
            ${Rating(rating)}     
            </div>         
          </div>
          <div class="d-grid col-6 mx-auto mb-3">
            <button id="agregar${_id}" class="btn btn-outline-dark btn-custom text-break" type="button">Añadir&nbsp;
              <i class="fa-solid fa-bag-shopping"></i>
            </button>            
          </div>
        </div>
     </div>`),
    //product modal
    (document.getElementById("productModal")!.innerHTML += `
  <div class="modal fade" id="staticBackdrop${_id}" key="${_id}" >
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title px-0" id="exampleModalLabel">${name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div id="carouselExampleIndicators${_id}" class="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators${_id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators${_id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators${_id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner text-center">
                    ${image.map(function (img: string, index: number) {
                      if (index > 0 && index <= 3) {
                        return `<div class="carousel-item  ${
                          index === 1 ? "active" : ""
                        }">
                          <img src="${img}" class="d-block w-100 img-thumbnail" alt="${name}">
                        </div>`;
                      }
                      return null;
                    })}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${_id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${_id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="col-12  text-center pt-2">
                <p>${description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`)
  );
}
