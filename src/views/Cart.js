import { cartManager } from "../cart/cartManager";
import { NavButton } from "../common/NavButton";
import { EmptyCart } from "./EmptyCart";

export function Cart() {
  const div = document.createElement("div");
  const arrival = localStorage.getItem("arrival");
  const departure = localStorage.getItem("departure");

  div.innerHTML = `
    <h2>Koszyk</h2>
    <p>Przeglądaj zawartość koszyka.</p>
    <table class="table">
      <tr>
        <th>Nazwa</th>
        <th>Ilość</th>
        <th>Cena</th>
        <th>🛒</th>
      </tr>
    </table>
  `;

  const tableRows = cartManager.getAllItems().map((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td></td>
    `;

    const removeItemButton = NavButton("🗑️", () => {
      cartManager.removeItem(item);
      return Cart();
    });

    tr.lastElementChild.append(removeItemButton);

    return tr;
  });

  const tableFooter = document.createElement("tr");

  tableFooter.innerHTML = `
    <td></td>
    <td></td>
    <td>
      Total = <strong>${cartManager.getTotalPrice()} PLN</strong>
    </td>
    <td></td>
  `;

  div.querySelector(".table").append(...tableRows, tableFooter);

  const arrivalInfo = document.createElement("p");
  arrivalInfo.innerText = `Data przyjazdu:  ` + arrival;

  if (arrival === null) {
    arrivalInfo.innerText = "Nie wybrano daty przyjazdu";
  }
  const departureInfo = document.createElement("p");
  departureInfo.innerText = `Data wyjazdu:  ` + departure;

  if (departure === null) {
    departureInfo.innerText = "Nie wybrano daty wyjazdu";
  }

  const changeBookingDiv = document.createElement("div");
  changeBookingDiv.classList.add("removeButton");
  const changeBooking = NavButton("Wyczyść dane rezerwacji", EmptyCart);

  changeBookingDiv.append(changeBooking);
  div.append(changeBookingDiv);
  div.append(arrivalInfo);
  div.append(departureInfo);

  return div;
}
