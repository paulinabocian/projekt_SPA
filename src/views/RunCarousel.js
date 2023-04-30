import "jquery";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export function RunCarousel() {
  var myCarousel = document.querySelector("#carouselUs");
  var carousel = new Carousel(myCarousel);
}
