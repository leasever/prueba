import productData from "../data/products.json";
import { ProductEntry, UserConnected } from "../types";

const products: ProductEntry[] = productData as ProductEntry[];

export function profileDetailPurchase(userconnected: UserConnected) {
  const purchaseDetails = document.querySelector<HTMLDivElement>("#divAccordion")!;

  userconnected.purchase.reverse().map((compra, index) => {
    const h2accordionheader = document.createElement("h2");
    h2accordionheader.className = "accordion-header";
    h2accordionheader.id = "accordion" + index;

    const accordionbutton = document.createElement("button");
    accordionbutton.className = "accordion-button";
    accordionbutton.type = "button";
    accordionbutton.setAttribute("data-bs-toggle", "collapse");
    accordionbutton.setAttribute("data-bs-target", "#colpase" + index);
    accordionbutton.setAttribute("aria-expanded", "true");
    accordionbutton.setAttribute("aria-controls", "colpase" + index);

    const datespanish = new Date(compra.date).toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    accordionbutton.innerText = datespanish;

    const accordioncollapse = document.createElement("div");
    accordioncollapse.id = "colpase" + index;
    accordioncollapse.className = "accordion-collapse collapse show";
    accordioncollapse.setAttribute("aria-labelledby", "accordion" + index);

    const accordionbody = document.createElement("div");
    accordionbody.className = "accordion-body px-1";
    const idtransaction = document.createElement("span");
    idtransaction.className = "fw-600";
    idtransaction.innerText = "ID: " + compra._id;

    const tableproduct = document.createElement("table");
    tableproduct.className = "table table-sm table-bordered mt-2";
    tableproduct.innerHTML += `
    <thead>
       <tr>        
        <th scope="col">Producto</th>
        <th scope="col">P.U</th>
        <th scope="col">Subtotal</th>        
      </tr>
    </thead>       
    `;
    let total = 0;
    for (let i = 0; i < compra.items.length; i++) {
      const product = products.find((product) => product._id === compra.items[i]["_id"])!;
      total += compra.items[i]["quantity"] * product.price;
      tableproduct.innerHTML += `          
        <tbody>
          <tr >            
            <td scope="row">
              <a href="#staticBackdrop${product._id}" data-bs-toggle="modal">
               ${product.name + " - x" + compra.items[i]["quantity"]}
              </a>
            </td>
            <td class="text-end">${product.price}</td>
            <td class="text-end">${compra.items[i]["quantity"] * product.price}</td>
          </tr>    
        </tbody>`;
    }
    tableproduct.innerHTML += `
      <tfoot>
        <tr class="text-end"> 
          <td></td>           
          <td class="fw-bolder">Total: </td>
          <td>$ ${total}</td>
        </tr>   
      </tfoot>`;

    h2accordionheader.append(accordionbutton);
    accordionbody.append(idtransaction, tableproduct);

    accordioncollapse.append(accordionbody);

    purchaseDetails.append(h2accordionheader);
    purchaseDetails.append(accordioncollapse);
  });
}
