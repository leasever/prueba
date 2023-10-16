import productData from "../data/products.json";
import { ProductEntry, UserConnected } from "../types";
import { dateSpanish, formatCurrency } from "../utilities/utils";
import CanvaCard from "./CanvaCard";

CanvaCard();
const products: ProductEntry[] = productData as ProductEntry[];

// Importa solo lo necesario para crear el PDF cuando sea necesario
function generatePdf(id: string) {
  import("jspdf").then((jsPDFModule) => {
    const jsPDF = jsPDFModule.default;
    const doc = new jsPDF();
    import("jspdf-autotable").then((autoTableModule) => {
      //       //
      //       //_____________________________________________________________________________________________________
      //       //                                                                          _________________________
      //       //LOGO 'img/logo.png'                                                      |   FACTURA ELECTRÓNICA   |
      //       //                                                                         |     RUC:20112811096     |
      //       //                                                                         |        F001-53948       |
      //       //                                                                          -------------------------
      //       //TCI S.A TRANSPORTE CONFIDENCIAL DE INFORMACIÓN
      //       //TCI S.A
      //       //MIGUEL SEMINARIO 230
      //       //LIMA-LIMA-SAN ISIDRO
      //       //
      //       // __________________________________________________________________________________________________
      //       //| Fecha de Emisión: 2019-12-12          Fecha de vencimiento: 2019-12-18                           |
      //       //| Señor(es):        UNIVERSIDAD FRANCISCANA SAN JOSÉ                                               |
      //       //| Dirección:        AV. JAVIER PRADO ESTE 390, SAN BORJA, LIMA - PERÚ                              |
      //       //| RUC:              20157394329                                                                    |
      //       //| Tipo Moneda:      SOL                                                                            |
      //       // --------------------------------------------------------------------------------------------------
      //       //
      //       // __________________________________________________________________________________________________
      //       //| Item |           Descripción                 |     V.U     |    Cantidad    |    Importe sin IGV |
      //       // --------------------------------------------------------------------------------------------------
      //       //|   1  | PAGO MENSUAL Servicio A               |   1,650.00  |         1.000  |           1,650.00 |
      //       // --------------------------------------------------------------------------------------------------
      //       //|   2  | PAGO MENSUAL Servicio B               |   1,650.00  |         1.000  |           1,650.00 |
      //       // --------------------------------------------------------------------------------------------------
      //       //
      //       //
      //       // __________________________________________________________________________________________________
      //       //| Operación Sujeta al Sistema de pago de Obligaciones Tributarias D.Leg.940-12.00%(S/380.20 SOLES) |
      //       //| -CÓDIGO SE BB Y SS SUJETO A DETRACCIÓN:     037 - Demás servicios gravados con el IGV            |
      //       //| -NÚMERO DE CTA EN EL BIN:                   5222910                                              |
      //       // --------------------------------------------------------------------------------------------------
      //       //
      //       //
      //       //                                 ___________________________________________________________________
      //       //                                | Total de Valor de Venta - Operaciones Gravadas:  | S/    2,684.00 |
      //       //                                 -------------------------------------------------------------------
      //       //                                | IGV:                                             | S/    2,684.00 |
      //       //                                 -------------------------------------------------------------------
      //       //                                | Importe Total:                                   | S/    2,684.00 |
      //       //                                 -------------------------------------------------------------------
      //       //
      //       //_____________________________________________________________________________________________________

      //       //estaba haciendo con esto autotable pero tambien puedes usar el autotable con lo de arriba despues ára adaptarlo primero hacemos una muestra
      const autoTable = autoTableModule.default;
      autoTable(doc, { html: `#my-table-${id}` });
      doc.save(`${id}.pdf`);
    });
  });
}

export function profileDetailPurchase(userconnected: UserConnected) {
  const purchaseDetails =
    document.querySelector<HTMLDivElement>("#divAccordion")!;

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

    accordionbutton.innerText = dateSpanish(compra.date);

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
    tableproduct.setAttribute("id", `my-table-${compra._id}`);
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
      const product = products.find(
        (product) => product._id === compra.items[i]["_id"]
      )!;
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
            <td class="text-end">${
              compra.items[i]["quantity"] * product.price
            }</td>
          </tr>    
        </tbody>`;
    }
    tableproduct.innerHTML += `
      <tfoot>
        <tr class="text-end"> 
          <td></td>           
          <td class="fw-bolder">Total: </td>
          <td>${formatCurrency(total)}</td>
        </tr>   
      </tfoot>`;

    const btnDownloadPdf = document.createElement("button");
    btnDownloadPdf.className = "";
    btnDownloadPdf.type = "button";
    btnDownloadPdf.setAttribute("id", `btn-download-${compra._id}`);
    btnDownloadPdf.innerText = "Descargar factura";
    btnDownloadPdf.addEventListener("click", () => {
      generatePdf(compra._id);
    });

    h2accordionheader.append(accordionbutton);
    accordionbody.append(idtransaction, tableproduct, btnDownloadPdf);

    accordioncollapse.append(accordionbody);

    purchaseDetails.append(h2accordionheader);
    purchaseDetails.append(accordioncollapse);
  });
}
