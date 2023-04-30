import { ReservationFormStep0 } from "./ReservationFormStep0";

export function EmptyCart() {
  localStorage.removeItem("arrival");
  localStorage.removeItem("departure");
  localStorage.removeItem("it_spa_cart");

  return ReservationFormStep0();
}
