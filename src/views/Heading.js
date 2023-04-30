export function Heading() {
  const h2 = document.createElement("h2");
  h2.classList.add("heading");
  h2.innerText = "Jedyne takie miejsce, stworzone dla Was...";

  return h2;
}
