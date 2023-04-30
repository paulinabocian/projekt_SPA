import { NavButton } from "../common/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cartManager";
import { Button } from "../common/Button";

export function TreatmentsBack() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Zabiegi</h2>
    <p class="loading">Ładowanie zabiegów...</p>
  `;

  const ul = document.createElement("ul");

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const backtreatments = treatments.filter(
        (treatments) => treatments.area === "plecy"
      );

      const lis = backtreatments.map((backtreatment) => {
        const li = document.createElement("li");
        li.classList.add("treatmentListItem");
        li.classList.add(`treatment${backtreatment.id}`);

        li.innerHTML = `
          <h4>${backtreatment.name}</h4>
          <p>
            <strong>${backtreatment.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const detailsButton = NavButton("Szczegóły", () =>
          TreatmentDetails(backtreatment.id)
        );
        const addToCartButton = Button("Dodaj do koszyka", () =>
          cartManager.addItem(backtreatment)
        );
        li.lastElementChild.append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);
      div.append(ul);
      div.querySelector(".loading").remove();
    });

  return div;
}
