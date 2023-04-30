import { NavButton } from "../common/NavButton";
import { RoomDetails } from "./RoomDetails";
import { ReservationFormStep0 } from "./ReservationFormStep0";

export function RoomList() {
  const div = document.createElement("div");

  const divList = document.createElement("div");
  divList.classList.add("list");

  div.innerHTML = `
    <h2>Apartamenty</h2>
    <p class="loading">Ładowanie pokoi...</p>
  `;

  const ul = document.createElement("ul");

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
            <strong>${room.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const makeReservationButton = NavButton(
          "Zarezerwuj",
          ReservationFormStep0
        );
        const detailsButton = NavButton("Szczegóły", () =>
          RoomDetails(room.id)
        );
        li.lastElementChild.append(makeReservationButton, detailsButton);

        return li;
      });

      ul.append(...lis);
      divList.append(ul);
      div.append(divList);
      div.querySelector(".loading").remove();
    });

  return div;
}
