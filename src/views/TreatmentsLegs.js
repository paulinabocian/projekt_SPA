import { NavButton } from "../common/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cartManager";
import { Button } from "../common/Button";

export function TreatmentsLegs() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Zabiegi</h2>
    <p class="loading">Ładowanie zabiegów...</p>
  `;

  const ul = document.createElement("ul");

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const legstreatments = treatments.filter(
        (treatments) => treatments.area === "nogi"
      );

      const lis = legstreatments.map((legtreatment) => {
        const li = document.createElement("li");
        li.classList.add("treatmentListItem");
        li.classList.add(`treatment${legtreatment.id}`);

        li.innerHTML = `
          <h4>${legtreatment.name}</h4>
          <p>
            <strong>${legtreatment.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const detailsButton = NavButton("Szczegóły", () =>
          TreatmentDetails(legtreatment.id)
        );
        const addToCartButton = Button("Dodaj do koszyka", () =>
          cartManager.addItem(legtreatment)
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
