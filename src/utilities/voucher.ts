import { ProductEntry, Purchase, UserConnected } from "../types";
import { dateSpanish, formatCurrency } from "./utils";
import productData from "../data/products.json";
import { convertirNumeroALetras } from "./numberToLetter";

const products: ProductEntry[] = productData as ProductEntry[];
export function generatePdf(compra: Purchase, userconnected: UserConnected) {
  import("jspdf").then((jsPDFModule) => {
    import("jspdf-autotable").then((autoTableModule) => {
      const jsPDF = jsPDFModule.default;
      const doc = new jsPDF();
      const autoTable = autoTableModule.default;

      doc.setFont("helvetica");
      doc.setFontSize(12);

      const companyName = "DSS S.A";
      const companyAddress = "MIGUEL SEMINARIO 230";
      const companyCity = "LIMA-LIMA-SAN ISIDRO";
      const companyRUC = "20112811096";

      const clientName = `${userconnected.username}`;
      const clientAddress = `${userconnected.email}`;
      const clientRUC = "";

      const dueDate = dateSpanish(compra.date);

      doc.addImage("img/logo.png", "PNG", 15, 10, 15, 15);

      autoTable(doc, {
        body: [
          [
            {
              content: "COMPROBANTE ELECTRÓNICO",
              styles: { halign: "center", fontStyle: "bold" },
            },
          ],

          [{ content: "RUC: " + companyRUC, styles: { halign: "center" } }],
          [
            { content: "F001 - 53948", styles: { halign: "center" } },
            companyRUC,
          ],
        ],
        startY: 10,
        theme: "plain",
        styles: {
          fontSize: 12,
          cellWidth: "wrap",
          cellPadding: 1,
          minCellWidth: 20,
        },
        margin: { left: 107 },
      });
      autoTable(doc, {
        body: [[companyName], [companyAddress], [companyCity]],
        startY: (doc as any).lastAutoTable.finalY,
        theme: "plain",
        styles: {
          fontSize: 12,
          cellWidth: "wrap",
          cellPadding: 1,
          minCellWidth: 20,
        },
      });

      autoTable(doc, {
        body: [
          ["Señor(es)", clientName],
          ["Email", clientAddress],
          ["RUC", clientRUC],
          ["Fecha de Emisión", dueDate],
          ["Fecha de vencimiento", dueDate],
        ],
        tableLineWidth: 0.1,
        startY: (doc as any).lastAutoTable.finalY + 5,
        theme: "plain",
        styles: { fontSize: 12, cellWidth: "wrap", cellPadding: 1 },
      });

      if (compra) {
        const productsInPurchase = compra.items.map((item) => {
          const product = products.find((p) => p._id === item._id);
          if (product) {
            return {
              name: product.name,
              price: product.price,
              quantity: item.quantity,
              subtotal: product.price * item.quantity,
            };
          }
          return null;
        });

        autoTable(doc, {
          head: [["Item", "Descripción", "V.U", "Cantidad", "Importe sin IGV"]],
          body: productsInPurchase.map((product, index) => [
            index + 1,
            product!.name,
            {
              content: formatCurrency(product!.price),
              styles: { halign: "right" },
            },
            { content: product!.quantity, styles: { halign: "right" } },
            {
              content: formatCurrency(product!.subtotal),
              styles: { halign: "right" },
            },
          ]),
          startY: (doc as any).lastAutoTable.finalY + 10,
          theme: "grid",
          styles: { fontSize: 12 },
        });

        const subtotal = productsInPurchase.reduce(
          (acc, product) => acc + product!.subtotal,
          0
        );
        const igv = subtotal * 0.18;
        const total = subtotal + igv;

        autoTable(doc, {
          body: [
            [
              "Total de Valor de Venta - Operaciones Gravadas:",
              {
                content: formatCurrency(subtotal),
                styles: { halign: "right" },
              },
            ],
            [
              "IGV:",
              { content: formatCurrency(igv), styles: { halign: "right" } },
            ],
            [
              "Importe Total:",
              { content: formatCurrency(total), styles: { halign: "right" } },
            ],
            [
              {
                content: "SON:" + convertirNumeroALetras(total),
                colSpan: 5,
                styles: { halign: "left" },
              },
            ],
          ],
          startY: (doc as any).lastAutoTable.finalY + 10,
          theme: "grid",
          styles: { fontSize: 12 },
        });

        doc.save(`${compra._id}.pdf`);
      } else {
        console.error("No se encontró una compra con el ID proporcionado.");
      }
    });
  });
}
