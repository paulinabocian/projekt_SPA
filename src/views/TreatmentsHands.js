import { NavButton } from "../common/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";
import { Button } from "../common/Button";
import { cartManager } from "../cart/cartManager";

export function TreatmentsHands() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Zabiegi</h2>
    <p class="loading">Ładowanie zabiegów...</p>
  `;

  const ul = document.createElement("ul");

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const handstreatments = treatments.filter(
        (treatments) => treatments.area === "dłonie"
      );

      const lis = handstreatments.map((handtreatment) => {
        const li = document.createElement("li");
        li.classList.add("treatmentListItem");
        li.classList.add(`treatment${handtreatment.id}`);

        li.innerHTML = `
          <h4>${handtreatment.name}</h4>
          <p>
            <strong>${handtreatment.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const detailsButton = NavButton("Szczegóły", () =>
          TreatmentDetails(handtreatment.id)
        );
        const addToCartButton = Button("Dodaj do koszyka", () =>
          cartManager.addItem(handtreatment)
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
