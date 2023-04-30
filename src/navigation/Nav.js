import { NavButton } from "../common/NavButton";
import { Cart } from "../views/Cart";
import { Home } from "../views/Home";
import { RoomList } from "../views/RoomList";
import { TreatmentList } from "../views/TreatmentList";
import { ReservationFormStep0 } from "../views/ReservationFormStep0";

const navItems = [
  { name: "Zarezewuj", component: ReservationFormStep0 },
  { name: "O nas", component: Home },
  { name: "Apartamenty", component: RoomList },
  { name: "Zabiegi", component: TreatmentList },
  { name: "🛒", component: Cart },
];

export function Nav() {
  const nav = document.createElement("nav");
  nav.classList.add(
    "navbar",
    "navbar-expand-lg",
    "navbar-light",
    "bg-transparent"
  );
  const div = document.createElement("div");
  div.classList.add("container-fluid");
  const logo = document.createElement("a");
  logo.classList.add("navbar-brand");
  logo.setAttribute("href", "http://localhost:1234");
  const img = document.createElement("img");
  img.src = require("../assets/logo.png");

  logo.appendChild(img);
  div.append(logo);

  const navButtons = navItems.map((item) => {
    return NavButton(item.name, item.component);
  });
  const buttonNavigation = document.createElement("button");
  buttonNavigation.classList.add("navbar-toggler");
  buttonNavigation.setAttribute("type", "button");
  buttonNavigation.setAttribute("data-bs-toggle", "collapse");
  buttonNavigation.setAttribute("data-bs-target", "#navbarSupportedContent");
  buttonNavigation.setAttribute("aria-controls", "navbarSupportedContent");
  buttonNavigation.setAttribute("aria-expanded", "false");
  buttonNavigation.setAttribute("aria-label", "Toggle navigation");

  div.appendChild(buttonNavigation);

  const span = document.createElement("span");
  span.classList.add("navbar-toggler-icon");
  3;

  buttonNavigation.appendChild(span);

  const divNavigation = document.createElement("div");
  divNavigation.classList.add("collapse", "navbar-collapse");
  divNavigation.setAttribute("id", "navbarSupportedContent");

  nav.appendChild(divNavigation);

  const ul = document.createElement("ul");
  ul.classList.add("navbar-nav");

  const listItem0 = document.createElement("li");
  listItem0.classList.add("nav-item", "active");

  const listItem0Child = document.createElement("a");
  listItem0Child.classList.add("nav-link");
  listItem0Child.setAttribute("href", "#");
  listItem0.append(listItem0Child);

  const listItem1 = document.createElement("li");
  listItem1.classList.add("nav-item");
  const listItem1Child = document.createElement("a");
  listItem1Child.classList.add("nav-link");
  listItem1Child.setAttribute("href", "#");
  listItem1.append(listItem1Child);

  const listItem2 = document.createElement("li");
  listItem2.classList.add("nav-item");
  const listItem2Child = document.createElement("a");
  listItem2Child.classList.add("nav-link");
  listItem2Child.setAttribute("href", "#");
  listItem2.append(listItem2Child);

  const listItem3 = document.createElement("li");
  listItem3.classList.add("nav-item");
  const listItem3Child = document.createElement("a");
  listItem3Child.classList.add("nav-link");
  listItem3Child.setAttribute("href", "#");
  listItem3.append(listItem3Child);

  const listItem4 = document.createElement("li");
  listItem4.classList.add("nav-item");
  const listItem4Child = document.createElement("a");
  listItem4Child.classList.add("nav-link");
  listItem4Child.setAttribute("href", "#");
  listItem4.append(listItem4Child);

  listItem0Child.appendChild(navButtons[0]);
  listItem1Child.appendChild(navButtons[1]);
  listItem2Child.appendChild(navButtons[2]);
  listItem3Child.appendChild(navButtons[3]);
  listItem4Child.appendChild(navButtons[4]);

  ul.appendChild(listItem0);

  listItem0.after(listItem1);
  listItem1.after(listItem2);
  listItem2.after(listItem3);
  listItem3.after(listItem4);
  nav.append(div);
  div.appendChild(divNavigation);
  divNavigation.append(ul);

  return nav;
}
