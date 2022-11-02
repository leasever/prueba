import productData from "../data/products.json";
import { UserConnected, ProductEntry } from "../types";
import moment from "moment";
import 'moment/locale/es';


const accordionitems = document.querySelector<HTMLDivElement>("#accordionItems")!;
const products: ProductEntry[] = productData as ProductEntry[];

export function profileModal(userconnected: UserConnected) {
  console.log("esto es de perfilmodal ", userconnected);
  accordionitems.innerHTML = ``;

  const divaccordion = document.createElement("div");

  const cardprofile = document.createElement("div");
  cardprofile.className = "card mb-2";

  const cardheader = document.createElement("div");
  cardheader.className = "card-header";
  cardheader.innerText = "Hola, " + userconnected.username;
  console.log(userconnected.username)

  const listgroup = document.createElement("ul");
  listgroup.className = "list-group list-group-flush";

  const email = document.createElement("li");
  email.className = "list-group-item";
  email.innerText = userconnected.email;
  const totalshopping = document.createElement("li");
  totalshopping.className = "list-group-item";
  totalshopping.innerText = "Compras realizadas: " + userconnected.purchase.length;

  cardprofile.append(cardheader);
  cardprofile.append(listgroup);
  listgroup.append(email, totalshopping);
  divaccordion.append(cardprofile);
  console.log('las compras ', userconnected.purchase)
  if (userconnected.purchase.length > 0) {
    userconnected.purchase.reverse().map((compra, index) => {
      console.log(compra)
      const h2accordionheader = document.createElement("h2");
      h2accordionheader.className = "accordion-header";
      h2accordionheader.id = "accordion" + index;
      console.log("accordion" + index)
      const accordionbutton = document.createElement("button");
      accordionbutton.className = "accordion-button";
      accordionbutton.type = "button";
      accordionbutton.setAttribute("data-bs-toggle", "collapse");
      accordionbutton.setAttribute("data-bs-target", "#colpase" + index);
      accordionbutton.setAttribute("aria-expanded", "true");
      accordionbutton.setAttribute("aria-controls", "colpase" + index);
      
      accordionbutton.innerText = moment(compra.date).format("LLLL")

      const accordioncollapse = document.createElement("div");
      accordioncollapse.id = "colpase" + index;
      accordioncollapse.className = "accordion-collapse collapse show";
      accordioncollapse.setAttribute("aria-labelledby", "accordion" + index);

      const accordionbody = document.createElement("div");
      accordionbody.className = "accordion-body px-1";

      const tableproduct = document.createElement("table");
      tableproduct.className = "table table-sm table-bordered";
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
      accordionbody.append(tableproduct);

      accordioncollapse.append(accordionbody);

      divaccordion.append(h2accordionheader);
      divaccordion.append(accordioncollapse);
    });
  }
  accordionitems.append(divaccordion);
}
