import { ProductEntry } from "../types";

export default function ProductGallery({
  _id,
  name,
  image,
  description,
}: ProductEntry) {
  return (document.getElementById("productModal")!.innerHTML += `
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
  </div>`);
}
