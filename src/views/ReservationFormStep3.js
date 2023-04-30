import { cartManager } from "../cart/cartManager";
import { BookingSuccess } from "./BookingSuccess";
import { NavButton } from "../common/NavButton";

export function ReservationFormStep3() {
  const form = document.createElement("div");
  form.classList.add("reservationForm");

  const h2 = document.createElement("h2");
  h2.innerText = "Rezerwacja";
  form.append(h2);

  const ul = document.createElement("ul");

  let arrivalDate = localStorage.getItem("arrival");
  arrivalDate = new Date(arrivalDate);
  arrivalDate.toLocaleDateString();

  let departureDate = localStorage.getItem("departure");
  departureDate = new Date(departureDate);

  departureDate.toLocaleDateString();

  const calculatedTime = departureDate.getTime() - arrivalDate.getTime();
  const calculatedDays = calculatedTime / (1000 * 3600 * 24);

  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      const lis = rooms.map((room) => {
        const li = document.createElement("li");
        li.classList.add("roomListItem");
        li.classList.add(`room${room.id}`);
        li.innerHTML = `
          <h4>${room.name}</h4>
          <p>
            <strong>${room.price.toFixed(2) * calculatedDays} PLN</strong>
          </p>
          <footer></footer>
        `;

        const addToCartButton = NavButton("Wybierz", BookingSuccess);

        li.lastElementChild.append(addToCartButton);
        addToCartButton.addEventListener("click", () => {
          const key = "calculatedDays";
          localStorage.setItem(key, calculatedDays);
        });

        addToCartButton.addEventListener("click", () =>
          cartManager.addRes(room)
        );
        return li;
      });

      ul.append(...lis);
      form.append(ul);
    });

  return form;
}
