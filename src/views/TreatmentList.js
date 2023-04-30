import { NavButton } from "../common/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";
import { ChooseBodyPartAllBody } from "./ChooseBodyPartAllBody";
import { ChooseBodyPartHands } from "./ChooseBodyPartHands";
import { ChooseBodyPartLegs } from "./ChooseBodyPartLegs";
import { ChooseBodyPartBack } from "./ChooseBodyPartBack";
import { cartManager } from "../cart/cartManager";
import { Button } from "../common/Button";

export function TreatmentList() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Zabiegi</h2>
    <p class="loading">Ładowanie zabiegów...</p>
  `;

  const divList = document.createElement("div");
  divList.classList.add("list");

  const headingBodyPart = document.createElement("h3");
  headingBodyPart.innerText = "Obszar ciała:";

  const ul = document.createElement("ul");

  const headingAll = document.createElement("h3");
  headingAll.innerText = "Wszystkie zabiegi:";

  const containerButtoms = document.createElement("div");
  containerButtoms.classList.add("buttonsContainer");

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const lis = treatments.map((treatment) => {
        const li = document.createElement("li");
        li.classList.add("treatmentListItem");
        li.classList.add(`treatment${treatment.id}`);

        li.innerHTML = `
          <h4>${treatment.name}</h4>
          <p>
            <strong>${treatment.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const addToCartButton = Button("Dodaj do koszyka", () =>
          cartManager.addItem(treatment)
        );
        const detailsButton = NavButton("Szczegóły", () =>
          TreatmentDetails(treatment.id)
        );
        li.lastElementChild.append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);
      divList.append(headingAll);
      divList.append(ul);
      div.append(divList);
      div.querySelector(".loading").remove();
    });
  div.append(headingBodyPart);
  containerButtoms.append(ChooseBodyPartAllBody());
  containerButtoms.append(ChooseBodyPartHands());
  containerButtoms.append(ChooseBodyPartLegs());
  containerButtoms.append(ChooseBodyPartBack());

  div.append(containerButtoms);
  div.append(headingAll);

  return div;
}
