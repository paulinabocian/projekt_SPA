import { NavButton } from "../common/NavButton";
import { Button } from "../common/Button";
import { TreatmentList } from "./TreatmentList";
import { cartManager } from "../cart/cartManager";

export function TreatmentDetails(treatmentId) {
  const div = document.createElement("div");
  div.classList.add("treatmentDetails");

  div.innerHTML = `
    <p class="loading">Ładuję zabieg...</p>
  `;

  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then((response) => response.json())
    .then((treatment) => {
      const article = document.createElement("article");

      article.innerHTML = `
        <h3>${treatment.name}</h3>
       
        <p>Okolica zabiegowa: ${treatment.area}</p>
        <p>Czas zabiegu: ${treatment.time}</p> 
        <div class="imgTreatmentDetails" id="treatment${treatment.id}"></div>
        <p>
          <strong>${treatment.price.toFixed(2)} PLN</strong>
        </p>
      `;

      const divButtons = document.createElement("div");
      divButtons.classList.add("buttons");

      const backButton = NavButton("Pokaż wszystkie zabiegi", TreatmentList);
      const addButton = Button(
        "Dodaj do koszyka",
        cartManager.addItem(treatment)
      );

      divButtons.append(backButton);
      divButtons.append(addButton);
      article.append(divButtons);
      div.querySelector(".loading").remove();
      div.append(article);
    });
  return div;
}