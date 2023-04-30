import { NavButton } from "../common/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cartManager";
import { Button } from "../common/Button";

export function TreatmentsBody() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Zabiegi</h2>
    <p class="loading">Ładowanie zabiegów...</p>
  `;

  const ul = document.createElement("ul");

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const bodytreatments = treatments.filter(
        (treatments) => treatments.area === "całe ciało"
      );

      const lis = bodytreatments.map((bodytreatment) => {
        const li = document.createElement("li");
        li.classList.add("treatmentListItem");
        li.classList.add(`treatment${bodytreatment.id}`);

        li.innerHTML = `
          <h4>${bodytreatment.name}</h4>
          <p>
            <strong>${bodytreatment.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const detailsButton = NavButton("Szczegóły", () =>
          TreatmentDetails(bodytreatment.id)
        );
        const addToCartButton = Button("Dodaj do koszyka", () =>
          cartManager.addItem(bodytreatment)
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
